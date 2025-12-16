export interface Skill {
  name: string
  level: number
  category: "language" | "framework" | "tool" | "database"
}

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", level: 95, category: "language" },
  { name: "Python", level: 85, category: "language" },
  { name: "PHP", level: 90, category: "language" },
  { name: "C", level: 80, category: "language" },
  { name: "C++", level: 80, category: "language" },
  { name: "SQL", level: 90, category: "language" },
  { name: "HTML", level: 95, category: "language" },
  { name: "CSS", level: 95, category: "language" },
  { name: "Java", level: 65, category: "language" },
  { name: "TypeScript", level: 85, category: "language" },
  
  // Frameworks & Libraries
  { name: "React", level: 90, category: "framework" },
  { name: "Next.js", level: 90, category: "framework" },
  { name: "Flutter", level: 85, category: "framework" },
  { name: "Bootstrap", level: 95, category: "framework" },
  { name: "jQuery", level: 90, category: "framework" },
  { name: "Node.js", level: 85, category: "framework" },
  { name: "Express.js", level: 80, category: "framework" },
  { name: "Tailwind CSS", level: 90, category: "framework" },
  
  // Databases
  { name: "MySQL", level: 90, category: "database" },
  { name: "Firebase", level: 85, category: "database" },
  { name: "Firestore", level: 85, category: "database" },
  { name: "Realtime Database", level: 80, category: "database" },
  
  // Tools & Platforms
  { name: "Git", level: 95, category: "tool" },
  { name: "GitHub", level: 95, category: "tool" },
  { name: "VS Code", level: 95, category: "tool" },
  { name: "Android Studio", level: 80, category: "tool" },
  { name: "Arduino IDE", level: 75, category: "tool" },
  { name: "SSH", level: 85, category: "tool" },
  { name: "Monaco Editor", level: 75, category: "tool" },
  { name: "REST APIs", level: 90, category: "tool" },
  { name: "Telegram Bot API", level: 80, category: "tool" },
  { name: "WhatsApp Business API", level: 80, category: "tool" },
  { name: "OpenRouter API", level: 75, category: "tool" },
  { name: "Vercel", level: 85, category: "tool" },
  
  // Core Skills (represented as tools for display purposes)
  { name: "Full-Stack Development", level: 90, category: "tool" },
  { name: "REST API Integration", level: 90, category: "tool" },
  { name: "Database Design", level: 85, category: "tool" },
  { name: "UI/UX Implementation", level: 90, category: "tool" },
  { name: "Performance Optimization", level: 85, category: "tool" },
]
