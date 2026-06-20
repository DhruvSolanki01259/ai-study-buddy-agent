Here’s a cleaned, structured, GitHub-ready README that looks professional, readable, and portfolio-grade (no fluff, just impact + clarity):

---

```md
# 🧠 AI Study Buddy Agent

A smart AI-powered learning assistant that transforms any programming question into structured, beginner-friendly explanations with topics, examples, and summaries.

Built using **Next.js**, **LangChain**, **Zod validation**, and multiple LLM providers (**OpenAI / Gemini / Groq**).

🔗 **Live Demo:** https://ai-study-buddy-agent.vercel.app/

---

## ✨ Features

- 💬 Ask any programming question in natural language
- 🧠 AI converts messy queries into structured learning content
- 📚 Organized output including:
  - Topics
  - Detailed explanations
  - Code examples
  - Summary
  - Difficulty level
- ⚡ Switch between multiple LLM providers (OpenAI / Gemini / Groq)
- 🧾 Strict JSON structure validation using **Zod**
- 🎯 Prompt-engineered responses for beginner-friendly learning
- 🕒 Real-time chat-style interaction
- 🎨 Clean UI with **Tailwind CSS + ShadCN UI**

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- ShadCN UI

### Backend
- Next.js API Routes
- LangChain (LLM orchestration)
- Zod (schema validation)

### AI Models
- OpenAI
- Google Gemini
- Groq (LLaMA models)

---

## 📁 Project Structure

```

    app/
      page.tsx
      api/
      ask/
        route.ts

    components/
      layout/
      study/

    lib/
      templates/
      parser/

    modules/
      model/
      schema/

````

---

## ⚙️ How It Works

1. User enters a programming question  
2. Prompt template structures the request  
3. Request is sent to `/api/ask`  
4. Selected LLM generates a response  
5. Response is cleaned and parsed  
6. Zod validates the structured JSON  
7. UI renders:
   - Topic cards  
   - Examples  
   - Summary sections  

---

## 🧠 Example Output

```json
{
  "title": "C++ and Google Interview Preparation",
  "explaination": "This is a comprehensive guide...",
  "examples": [
    {
      "topic": "Pointers",
      "explaination": "Pointers store memory addresses...",
      "examples": ["int* p = &x;"],
      "summary": "Core concept in C++ memory management",
      "difficulty": "Intermediate"
    }
  ],
  "summary": "Covers all essential topics for interviews",
  "difficulty": "Beginner"
}
````

---

## 🧩 Key Learnings

* Prompt engineering for structured AI outputs
* Handling inconsistent LLM responses
* JSON parsing & markdown cleanup strategies
* Schema validation using Zod
* Multi-provider LLM architecture
* Building chat-style UX in Next.js
* Designing AI workflows (Request → Parse → Validate → Render)

---

## 🔥 API Flow

```
User Query
   ↓
Prompt Template
   ↓
LLM (OpenAI / Gemini / Groq)
   ↓
Raw Response
   ↓
JSON Extraction
   ↓
Zod Validation
   ↓
Frontend Rendering
```

---

## 🛠️ Run Locally

```bash
git clone https://github.com/your-username/ai-study-buddy-agent
cd ai-study-buddy-agent

npm install
npm run dev
```

### 🔐 Environment Variables

Create a `.env` file:

```env
OPENAI_API_KEY=your_key
GEMINI_API_KEY=your_key
GROQ_API_KEY=your_key
```

---

## 🚀 Future Improvements

* 🧵 Multi-turn chat memory
* 📊 Adaptive difficulty-based learning paths
* 🧠 LangGraph-based agent workflows
* 🎯 Auto quiz generation from topics
* 💾 Save & resume learning sessions
* 🌙 Dark mode enhancements

---

## 📌 Why This Project Stands Out

This project demonstrates:

* Real-world AI pipeline design
* Reliable structured output handling from LLMs
* Practical use of LangChain + schema validation
* Strong frontend + backend AI integration
* Production-ready AI UI/UX design patterns

---

## ⭐ If You Like This Project

Give it a star and explore the live demo:
👉 [https://ai-study-buddy-agent.vercel.app/](https://ai-study-buddy-agent.vercel.app/)

```