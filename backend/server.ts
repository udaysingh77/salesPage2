
/* 
  BACKEND IMPLEMENTATION (EXPRESS.JS)
  Note: This is provided as a reference file. In a real environment, 
  you would move this to a separate Node.js project.
*/

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// --- Database Configuration ---
// mongoose.connect(process.env.MONGO_URI!);

// --- Models ---
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  paymentId: String,
  orderId: String,
  amount: Number,
  status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', UserSchema);

// --- Services ---
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET!
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// --- Routes ---

// 1. Create Order
app.post('/api/create-order', async (req, res) => {
  const { email } = req.body;
  try {
    const options = {
      amount: 299 * 100, // 299 INR
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };
    
    const order = await razorpay.orders.create(options);
    
    // Save pending user
    const user = new User({
      email,
      orderId: order.id,
      amount: 299,
      status: 'pending'
    });
    await user.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Order creation failed" });
  }
});

// 2. Verify Payment & Send Email
app.post('/api/verify-payment', async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email } = req.body;

  const generated_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_SECRET!)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex');

  if (generated_signature === razorpay_signature) {
    // Update DB
    await User.findOneAndUpdate(
      { orderId: razorpay_order_id },
      { status: 'paid', paymentId: razorpay_payment_id }
    );

    // Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Book is Ready - NexusBooks',
      html: `
        <h1>Welcome to the Nexus, ${email}!</h1>
        <p>Thank you for purchasing <b>The Digital Economy Masterclass</b>.</p>
        <p>You can download your copy here: <a href="https://example.com/download">Download Now</a></p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Invalid signature" });
  }
});

// 3. Health Check
app.get('/health', (req, res) => res.json({ status: 'up' }));

// app.listen(5000, () => console.log('Server running on port 5000'));
