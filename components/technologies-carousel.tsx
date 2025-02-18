"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const technologies = [
  {
    name: "React",
    icon: "/placeholder.svg?height=80&width=80",
    color: "rgb(97, 218, 251)",
  },
  {
    name: "Tailwind CSS",
    icon: "/placeholder.svg?height=80&width=80",
    color: "rgb(56, 189, 248)",
  },
  {
    name: "Next.js",
    icon: "/placeholder.svg?height=80&width=80",
    color: "rgb(255, 255, 255)",
  },
  {
    name: "Node.js",
    icon: "/placeholder.svg?height=80&width=80",
    color: "rgb(104, 160, 99)",
  },
  {
    name: "PostgreSQL",
    icon: "/placeholder.svg?height=80&width=80",
    color: "rgb(51, 103, 145)",
  },
  {
    name: "TypeScript",
    icon: "/placeholder.svg?height=80&width=80",
    color: "rgb(49, 120, 198)",
  },
  {
    name: "MongoDB",
    icon: "/placeholder.svg?height=80&width=80",
    color: "rgb(0, 237, 100)",
  },
  {
    name: "Python",
    icon: "/placeholder.svg?height=80&width=80",
    color: "rgb(255, 223, 89)",
  },
]

export default function TechnologiesCarousel() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationFrameId: number
    let startTime: number | null = null
    const duration = 20000 // 20 seconds for one complete scroll

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (!isHovered) {
        const percentage = (progress % duration) / duration
        const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth
        scrollElement.scrollLeft = percentage * scrollWidth
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered])

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-900/50 rounded-xl p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Double the items to create seamless loop effect */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="flex flex-col items-center justify-center gap-4 min-w-[120px]">
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center p-4 transition-transform hover:scale-110"
              style={{ backgroundColor: `${tech.color}10` }}
            >
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={80}
                height={80}
                className="w-12 h-12"
                style={{ filter: `drop-shadow(0 0 8px ${tech.color}40)` }}
              />
            </div>
            <span className="text-sm text-gray-400">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

