export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Lokobee",
    role: "MERN Stack Developer",
    duration: "November 2025 - Present",
    location: "Remote",
    description: "Currently developing full-stack web applications using React.js and Node.js, focusing on scalable APIs, responsive UI, and performance optimization.",
    highlights: [
      "Developing full-stack web applications with React.js and Node.js",
      "Building scalable APIs for high-performance applications",
      "Creating responsive user interfaces with modern design principles",
      "Optimizing application performance and user experience",
      "Implementing best practices for code quality and maintainability",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS", "RESTful APIs"],
  },
  {
    id: "2",
    company: "RGUKT Srikakulam",
    role: "Summer Intern",
    duration: "May 2025 - June 2025",
    location: "Srikakulam, Andhra Pradesh, India",
    description: "Worked on web development tasks including feature enhancements, bug fixes, and performance improvements for academic and administrative portals.",
    highlights: [
      "Implemented feature enhancements for academic and administrative portals",
      "Fixed critical bugs and improved system stability",
      "Optimized website performance and loading times",
      "Collaborated with development team on portal improvements",
      "Gained hands-on experience with institutional web systems",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "jQuery", "SQL", "Bootstrap"],
  },
  {
    id: "3",
    company: "Student Gymkhana Center (SGC), RGUKT Srikakulam",
    role: "Webmaster",
    duration: "June 2023 - April 2024",
    location: "Srikakulam, Andhra Pradesh, India",
    description: "Managed and updated official student organization portals, integrated analytics, and coordinated content deployment for events and notices.",
    highlights: [
      "Managed and maintained official student organization portals",
      "Integrated analytics tools for tracking website performance and user engagement",
      "Coordinated content deployment for events, notices, and announcements",
      "Ensured timely updates and accurate information dissemination",
      "Improved portal usability and user experience for students",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "jQuery", "SQL", "Bootstrap", "Analytics"],
  },
  {
    id: "4",
    company: "RGUKT Srikakulam",
    role: "Web Developer",
    duration: "June 2022 - June 2024",
    location: "Srikakulam, Andhra Pradesh, India",
    description: "Developed and maintained institutional web platforms, optimized site performance, and ensured responsive user experiences across devices.",
    highlights: [
      "Developed and maintained multiple institutional web platforms",
      "Optimized website performance and loading speeds",
      "Ensured responsive design across all devices and screen sizes",
      "Implemented modern web development practices and standards",
      "Collaborated with cross-functional teams on platform improvements",
      "Maintained code quality and documentation standards",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "jQuery", "SQL", "Bootstrap", "Responsive Design"],
  },
]
