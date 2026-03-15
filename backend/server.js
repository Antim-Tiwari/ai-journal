import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import journalRoutes from './routes/journalRoutes.js'

dotenv.config();
const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

connectDB();

app.use("/api/journal", journalRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});