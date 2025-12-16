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
    institution: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    duration: "June 2022 - May 2026",
    location: "Srikakulam, Andhra Pradesh, India",
    description: "Currently pursuing B.Tech in Electronics and Communication Engineering, focusing on both hardware and software development. Gaining expertise in embedded systems, communication technologies, and full-stack development.",
  },
  {
    id: "2",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
    degree: "Pre-University Course",
    field: "PUC",
    duration: "June 2020 - June 2022",
    location: "Srikakulam, Andhra Pradesh, India",
    description: "Completed Pre-University Course with an outstanding GPA of 9.3. Focused on foundational sciences and mathematics, preparing for engineering studies.",
  },
  {
    id: "3",
    institution: "Government High School, Polavaram",
    degree: "10th Grade",
    field: "Secondary Education",
    duration: "June 2019 - April 2020",
    location: "Polavaram, Andhra Pradesh, India",
    description: "Completed 10th grade with a perfect GPA of 10.0, demonstrating excellence in academics and strong foundation in core subjects.",
  },
]
