import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-wider text-indigo-400 hover:text-indigo-300 transition">
          DevCanvas
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}