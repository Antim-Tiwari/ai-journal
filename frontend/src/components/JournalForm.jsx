import { useState } from "react";
import { createJournal } from "../api/journalApi";

export default function JournalForm({ refresh }) {

  const [text, setText] = useState("");
  const [ambience, setAmbience] = useState("Forest");

  const submitJournal = async () => {
    if (!text.trim()) return;

    await createJournal({
      userId: "123",
      ambience,
      text
    });

    setText("");
    refresh();
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 mb-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Write Journal
      </h2>

      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        rows="4"
        placeholder="How did you feel after the session?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-col md:flex-row gap-4 items-center">

        <select
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={ambience}
          onChange={(e) => setAmbience(e.target.value)}
        >
          <option value="Forest">Forest</option>
          <option value="Ocean">Ocean</option>
          <option value="Mountain">Mountain</option>
        </select>

        <button
          onClick={submitJournal}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Entry
        </button>

      </div>

    </div>
  );
}