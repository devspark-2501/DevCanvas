import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { IMAGES } from "@/app/components/assets";

export default function HomePage() {
  return (
    <div 
      className="relative flex flex-col items-center justify-center py-24 px-4 text-center space-y-6 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.9), rgba(2, 6, 23, 0.95)), url('${IMAGES.heroBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="inline-block bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-indigo-500/20 shadow-inner">
        Hackathon Workspace Ready
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl text-white">
        Build, Iterate, and Launch fast with <span className="text-indigo-400">DevCanvas</span>
      </h1>
      <p className="text-slate-300 max-w-lg text-base">
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