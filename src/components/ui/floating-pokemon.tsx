"use client"

import { useEffect, useState } from "react"

interface FloatingPokemonProps {
  pokemonId: number
  size?: "small" | "medium" | "large"
  speed?: number
  startPosition?: { x: number; y: number }
  direction?: "up" | "down" | "left" | "right" | "diagonal"
}

const FloatingPokemon = ({
  pokemonId,
  size = "medium",
  speed = 1,
  startPosition = { x: 50, y: 50 },
  direction = "up"
}: FloatingPokemonProps) => {
  const [position, setPosition] = useState(startPosition)

  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-24 h-24"
  }

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x
        let newY = prev.y

        switch (direction) {
          case "up":
            newY = newY - (0.5 * speed)
            if (newY < -10) newY = 110
            break
          case "down":
            newY = newY + (0.5 * speed)
            if (newY > 110) newY = -10
            break
          case "left":
            newX = newX - (0.3 * speed)
            if (newX < -10) newX = 110
            break
          case "right":
            newX = newX + (0.3 * speed)
            if (newX > 110) newX = -10
            break
          case "diagonal":
            newX = newX + (0.2 * speed)
            newY = newY - (0.3 * speed)
            if (newX > 110) newX = -10
            if (newY < -10) newY = 110
            break
        }

        return { x: newX, y: newY }
      })
    }, 50)

    return () => clearInterval(moveInterval)
  }, [direction, speed])

  return (
    <div
      className={`absolute ${sizeClasses[size]} opacity-30 hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
        alt={`Pokemon ${pokemonId}`}
        className="w-full h-full object-contain filter drop-shadow-sm"
        onError={(e) => {
          // Fallback to pixel art if official artwork fails
          const target = e.target as HTMLImageElement
          target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
        }}
      />
    </div>
  )
}

export { FloatingPokemon }
