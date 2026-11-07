"use client";
import Card from "@/app/components/ui/Card";
import { useCourses } from "@/app/components/CourseContext";

export default function BrowsePage() {
  const { courses } = useCourses();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Browse Available Courses</h1>
        <p className="text-slate-400 text-sm">Explore courses created by instructors and students.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} title={course.title} description={course.description}>
            <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs px-2.5 py-1 rounded-full font-medium">
              {course.category}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}