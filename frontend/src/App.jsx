import { useEffect, useState } from "react";
import { getJournals, getInsights } from "./api/journalApi";

import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";
import Insights from "./components/Insights";

export default function App() {

  const [journals, setJournals] = useState([]);
  const [insights, setInsights] = useState(null);

  const userId = "123";

  const loadData = async () => {

    const j = await getJournals(userId);
    setJournals(j.data);

    const i = await getInsights(userId);
    setInsights(i.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>

      <h1 className="text-3xl text-center">AI Journal</h1>

      <JournalForm refresh={loadData} />

      <JournalList journals={journals} refresh={loadData} />

      <Insights insights={insights} />

    </div>
  );
}