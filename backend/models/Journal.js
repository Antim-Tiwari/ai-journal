import mongoose from 'mongoose';

const journalSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true
        },
        ambience: {
            type: String,
            enum: ["Forest", "Ocean", "Mountain"],
            required: true
        },
        text: {
            type: String,
            required: true
        },
        emotion: {
            type: String,
            default: null
        },
        keywords: {
            type: [String],
            default: []
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    }
);

const Journal = mongoose.model("Journal", journalSchema);
export default Journal;