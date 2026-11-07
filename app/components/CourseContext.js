"use client";
import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Full-Stack Web Dev Bootcamp",
      description: "Master modern web development using Next.js, React, Tailwind CSS, and Node.",
      category: "Web Dev",
    },
    {
      id: 2,
      title: "AI & Machine Learning Essentials",
      description: "Build neural networks, LLMs, and predictive models using Python and PyTorch.",
      category: "AI ML",
    },
    {
      id: 3,
      title: "iOS & Android App Dev with Flutter",
      description: "Create cross-platform mobile apps with beautiful animations and smooth UI.",
      category: "App Dev",
    },
    {
      id: 4,
      title: "React Native Mobile Engineering",
      description: "Ship native iOS and Android applications using your existing JavaScript skills.",
      category: "App Dev",
    },
    {
      id: 5,
      title: "Generative AI Prompt Engineering",
      description: "Explore advanced techniques for building AI agents, RAG pipelines, and LLM apps.",
      category: "AI ML",
    },
    {
      id: 6,
      title: "Modern UI/UX Design & Prototyping",
      description: "Craft pixel-perfect user experiences, component design systems, and wireframes.",
      category: "Design",
    },
    {
      id: 7,
      title: "Python Data Science & Analytics",
      description: "Analyze complex datasets, generate visualizations, and master pandas and NumPy.",
      category: "Data Science",
    },
    {
      id: 8,
      title: "Cybersecurity & Ethical Hacking",
      description: "Learn network security, vulnerability assessment, and web application defence.",
      category: "Security",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const addCourse = (newCourse) => {
    setCourses((prev) => [{ ...newCourse, id: Date.now() }, ...prev]);
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, searchQuery, setSearchQuery }}>
      {children}
    </CourseContext.Provider>
  );
}

export const useCourses = () => useContext(CourseContext);