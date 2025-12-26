import {
  Code2,
  Layers,
  Wrench,
  Database,
  LucideIcon,
} from "lucide-react"

export type SkillCategory =
  | "language"
  | "framework"
  | "tool"
  | "database"

export interface SkillCategoryConfig {
  label: string
  icon: LucideIcon
}

export const SKILL_CATEGORY_CONFIG: Record<
  SkillCategory,
  SkillCategoryConfig
> = {
  language: {
    label: "Programming Language",
    icon: Code2,
  },
  framework: {
    label: "Framework / Library",
    icon: Layers,
  },
  tool: {
    label: "Tool / Platform",
    icon: Wrench,
  },
  database: {
    label: "Database",
    icon: Database,
  },
}

export interface Skill {
  name: string
  level: number // 0–100
  category: SkillCategory
}

export const skills: Skill[] = [
  // ======================
  // Programming Languages
  // ======================
  { name: "JavaScript", level: 95, category: "language" },
  { name: "TypeScript", level: 90, category: "language" },
  { name: "Python", level: 85, category: "language" },
  { name: "PHP", level: 85, category: "language" },
  { name: "SQL", level: 90, category: "language" },
  { name: "HTML", level: 95, category: "language" },
  { name: "CSS", level: 95, category: "language" },
  { name: "C++", level: 80, category: "language" },
  { name: "C", level: 75, category: "language" },
  { name: "Java", level: 65, category: "language" },

  // ======================
  // Frameworks & Libraries
  // ======================
  { name: "React", level: 95, category: "framework" },
  { name: "Next.js", level: 92, category: "framework" },
  { name: "Node.js", level: 88, category: "framework" },
  { name: "Tailwind CSS", level: 92, category: "framework" },
  { name: "Flutter", level: 85, category: "framework" },
  { name: "Bootstrap", level: 90, category: "framework" },
  { name: "jQuery", level: 80, category: "framework" },

  // ======================
  // Databases
  // ======================
  { name: "MySQL", level: 90, category: "database" },
  { name: "Firebase", level: 88, category: "database" },
  { name: "Firestore", level: 88, category: "database" },
  { name: "Realtime Database", level: 82, category: "database" },

  // ======================
  // Tools & Platforms
  // ======================
  { name: "Git", level: 95, category: "tool" },
  { name: "GitHub", level: 95, category: "tool" },
  { name: "VS Code", level: 95, category: "tool" },
  { name: "Vercel", level: 90, category: "tool" },
  { name: "REST APIs", level: 92, category: "tool" },
  { name: "Android Studio", level: 80, category: "tool" },
  { name: "Arduino IDE", level: 75, category: "tool" },
  { name: "SSH", level: 85, category: "tool" },
  { name: "Telegram Bot API", level: 82, category: "tool" },
  { name: "WhatsApp Business API", level: 80, category: "tool" },
  { name: "OpenRouter API", level: 78, category: "tool" },

  // ======================
  // Core / Conceptual Skills (displayed under Tools)
  // ======================
  { name: "Full-Stack Development", level: 92, category: "tool" },
  { name: "UI/UX Implementation", level: 90, category: "tool" },
  { name: "Performance Optimization", level: 87, category: "tool" },
]