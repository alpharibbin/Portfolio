export interface Certification {
  id: string
  title: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  description: string
  category?: "hackathon" | "course" | "certification" | "achievement" | "internship"
  imageUrl?: string
}

export const certifications: Certification[] = [
  
]
