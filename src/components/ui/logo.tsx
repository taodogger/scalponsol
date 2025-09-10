import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "icon-only" | "text-only"
  className?: string
}

export function Logo({ size = "md", variant = "default", className }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl"
  }

  if (variant === "icon-only") {
    return (
      <Image
        src="/PS-Logo.png"
        alt="Scalponsol Logo"
        width={size === "sm" ? 24 : size === "md" ? 32 : size === "lg" ? 48 : 64}
        height={size === "sm" ? 24 : size === "md" ? 32 : size === "lg" ? 48 : 64}
        className={cn(sizeClasses[size], className)}
      />
    )
  }

  if (variant === "text-only") {
    return (
      <span className={cn("font-bold text-gray-900 dark:text-white", textSizeClasses[size], className)}>
        Scalponsol
      </span>
    )
  }

  // Default variant with both logo and text
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Image
        src="/PS-Logo.png"
        alt="Scalponsol Logo"
        width={size === "sm" ? 24 : size === "md" ? 32 : size === "lg" ? 48 : 64}
        height={size === "sm" ? 24 : size === "md" ? 32 : size === "lg" ? 48 : 64}
        className={sizeClasses[size]}
      />
      <span className={cn("font-bold text-gray-900 dark:text-white", textSizeClasses[size])}>
        Scalponsol
      </span>
    </div>
  )
}
