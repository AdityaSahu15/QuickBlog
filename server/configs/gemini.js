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
  const result = await model.generateContent(`You are an expert content writer and SEO blogger. Write a detailed blog article of around 1000–1500 words on the topic:  
Topic: ${prompt}
### Writing & Formatting Instructions:
- The blog should look **professional, structured, and clean**.  
- Use **H1 for the main title**, H2 for main headings, and H3 for subheadings.  
- Write in **short paragraphs** (3–5 lines for readability).  
- Use **bullet points or numbered lists** where useful.  
- **Important:** Every bullet point must have a **detailed explanation of at least 2–4 paragraphs**. Do not leave them empty.  
- Maintain a **logical flow**: Introduction → Step-by-step content → Conclusion.  
- Keep the tone **engaging, conversational, and informative**.  
- Avoid generic one-liners under bullet points. Instead, give **detailed insights, examples, and practical advice**.  
- Use **SEO-friendly keywords** naturally throughout the article.  
- Ensure it feels like a **real blog post written by a human**, not just an outline.  

### Blog Structure:
1. **Introduction**
   - Write a strong hook that captures attention.  
   - Briefly explain why the topic matters and what readers will learn.  

2. **Main Content (Broken into H2s & H3s)**
   - Each section should have **clear explanations**.  
   - Whenever bullet points or sub-points appear, expand them into **detailed content** (2–4 paragraphs).  
   - Use **examples, analogies, or step-by-step guidance** to make explanations relatable.  

3. **Conclusion**
   - Summarize key learnings.  
   - Offer motivation, actionable takeaways, or a thought-provoking closing.  

### Output Requirements:
- Length: **1000–1500 words**  
- Clean formatting with **headings, subheadings, and bullets**  
- Every bullet must be **fully explained** (no empty placeholders).  
- No AI disclaimers or robotic tone — write like a **professional lifestyle blogger**.     `
  );

  return result.response.text(); // clean markdown text
}
