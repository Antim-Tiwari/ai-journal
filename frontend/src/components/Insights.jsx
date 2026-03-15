export default function Insights({ insights }) {

  if (!insights) return null;

  const topEmotion = Array.isArray(insights.topEmotion)
    ? insights.topEmotion.join(", ")
    : insights.topEmotion;

  const mostUsedAmbience = Array.isArray(insights.mostUsedAmbience)
    ? insights.mostUsedAmbience.join(", ")
    : insights.mostUsedAmbience;

  return (
    <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 border border-gray-200">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Journal Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
          <p className="text-sm text-gray-500">Total Entries</p>
          <p className="text-3xl font-semibold text-blue-600">
            {insights.totalEntries}
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
          <p className="text-sm text-gray-500">Top Emotion</p>
          <p className="text-lg font-semibold text-green-700">
            {topEmotion || "N/A"}
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
          <p className="text-sm text-gray-500">Most Used Ambience</p>
          <p className="text-lg font-semibold text-purple-700">
            {mostUsedAmbience || "N/A"}
          </p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
          <p className="text-sm text-gray-500">Recent Keywords</p>
          <p className="text-gray-700 font-medium">
            {insights.recentKeywords?.length
              ? insights.recentKeywords.join(", ")
              : "No keywords yet"}
          </p>
        </div>

      </div>
    </div>
  );
}