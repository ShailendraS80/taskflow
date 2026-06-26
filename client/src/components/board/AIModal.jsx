import { useState } from "react";
import { generateTasks } from "../../services/aiService";
import { useTheme } from "../../context/ThemeContext";

function AIModal({ onClose }) {
  const { theme } = useTheme();

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
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div
        className={`w-full max-w-2xl rounded-xl p-6 transition-colors ${
          theme === "dark"
            ? "bg-slate-900"
            : "bg-white shadow-xl"
        }`}
      >

        <h2
          className={`text-2xl font-bold mb-5 ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          🤖 AI Task Generator
        </h2>

        <textarea
          rows="5"
          placeholder="Example: Build an Ecommerce Website"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className={`w-full rounded-lg p-4 border ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700 text-white"
              : "bg-slate-50 border-slate-300 text-slate-900"
          }`}
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
            className={`px-5 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-slate-700 text-white hover:bg-slate-600"
                : "bg-slate-200 text-slate-900 hover:bg-slate-300"
            }`}
          >
            Close
          </button>

        </div>

        {result && (
          <div
            className={`mt-6 rounded-lg p-4 whitespace-pre-wrap ${
              theme === "dark"
                ? "bg-slate-800 text-white"
                : "bg-slate-100 text-slate-900"
            }`}
          >
            {result}
          </div>
        )}

      </div>

    </div>
  );
}

export default AIModal;