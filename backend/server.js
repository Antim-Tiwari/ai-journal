import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import journalRoutes from './routes/journalRoutes.js'

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// app.get("/", (req,res) => {
//     res.send("AI journal API running");
// })
app.use("/api/journal", journalRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});