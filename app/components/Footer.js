export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>DevCanvas &copy; 2026. Built for Hackathon.</p>
        <div className="flex space-x-4">
          <span className="text-slate-600">Next.js App Router</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-600">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}