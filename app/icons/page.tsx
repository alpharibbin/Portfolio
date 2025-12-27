"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Search } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { PageTransition } from "@/components/page-transition"

export default function IconsPage() {
  const [icons, setIcons] = React.useState<string[]>([])
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    fetch("/api/icons")
      .then(res => res.json())
      .then(setIcons)
  }, [])

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const filteredIcons = icons.filter(icon =>
    icon
      .replace(".svg", "")
      .replace(/-/g, " ")
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  return (
    <PageTransition>
      <div className="container py-24">
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-4xl font-bold">Icons</h1>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search icons…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* GRID */}
        <div className="flex flex-wrap justify-between gap-6">
          {filteredIcons.map((icon, index) => {
            const name = icon.replace(".svg", "").replace(/-/g, " ")
            const path = `/brands/${icon}`

            return (
              <motion.div
                key={icon}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                className="w-[120px]"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card
                        onDoubleClick={() => copy(path)}
                        className="cursor-pointer select-none hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-4 flex flex-col items-center gap-2">
                          <div className="relative w-10 h-10">
                            <Image
                              src={path}
                              alt={name}
                              fill
                              className="object-contain"
                              sizes="40px"
                            />
                          </div>

                          <span className="text-sm truncate w-full text-center">
                            {name}
                          </span>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>

                    <TooltipContent>
                      Double-click to copy path
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            )
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredIcons.length === 0 && (
          <p className="mt-12 text-muted-foreground">
            No icons found.
          </p>
        )}
      </div>
    </PageTransition>
  )
}
