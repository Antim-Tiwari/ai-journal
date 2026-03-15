import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-journal-cy2n.onrender.com"
});

export const createJournal = (data) => API.post("/", data);

export const getJournals = (userId) => API.get(`/${userId}`);

export const analyzeJournal = (data) => API.post("/analyze", data);

export const getInsights = (userId) => API.get(`/insights/${userId}`);