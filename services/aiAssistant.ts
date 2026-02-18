
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askAuthorAssistant(question: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the author of the book "Digital Economy Masterclass". 
      The book is about building digital products, marketing, and automation.
      A potential reader is asking you: "${question}". 
      Answer in a helpful, persuasive author-like tone (max 3 sentences).`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm here to help you succeed in the digital space. Ask me anything about the book's content!";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm currently busy writing my next chapter, but I can tell you that this book will change your digital strategy!";
  }
}
