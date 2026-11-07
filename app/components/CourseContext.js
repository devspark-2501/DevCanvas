"use client";
import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Full-Stack Web Dev Bootcamp",
      description: "Learn Next.js, React, and Tailwind CSS from scratch.",
      category: "Development",
    },
    {
      id: 2,
      title: "UI/UX Masterclass",
      description: "Design stunning interfaces and user experiences fast.",
      category: "Design",
    },
  ]);

  const addCourse = (newCourse) => {
    setCourses((prev) => [...prev, { ...newCourse, id: Date.now() }]);
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

export const useCourses = () => useContext(CourseContext);