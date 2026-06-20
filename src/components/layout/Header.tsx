import { Brain } from "lucide-react";

export default function Header() {
  return (

    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b">

      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center">

        <div className="flex items-center gap-3">

          <div className="p-2 rounded-xl bg-blue-100">

            <Brain
              className="text-blue-600"
              size={24}
            />

          </div>

          <div>

            <h1 className="font-bold">

              AI Study Buddy

            </h1>

            <p className="text-xs text-slate-500">

              Learn programming with AI

            </p>

          </div>

        </div>

      </div>

    </header>

  );
}