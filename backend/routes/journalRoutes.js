import express from 'express';
import {analyzeJournal, createJournal, getInsights, getJournals} from '../controllers/journalController.js';

const router = express.Router();

router.post("/", createJournal);
router.get("/:userId", getJournals);
router.post("/analyze", analyzeJournal);
router.get("/insights/:userId", getInsights);

export default router;