import { useState } from "react";
import { generateTasks } from "../../services/aiService";

function AIModal({ onClose }) {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!prompt.trim()) return;

    try {
      setLoading(true);

      const response = await generateTasks(prompt);

      setResult(response);
    } catch (error) {
  console.error(error);

  if (
    error.message &&
    error.message.includes("429")
  ) {
    alert(
      "Gemini API quota exceeded. Please use another API key or enable billing in Google AI Studio."
    );
  } else {
    alert("Failed to generate tasks.");
  }
}
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-slate-900 rounded-xl p-6 w-full max-w-2xl">

        <h2 className="text-2xl font-bold text-white mb-5">
          🤖 AI Task Generator
        </h2>

        <textarea
          rows="5"
          placeholder="Example: Build an Ecommerce Website"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full bg-slate-800 text-white rounded-lg p-4"
        />

        <div className="flex gap-3 mt-5">

          <button
            onClick={handleGenerate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            {loading ? "Generating..." : "Generate"}
          </button>

          <button
            onClick={onClose}
            className="bg-slate-700 text-white px-5 py-2 rounded-lg"
          >
            Close
          </button>

        </div>

        {result && (
          <div className="mt-6 bg-slate-800 rounded-lg p-4 whitespace-pre-wrap text-white">
            {result}
          </div>
        )}

      </div>

    </div>
  );
}

export default AIModal;