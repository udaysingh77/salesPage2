
import { GoogleGenAI } from "@google/genai";

/**
 * Assistant service for interacting with the author AI.
 * Follows Google GenAI SDK guidelines for initialization and usage.
 */

export async function askAuthorAssistant(question: string): Promise<string> {
  // Use process.env.API_KEY directly in the constructor as per @google/genai guidelines.
  // We initialize the instance inside the function to ensure the latest API key is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the author of the book "Digital Economy Masterclass". 
        The book is about building digital products, marketing, and automation.
        Answer the reader's questions in a helpful, persuasive author-like tone (max 3 sentences).`,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Directly access .text property from GenerateContentResponse (not a method)
    return response.text || "I'm here to help you succeed in the digital space. Ask me anything about the book's content!";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm currently busy writing my next chapter, but I can tell you that this book will change your digital strategy!";
  }
}
