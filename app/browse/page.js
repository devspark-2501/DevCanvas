"use client";
import Card from "@/app/components/ui/Card";
import { useCourses } from "@/app/components/CourseContext";

export default function BrowsePage() {
  const { courses, searchQuery, setSearchQuery } = useCourses();

  // Keyword filter logic
  const filteredCourses = courses.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query)
    );
  });

  const categories = ["All", "Web Dev", "AI ML", "App Dev", "Data Science", "Design"];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-white">Browse Courses</h1>
        <p className="text-slate-400 text-sm">Discover and enroll in top-rated student and community courses.</p>
      </div>

      {/* Category Keyword Quick Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchQuery(cat === "All" ? "" : cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
              (cat === "All" && !searchQuery) || searchQuery.toLowerCase() === cat.toLowerCase()
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/30"
                : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-indigo-500/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card 
              key={course.id} 
              title={course.title} 
              description={course.description}
              className="bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/40 hover:shadow-indigo-500/10 backdrop-blur-md"
            >
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-800/60">
                <span className="inline-block bg-indigo-500/15 text-indigo-300 text-xs px-3 py-1 rounded-full font-semibold border border-indigo-500/20">
                  {course.category}
                </span>
                <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition">
                  View Course &rarr;
                </button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 space-y-3">
          <p className="text-slate-400 text-base">No courses found matching &quot;{searchQuery}&quot;</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="text-indigo-400 text-xs font-semibold hover:underline"
          >
            Clear search filter
          </button>
        </div>
      )}
    </div>
  );
}