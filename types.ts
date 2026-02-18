
export interface User {
  id: string;
  email: string;
  paymentId?: string;
  orderId?: string;
  amount: number;
  status: 'pending' | 'paid';
  createdAt: Date;
}

export interface Book {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  coverImage: string;
  features: string[];
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}
