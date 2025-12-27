"use client"

export const dynamic = 'force-dynamic'

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, ArrowRight, ExternalLink, Github, Code, Briefcase, Award, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { personalInfo } from "@/data/personal"
import { projects, type Project } from "@/data/projects"
import { skills, type Skill } from "@/data/skills"
import { experiences, type Experience } from "@/data/experience"
import { certifications, type Certification } from "@/data/certifications"
import { PageTransition } from "@/components/page-transition"
import { Boxes } from "@/components/ui/background-boxes";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { getSkillImage, hasSkillImage } from "@/lib/skill-images"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)
  const topSkills = skills.sort((a, b) => b.level - a.level).slice(0, 12)
  const recentExperiences = experiences.slice(0, 2)
  const recentCertifications = certifications.slice(0, 2)

  return (
    <PageTransition>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] py-20 flex items-center justify-center overflow-hidden glitter-bg">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container relative z-10 pb-20">
            <div className="flex flex-col items-center text-center space-y-8 px-4">
              {personalInfo.avatar && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-4"
                >
                  <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary/20">
                    <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
                    <AvatarFallback>{personalInfo.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                >
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium"
                >
                  {personalInfo.role}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                  {personalInfo.tagline}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="group">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    Contact Me
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-sm text-muted-foreground">Scroll</span>
              <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* TEXT COLUMN */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  {personalInfo.bio}
                </p>

                <Button asChild variant="outline">
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-center"
              >
                <PixelatedCanvas
                  src="/img.jpg"
                  cellSize={3}
                  height={500}
                  dotScale={0.9}
                  shape="square"
                  dropoutStrength={0.4}
                  interactive
                  backgroundColor="transparent"
                  distortionStrength={3}
                  distortionRadius={80}
                  distortionMode="swirl"
                  followSpeed={0.2}
                  jitterStrength={4}
                  jitterSpeed={4}
                  sampleAverage
                  tintColor="text-muted-foreground"
                  tintStrength={0.2}
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-background">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground">
                Technologies I work with
              </p>
            </motion.div>
            <TooltipProvider delayDuration={200}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">

                {topSkills.map((skill, index) => {
                  const imagePath = getSkillImage(skill.name)
                  const hasImage = hasSkillImage(skill.name)

                  const strokeWidth = 5
                  const radius = 58
                  const circumference = 2 * Math.PI * radius
                  const arcLength = circumference * 0.75
                  const offset = arcLength - (arcLength * skill.level) / 100

                  return (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex justify-center"
                        >
                          <div className="relative w-40 h-40 group cursor-pointer">
                            <Card className="relative w-full h-full rounded-full bg-card shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                              <svg
                                className="absolute inset-0 w-full h-full -rotate-[225deg]"
                                viewBox="0 0 120 120"
                              >
                                <circle
                                  cx="60"
                                  cy="60"
                                  r={radius}
                                  fill="none"
                                  stroke="hsl(var(--border))"
                                  strokeWidth={strokeWidth}
                                  strokeDasharray={`${arcLength} ${circumference}`}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <circle
                                  cx="60"
                                  cy="60"
                                  r={radius}
                                  fill="none"
                                  stroke="url(#gradient)"
                                  strokeWidth={strokeWidth}
                                  strokeDasharray={`${arcLength} ${circumference}`}
                                  strokeDashoffset={offset}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="transition-all duration-1000 ease-out"
                                />
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                                    <stop offset="100%" stopColor="hsl(var(--primary)/0.7)" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3 pt-8">
                                <div className="relative w-16 h-16">
                                  {hasImage && imagePath ? (
                                    <Image
                                      src={imagePath}
                                      alt={skill.name}
                                      fill
                                      className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                                    />
                                  ) : (
                                    <div className="w-full h-full bg-muted rounded-full flex items-center justify-center text-xl font-bold text-muted-foreground">
                                      ?
                                    </div>
                                  )}
                                </div>
                                <span className="text-lg font-bold">
                                  {skill.level}%
                                </span>
                              </div>
                            </Card>
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="font-medium">
                        {skill.name}
                      </TooltipContent>
                    </Tooltip>
                  )
                })}
              </div>
            </TooltipProvider>

            {/* CTA */}
            <div className="text-center mt-14">
              <Button asChild variant="outline" size="lg">
                <Link href="/skills" className="flex items-center gap-2">
                  View All Skills
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

          </div>
        </section>


        {/* Featured Projects Section */}
        <section id="projects" className="py-20 bg-muted/30">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        {project.liveUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Preview Section */}
        <section id="experience" className="py-20">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
              <p className="text-muted-foreground">My professional journey</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {recentExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{experience.role}</CardTitle>
                          <CardDescription className="text-base font-medium mt-1">
                            {experience.company}
                          </CardDescription>
                        </div>
                        <Briefcase className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <p className="text-sm leading-relaxed">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/experience">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Certifications Preview Section */}
        {recentCertifications.length > 0 && (
          <section id="certifications" className="py-20 bg-muted/30">
            <div className="container px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
                <p className="text-muted-foreground">My accomplishments</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                {recentCertifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl">{cert.title}</CardTitle>
                            <CardDescription className="text-base font-medium mt-1">
                              {cert.issuer}
                            </CardDescription>
                          </div>
                          <Award className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(cert.issueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                          </div>
                          <p className="text-sm leading-relaxed">{cert.description}</p>
                          {cert.category && (
                            <Badge variant="secondary">{cert.category}</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <Button asChild variant="outline">
                  <Link href="/certifications">
                    View All Certifications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action Section */}
        <section className="py-20 relative w-full h-full overflow-hidden glitter-bg flex flex-col items-center justify-center rounded-lg">
          <Boxes/>
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary relative z-20">Let&apos;s Work Together</h2>
              <p className="text-lg text-muted-foreground relative z-20">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/projects">
                    View My Work
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

