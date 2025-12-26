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
    company: "Deep Grid Semi Pvt. Ltd",
    role: "Embedded Firmware Intern",
    duration: "December 2025 – Present",
    location: "Hyderabad, India",
    description: "Currently working as an Embedded Firmware Intern, focusing on firmware development for semiconductor and embedded applications.",
    highlights: [
      "Developing and optimizing embedded firmware for hardware systems",
      "Implementing low-level drivers and communication protocols",
      "Testing and debugging firmware on target hardware platforms",
    ],
    technologies: ["C", "C++", "Embedded Systems", "Firmware Development", "Microcontrollers", "RTOS"],
  },
  {
    id: "2",
    company: "Zebu Intelligent Systems Pvt. Ltd",
    role: "Embedded Engineer Intern",
    duration: "May 2025 – December 2025",
    location: "Hyderabad, India",
    description: "Contributed to hardware development for advanced drone systems with a focus on PCB design and subsystem integration.",
    highlights: [
      "Designed PCB layouts in KiCad for drone subsystems including navigation, sensing, and control units",
      "Participated in schematic design, component selection, and layout optimization",
      "Documented designs, changes, and test results for team collaboration",
    ],
    technologies: ["KiCad", "PCB Design", "Schematic Design", "Multi-layer PCB", "Drone Hardware", "Component Selection"],
  },
  {
    id: "3",
    company: "Electronics Club | Student Gymkhana Club | RGUKT",
    role: "Joint Secretary",
    duration: "Nov 2022 – May 2024",
    location: "Srikakulam, India",
    description: "Led technical workshops and guided student projects in embedded systems and emerging technologies, enhancing hands-on skills for over 100 students.",
    highlights: [
      "Led and organized multiple hands-on workshops on IoT, Arduino, and Embedded Systems",
      "Supervised project teams, provided guidance in circuit design and debugging",
      "Reviewed final project outcomes for college-wide technical exhibitions",
      "Improved technical skills of 100+ students through structured training",
    ],
    technologies: ["Arduino", "IoT", "Embedded Systems", "Circuit Design", "Project Mentoring"],
  },
]