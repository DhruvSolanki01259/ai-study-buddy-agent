"use client";

import { useState, useEffect } from "react";

import Header from "@/components/layout/Header";
import QuestionForm from "@/components/study/QuestionForm";

import {
  Brain,
  Code,
  BookOpen,
  Sparkles,
  Clock3,
  Trash2,
  Loader2,
} from "lucide-react";

interface ExampleType {
  topic: string;
  explanation: string;
  summary: string;
  difficulty: string;
}

interface ResponseType {
  id: number;
  query: string;
  title: string;
  explanation: string;
  examples: ExampleType[];
  summary: string;
}

export default function Home() {
  const [responses, setResponses] = useState<ResponseType[]>([]);
  const [loading, setLoading] = useState(false);

  // Load from localStorage once
  useEffect(() => {
    const saved = localStorage.getItem("study-history");

    if (saved) {
      setResponses(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever responses change
  useEffect(() => {
    localStorage.setItem("study-history", JSON.stringify(responses));
  }, [responses]);

  async function handleSubmit(query: string) {
    try {
      setLoading(true);

      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await res.json();

      setResponses((prev) => [
        {
          id: Date.now(),
          query,
          title: result?.data?.title ?? "Untitled",
          explanation: result?.data?.explanation ?? "No explanation",
          examples: result?.data?.examples ?? [],
          summary: result?.data?.summary ?? "",
        },
        ...prev,
      ]);
    } catch (err) {
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-5xl mx-auto px-5 py-8 pb-40">
        {/* Empty state */}
        {responses.length === 0 && !loading && (
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
            <div className="p-6 rounded-full bg-blue-100 mb-6">
              <Brain size={45} className="text-blue-600" />
            </div>

            <h1 className="text-6xl font-bold text-slate-800">
              AI Study Buddy
            </h1>

            <p className="text-slate-500 mt-4 max-w-lg">
              Learn concepts, roadmaps and interview prep with AI.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10 w-full">
              <Card icon={<Code />} title="Concepts" text="Explain pointers" />
              <Card icon={<BookOpen />} title="Roadmaps" text="DSA roadmap" />
              <Card icon={<Sparkles />} title="Interview" text="Google prep" />
            </div>
          </div>
        )}

        {/* History */}
        {(responses.length > 0 || loading) && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Study History</h2>

              <button
                disabled={loading}
                onClick={() => {
                  localStorage.removeItem("study-history");
                  setResponses([]);
                }}
                className="flex items-center gap-2 text-red-500 disabled:opacity-50"
              >
                <Trash2 size={18} />
                Clear
              </button>
            </div>

            <div className="space-y-6">
              {/* Loading card */}
              {loading && (
                <div className="bg-white rounded-3xl border shadow-sm p-7 animate-pulse">
                  <div className="flex items-center gap-2 text-blue-500">
                    <Loader2 size={18} className="animate-spin" />
                    Generating study notes...
                  </div>
                </div>
              )}

              {/* Responses */}
              {responses.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border shadow-sm p-7 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2 text-slate-400 mb-3">
                    <Clock3 size={14} />
                    {item.query}
                  </div>

                  <h2 className="font-bold text-2xl mb-4">
                    {item.title}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-5 mt-6">
                    {item.examples?.map((example, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border p-5 bg-slate-50"
                      >
                        <h3 className="font-bold text-lg">
                          {example.topic}
                        </h3>

                        <p className="mt-2 text-slate-600">
                          {example.explanation}
                        </p>

                        <p className="mt-3 text-sm">
                          <span className="font-semibold">
                            Summary:
                          </span>{" "}
                          {example.summary}
                        </p>

                        <div className="mt-3 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                          {example.difficulty}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-100 rounded-2xl p-5 mt-6">
                    <h3 className="font-bold mb-2">Summary</h3>
                    <p>{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Input bar */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/80 backdrop-blur-lg border-t">
        <div className="max-w-4xl mx-auto">
          <QuestionForm onSubmit={handleSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
}

/* Card Component */
function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-3xl border p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
      <div className="mb-4 text-blue-600">{icon}</div>

      <h3 className="font-semibold">{title}</h3>

      <p className="text-sm text-slate-500 mt-2">{text}</p>
    </div>
  );
}