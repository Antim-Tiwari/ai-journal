import { analyzeJournal } from "../api/journalApi";

export default function JournalList({ journals, refresh }) {

  const analyze = async (entry) => {
    await analyzeJournal({
      journalId: entry._id,
      text: entry.text
    });

    refresh();
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 mt-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Journal Entries
      </h2>

      {journals.length === 0 && (
        <p className="text-gray-500">No journal entries yet.</p>
      )}

      <div className="space-y-4">

        {journals.map((j) => (

          <div
            key={j._id}
            className="border border-gray-200 rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition"
          >

            <p className="text-gray-700">{j.text}</p>

            <div className="flex items-center justify-between">

              <span className="text-sm text-gray-500">
                {j.ambience}
              </span>

              <br />

              {j.emotion ? (
                <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                  Emotion: {j.emotion}
                </span>
              ) : (
                <button
                  onClick={() => analyze(j)}
                  className="bg-indigo-600 text-white px-4 py-1 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                >
                  Analyze
                </button>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}