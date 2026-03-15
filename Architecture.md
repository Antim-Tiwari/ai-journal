---

# ARCHITECTURE.md

```markdown
# System Architecture

The AI Journal System follows a standard **client-server architecture** with AI-assisted analysis.

---

## High Level Architecture


User
│
▼
Frontend (React + Vite)
│
▼
Backend API (Node.js + Express)
│
▼
Database (MongoDB Atlas)
│
▼
AI Service (Gemini API)


---

## Frontend Layer

The frontend is built using **React with Vite** for fast development and build performance.

Responsibilities:

- Display journal UI
- Handle user input
- Send API requests
- Render insights and results

Key components:

- JournalForm
- JournalList
- Insights

The frontend communicates with the backend through **Axios API requests**.

---

## Backend Layer

The backend is implemented using **Node.js with Express.js**.

Responsibilities:

- Handle REST API requests
- Store journal entries
- Process journal analysis
- Generate insights

Main backend modules:

### Controllers

Handle request logic.

Examples:

- createJournal
- getJournals
- analyzeJournal
- getInsights

---

### Models

MongoDB schema definitions using **Mongoose**.

Journal model contains:

- userId
- text
- ambience
- emotion
- keywords
- createdAt

---

### Services

Contains integration with external AI APIs.

The **LLM Service** sends journal text to the Gemini API and receives:

- emotion
- keywords
- summary

---

## Database Layer

MongoDB Atlas is used for persistent storage.

Collections:

### Journals

Fields stored:


_id
userId
text
ambience
emotion
keywords
createdAt


MongoDB enables flexible document storage and easy scaling.

---

## AI Integration

The application integrates with the **Gemini API** for natural language processing.

AI processing includes:

- Emotion classification
- Keyword extraction
- Text summarization

The backend sends the journal text as a prompt and parses the structured response.

---

## Deployment Architecture


Frontend (Vercel)
│
▼
Backend API (Render)
│
▼
MongoDB Atlas


Benefits:

- Scalable
- Independent frontend/backend deployment
- Cloud database availability

---

## Data Flow

1. User writes a journal entry.
2. Frontend sends entry to backend API.
3. Backend stores entry in MongoDB.
4. User triggers analysis.
5. Backend sends text to Gemini API.
6. AI returns emotion and keywords.
7. Backend updates journal entry.
8. Insights API aggregates journal data.

---

## Scalability Considerations

Future improvements may include:

- User authentication with JWT
- Background job processing for AI analysis
- Redis caching for insights
- Microservice separation for AI processing

---

## Security Considerations

- Environment variables for API keys
- CORS protection
- Input validation
- Rate limiting for AI requests