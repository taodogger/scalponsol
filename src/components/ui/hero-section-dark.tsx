import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { Logo } from "./logo"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaHref?: string
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:200vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:200vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaHref = "#",
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-black dark:from-purple-900/30 dark:via-black/20 dark:to-purple-900/30" />
        <section className="relative max-w-full mx-auto z-10">
          <RetroGrid {...gridOptions} />


          <div className="max-w-screen-xl relative z-10 mx-auto px-4 py-16 gap-12 md:px-8 flex flex-col justify-center min-h-screen">

            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center mt-2">
              {/* Logo above CA text */}
              <div className="flex justify-center mb-4">
                <Logo size="xl" variant="icon-only" />
              </div>
              
              <h1 className="text-sm text-purple-300 dark:text-purple-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-purple-500/20 via-purple-400/20 to-transparent dark:from-purple-500/10 dark:via-purple-400/10 border-[2px] border-purple-500/20 dark:border-purple-400/20 rounded-3xl w-fit">
                CA: <span className="font-mono text-xs">Coming Soon</span>
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              
              <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,255,255,_0.9)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,255,255,_0.8)_100%)]">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 dark:from-purple-200 dark:via-purple-400 dark:to-purple-600">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-purple-100 dark:text-purple-200">
                {description}
              </p>
              <div className="relative z-20 items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <div className="relative group">
                  <button
                    disabled
                    className="relative z-20 inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-gray-400 bg-gray-600 cursor-not-allowed rounded-full shadow-lg border border-gray-500/20 opacity-50"
                  >
                    Access Platform
                  </button>
                  {/* Hover tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30">
                    Platform is invite-only for now. Due to how the algorithms work, we cannot have too many people running the same strategy. New openings will be made available to highest stakeholders.
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>

              {/* X (Twitter) link */}
              <div className="mt-3 flex justify-center">
                <a
                  href="https://x.com/masterbotsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X"
                  className="relative z-20 inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-700 hover:to-purple-600 dark:from-purple-700 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-600/20"
                >
                  Follow on X
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
