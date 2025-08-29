// server/configs/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function generateBlogContent(prompt) {
  if (!prompt || typeof prompt !== "string") {
    throw new Error("Prompt is required");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  // You can switch to "gemini-1.5-pro" if you prefer

  // Simple: let SDK handle the request shape
  const result = await model.generateContent(
    `You are a helpful blog writer. Write clear, markdown-formatted content (no code fences).
Topic: ${prompt}
Length: ~1000-1500words. Use headings, short paragraphs, and bullet points where useful. lay special emphasis on making it look clean by segregating points , making proper bold heading `
  );

  return result.response.text(); // clean markdown text
}
