"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCourses } from "@/app/components/CourseContext";

export default function Navbar() {
  const { searchQuery, setSearchQuery } = useCourses();
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Automatically redirect to browse page when typing search terms
    if (window.location.pathname !== "/browse") {
      router.push("/browse");
    }
  };

  return (
    <header className="border-b border-indigo-900/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-indigo-950/20">
      <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-6 w-full sm:w-auto justify-between sm:justify-start">
          <Link href="/" className="font-extrabold text-2xl tracking-wider bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DevCanvas
          </Link>
          <nav className="flex items-center space-x-4 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
            <Link href="/dashboard" className="hover:text-indigo-400 transition">Dashboard</Link>
          </nav>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full sm:w-72">
          <input 
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Web Dev, AI ML, App Dev..."
            className="w-full bg-slate-950/80 border border-indigo-500/30 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition shadow-inner"
          />
        </div>

        <Link 
          href="/browse" 
          className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md shadow-indigo-500/25 transition w-full sm:w-auto text-center"
        >
          Browse Courses
        </Link>
      </div>
    </header>
  );
}