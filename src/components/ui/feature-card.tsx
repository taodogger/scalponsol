import * as React from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description: string
  tokenBenefit?: string
  status?: "available" | "coming-soon"
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, tokenBenefit, status = "available", ...props }, ref) => {
    const isComingSoon = status === "coming-soon"

    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl border border-purple-500/20 dark:border-purple-400/20 bg-black/50 dark:bg-black/50 p-6 shadow-sm transition-all",
          isComingSoon ? "opacity-75" : "hover:shadow-lg hover:-translate-y-1",
          className
        )}
        ref={ref}
        {...props}
      >
        {isComingSoon && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-200">
              Coming Soon
            </span>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-lg text-white",
              isComingSoon
                ? "bg-purple-400 dark:bg-purple-600"
                : "bg-gradient-to-br from-purple-600 to-purple-700"
            )}>
              {icon}
            </div>
          </div>
          <div className="flex-1">
            <h3 className={cn(
              "text-lg font-semibold",
              isComingSoon
                ? "text-purple-400 dark:text-purple-400"
                : "text-white dark:text-white"
            )}>
              {title}
            </h3>
            <p className={cn(
              "mt-1 text-sm",
              isComingSoon
                ? "text-purple-300 dark:text-purple-400"
                : "text-purple-200 dark:text-purple-300"
            )}>
              {description}
            </p>
            {tokenBenefit && (
              <div className={cn(
                "mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                isComingSoon
                  ? "bg-purple-100 dark:bg-purple-800 text-purple-500 dark:text-purple-400"
                  : "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
              )}>
                {tokenBenefit}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }
