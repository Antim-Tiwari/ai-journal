import Journal from "../models/Journal.js";
import { analyzeEmotion } from "../services/llmService.js";

export const createJournal = async (req, res) => {
    try {
        const {userId, ambience, text} = req.body;
        const journal = new Journal({
            userId, ambience, text
        });

        const savedEntry = await journal.save();

        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(500).json({message: "Failed to create a journal", error: error.message});
    }
}

export const getJournals = async (req, res) => {
    try {
        const {userId} = req.params;
        const journals = await Journal.find({userId}).sort({createdAt: -1});

        res.status(200).json(journals);

    } catch (error) {
        res.status(500).json({message: "Failed to fetch journal entries", error: error.message});
    }
}

export const analyzeJournal = async (req, res) => {
  try {
    const { journalId, text } = req.body;
    const analysis = await analyzeEmotion(text);
    const updatedJournal = await Journal.findByIdAndUpdate(
      journalId,
      {
        emotion: analysis.emotion,
        keywords: analysis.keywords
      },
      { returnDocument: "after" }
    );

    return res.status(200).json({
      analysis,
      journal: updatedJournal
    });
  } catch (error) {
    console.error("Analyze error:", error);
    return res.status(500).json({
      error: error.message
    });
  }
};

export const getInsights = async (req, res) => {
  try {

    const { userId } = req.params;

    const journals = await Journal.find({ userId });

    const totalEntries = journals.length;

    const emotionCount = {};
    const ambienceCount = {};
    const keywordSet = new Set();

    journals.forEach(entry => {

      if (entry.emotion) {
        emotionCount[entry.emotion] =
          (emotionCount[entry.emotion] || 0) + 1;
      }

      if (entry.ambience) {
        ambienceCount[entry.ambience] =
          (ambienceCount[entry.ambience] || 0) + 1;
      }

      entry.keywords.forEach(k => keywordSet.add(k));

    });

    const maxEmotionCount = Math.max(...Object.values(emotionCount), 0);

    const topEmotion = Object.keys(emotionCount)
      .filter(e => emotionCount[e] === maxEmotionCount);

    const maxAmbienceCount = Math.max(...Object.values(ambienceCount), 0);

    const mostUsedAmbience = Object.keys(ambienceCount)
      .filter(a => ambienceCount[a] === maxAmbienceCount);

    const recentKeywords = Array.from(keywordSet).slice(0,5);

    return res.status(200).json({
      totalEntries,
      topEmotion,
      mostUsedAmbience,
      recentKeywords
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
};