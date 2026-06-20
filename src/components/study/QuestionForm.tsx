"use client";

import { useRef, useState } from "react";
import {
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";

interface Props {
  onSubmit: (
    query: string
  ) => void;
  loading: boolean;
}

export default function QuestionForm({
  onSubmit,
  loading,
}: Props) {
  const [query, setQuery] =
    useState("");

  const textareaRef =
    useRef<HTMLTextAreaElement>(
      null
    );

  function resizeTextarea() {
    const textarea =
      textareaRef.current;

    if (!textarea) return;

    textarea.style.height =
      "auto";

    textarea.style.height = `${Math.min(
      textarea.scrollHeight,
      160
    )}px`;
  }

  function submit() {
    const trimmed =
      query.trim();

    if (
      !trimmed ||
      loading
    )
      return;

    onSubmit(trimmed);

    setQuery("");
  }

  return (
    <div className="w-full rounded-[28px] border border-slate-200 bg-white shadow-xl px-5 py-4 transition-all duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
      <div className="flex gap-4 items-end">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <Sparkles
            size={18}
            className="text-blue-600"
          />
        </div>

        <textarea
          ref={textareaRef}
          rows={1}
          value={query}
          disabled={loading}
          onChange={(e) => {
            setQuery(
              e.target.value
            );

            requestAnimationFrame(
              resizeTextarea
            );
          }}
          placeholder="Ask anything..."
          className="flex-1 resize-none bg-transparent outline-none text-slate-700 min-h-14 max-h-40"
          onKeyDown={(e) => {
            if (
              e.key ===
              "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();

              submit();
            }
          }}
        />

        <button
          onClick={submit}
          disabled={
            !query.trim() ||
            loading
          }
          className="h-12 w-12 rounded-full flex items-center justify-center bg-linear-to-r from-blue-600 to-indigo-600 text-white"
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
        </button>
      </div>
    </div>
  );
}