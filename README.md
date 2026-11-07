⚡ DevCanvas

Empowering Students & Creators to Build, Share, and Discover Tech Courses in Real-Time.

DevCanvas is a high-performance, modern web platform engineered for rapid course creation and real-time discovery. Built using Next.js (App Router) and Tailwind CSS, it features zero-latency state management, instant keyword search filtering, and an immersive dark-mode user experience—all without requiring an external database setup.

🌟 Key Features

🚀 Dynamic Course Creation

Instant Publishing: Create new courses dynamically directly from the interactive dashboard.

Categorization: Classify offerings into domain-specific tags (e.g., Web Dev, AI ML, App Dev, Design, Data Science).

🔍 Real-Time Intelligent Search

Instant Filtering: Type keywords directly into the global navigation bar to filter courses live.

Auto-Navigation: Search queries seamlessly transition users to the dynamic feed view.

Category Chips: One-click quick filters to slice content by domain interest.

🎨 Modern Dark-Theme Architecture

Vibrant Aesthetic: High-contrast color palettes using rich slate and deep indigo gradients.

Responsive Layout: Optimized for mobile, tablet, and desktop viewports.

Micro-Interactions: Smooth hover transitions and glowing backdrop blurs.

⚡ Zero-DB Architecture

Client-Side State Management: Powered by React Context API for frictionless state persistence across pages.

Zero Latency: Immediate rendering with zero database latency or API setup friction during hackathon presentations.

🛠️ Tech Stack & Architecture

Frontend Framework: Next.js 14+ (App Router, JavaScript)

Styling: Tailwind CSS (Custom Dark Theme & Gradients)

State Management: React Context API (CourseContext)

Icons & Assets: Curated Unsplash Engine & Custom Utility Modules

📁 Directory Structure

dev-canvas/
├── app/
│   ├── browse/
│   │   └── page.js           # Live course browse feed with filtering
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.js     # Reusable UI Button component
│   │   │   └── Card.js       # Reusable UI Card container
│   │   ├── assets.js         # Curated high-res visual assets hub
│   │   ├── CourseContext.js  # Global memory state & search filter logic
│   │   ├── Footer.js         # Shared footer component
│   │   └── Navbar.js         # Interactive header with live search input
│   ├── dashboard/
│   │   └── page.js           # Analytics dashboard & modal course creator
│   ├── api/
│   │   └── route.js          # RESTful endpoint handler
│   ├── globals.css           # Tailwind base rules & global dark theme
│   ├── layout.js             # Root application shell wrapper
│   └── page.js               # Main landing & hero page
├── public/                   # Static directory
├── jsconfig.json             # Absolute path alias settings (@/*)
├── next.config.js            # Next.js build configuration
├── package.json              # Dependencies and project scripts
└── README.md                 # Project documentation


⚡ Quick Setup & Installation

Prerequisites

Node.js v18.0.0 or higher

npm or yarn

Installation

Clone the repository:

git clone https://github.com/devspark-2501/DevCanvas.git
cd DevCanvas


Install dependencies:

npm install


Start the local development server:

npm run dev


Access the application:
Open http://localhost:3000 in your browser.

🏆 Built for Hackathons

DevCanvas was created with one goal: maximum speed and efficiency. By utilizing Next.js App Router and in-memory context management, the app delivers a complete end-to-end full-stack user experience without complex database configuration overhead.

📜 License

Distributed under the MIT License. See LICENSE for more information.
