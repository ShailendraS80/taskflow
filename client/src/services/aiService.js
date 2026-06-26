import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

// Updated model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export async function generateTasks(prompt) {
  try {
    const result = await model.generateContent(`
Break the following project into small actionable todo tasks.

Project:
${prompt}

Rules:
- Return only bullet points.
- Keep each task short.
- Do not add explanations.
`);

    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}