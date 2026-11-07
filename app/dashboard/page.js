"use client";
import { useState } from "react";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import { useCourses } from "@/app/components/CourseContext";
import { IMAGES } from "@/app/components/assets";

export default function DashboardPage() {
  const { courses, addCourse } = useCourses();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Development");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    addCourse({ title, description, category });
    setTitle("");
    setDescription("");
    setIsOpen(false);
  };

  return (
    <div 
      className="relative space-y-8 p-6 md:p-10 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.98)), url('${IMAGES.dashboardBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center relative z-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Project Dashboard</h1>
          <p className="text-sm text-slate-400">Create and manage student courses.</p>
        </div>
        <Button variant="primary" onClick={() => setIsOpen(true)}>+ Create Task / Course</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <Card title="Total Courses" description="Active available courses" className="bg-slate-900/80 backdrop-blur-md">
          <p className="text-3xl font-bold text-indigo-400">{courses.length}</p>
        </Card>
        <Card title="System Status" description="API and backend status" className="bg-slate-900/80 backdrop-blur-md">
          <p className="text-3xl font-bold text-emerald-400">Operational</p>
        </Card>
        <Card title="Categories" description="Active course topics" className="bg-slate-900/80 backdrop-blur-md">
          <p className="text-3xl font-bold text-amber-400">Multiple</p>
        </Card>
      </div>

      {/* Creation Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-md w-full space-y-4">
            <h2 className="text-xl font-bold text-white">Create New Course / Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500" 
                  placeholder="Course Title"
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Category</label>
                <input 
                  type="text" 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)} 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500" 
                  placeholder="e.g. Design, Coding"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 h-24" 
                  placeholder="Brief course overview..."
                  required 
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button variant="primary" type="submit">Save Course</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}