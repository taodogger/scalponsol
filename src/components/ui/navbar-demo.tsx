"use client"

import * as React from "react"
import { Home, Trophy, Zap, Diamond, BookOpen } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  {
    name: "Home",
    url: "#home",
    icon: Home,
  },
  {
    name: "Wins",
    url: "#wins",
    icon: Trophy,
  },
  {
    name: "Features",
    url: "#features",
    icon: Zap,
  },
  {
    name: "Tokenomics",
    url: "#tokenomics",
    icon: Diamond,
  },
  {
    name: "Backstory",
    url: "#backstory",
    icon: BookOpen,
  },
]

export function NavbarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
