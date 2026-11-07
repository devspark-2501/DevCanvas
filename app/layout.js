import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CourseProvider } from "@/app/components/CourseContext";

export const metadata = {
  title: "DevCanvas - Course Hub",
  description: "Built for rapid hackathon deployment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
        <CourseProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
            {children}
          </main>
          <Footer />
        </CourseProvider>
      </body>
    </html>
  );
}