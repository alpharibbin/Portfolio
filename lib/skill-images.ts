// Mapping of skill names to their corresponding SVG file names in the brands folder
export const skillImageMap: Record<string, string> = {
  // Languages
  "JavaScript": "JavaScript.svg",
  "Python": "Python.svg",
  "PHP": "PHP.svg",
  "C": "C.svg",
  "C++": "C++-(CPlusPlus).svg",
  "SQL": "SQL-Developer.svg",
  "HTML": "HTML5.svg",
  "CSS": "CSS3.svg",
  "Java": "Java.svg",
  "TypeScript": "TypeScript.svg",
  
  // Frameworks & Libraries
  "React": "React.svg",
  "Next.js": "Next.js.svg",
  "Flutter": "Flutter.svg",
  "Bootstrap": "Bootstrap.svg",
  "jQuery": "jQuery.svg",
  "Node.js": "Node.js.svg",
  "Express.js": "Express.svg",
  "Tailwind CSS": "Tailwind-CSS.svg",
  
  // Databases
  "MySQL": "MySQL.svg",
  "Firebase": "Firebase.svg",
  "Firestore": "Firebase.svg", // Using Firebase icon
  "Realtime Database": "Firebase.svg", // Using Firebase icon
  
  // Tools & Platforms
  "Git": "Git.svg",
  "GitHub": "GitHub.svg",
  "VS Code": "Visual-Studio-Code-(VS-Code).svg",
  "Android Studio": "Android Studio.svg",
  "Arduino IDE": "Arduino.svg",
  "SSH": "SSH.svg",
  "Vercel": "Vercel.svg",

  "Monaco Editor": "ibm-z-open-editor.svg",
  "REST APIs": "server-api-cloud.svg",
  "Telegram Bot API": "telegram.svg",
  "WhatsApp Business API": "whatsapp-icon.svg",
  "OpenRouter API": "server-api-cloud.svg",
  "Full-Stack Development": "software.svg",
  "REST API Integration": "server-api-cloud.svg",
  "Database Design": "database.svg",
  "UI/UX Implementation": "folder-ui.svg",
  "Performance Optimization": "speed.svg",
}

// Skills without images in the brands folder
export const skillsWithoutImages: string[] = []

export function getSkillImage(skillName: string): string | null {
  const imageFile = skillImageMap[skillName]
  if (!imageFile) {
    return null
  }
  return `/brands/${imageFile}`
}

/**
 * Check if an image exists for a skill
 */
export function hasSkillImage(skillName: string): boolean {
  return skillName in skillImageMap
}

