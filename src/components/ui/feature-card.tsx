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
          "group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all",
          isComingSoon ? "opacity-75" : "hover:shadow-lg hover:-translate-y-1",
          className
        )}
        ref={ref}
        {...props}
      >
        {isComingSoon && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:text-yellow-200">
              🚀 Coming Soon
            </span>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-lg text-white",
              isComingSoon
                ? "bg-gray-400 dark:bg-gray-600"
                : "bg-gradient-to-br from-slate-600 to-slate-700"
            )}>
              {icon}
            </div>
          </div>
          <div className="flex-1">
            <h3 className={cn(
              "text-lg font-semibold",
              isComingSoon
                ? "text-gray-500 dark:text-gray-400"
                : "text-gray-900 dark:text-white"
            )}>
              {title}
            </h3>
            <p className={cn(
              "mt-1 text-sm",
              isComingSoon
                ? "text-gray-400 dark:text-gray-500"
                : "text-gray-600 dark:text-gray-300"
            )}>
              {description}
            </p>
            {tokenBenefit && (
              <div className={cn(
                "mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                isComingSoon
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                  : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
              )}>
                💎 {tokenBenefit}
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
