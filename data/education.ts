export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  duration: string
  location: string
  description: string
}

export const education: Education[] = [
  {
    id: "1",
    institution: "Rajiv Gandhi University of Knowledge Technologies, IIIT-AP",
    degree: "Bachelor of Technology",
    field: "Electrical and Electronics Engineering",
    duration: "June 2022 - May 2026",
    location: "Srikakulam, Andhra Pradesh, India",
    description: "Pursuing B.Tech in Electrical and Electronics Engineering with a strong focus on embedded systems, hardware design, PCB development, and microcontroller programming. Actively involved in technical clubs and hands-on projects in IoT, radar systems, and drone hardware.",  },
  {
    id: "2",
    institution: "Rajiv Gandhi University of Knowledge Technologies, IIIT-AP",
    degree: "Pre-University Course",
    field: "PUC",
    duration: "June 2020 - June 2022",
    location: "Srikakulam, Andhra Pradesh, India",
    description: "Completed Pre-University Course. Focused on foundational sciences and mathematics, preparing for engineering studies.",
  },
]
