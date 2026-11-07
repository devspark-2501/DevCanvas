import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
      <div className="inline-block bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-indigo-500/20">
        Hackathon Workspace Ready
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
        Build, Iterate, and Launch fast with <span className="text-indigo-400">DevCanvas</span>
      </h1>
      <p className="text-slate-400 max-w-lg text-base">
        A clean, high-performance starter codebase engineered for quick hackathon prototype development.
      </p>
      <div className="flex gap-4 pt-4">
        <Link href="/dashboard">
          <Button variant="primary">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}