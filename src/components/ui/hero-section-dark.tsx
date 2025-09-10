import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { FloatingPokemon } from "./floating-pokemon"
import { Logo } from "./logo"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  bottomImage?: {
    light: string
    dark: string
  }
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
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      bottomImage = {
        light: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
        dark: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&crop=center",
      },
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-gradient-to-br from-slate-900/20 via-slate-800/10 to-slate-900/20 dark:from-slate-900/30 dark:via-slate-800/20 dark:to-slate-900/30" />
        <section className="relative max-w-full mx-auto z-10">
          <RetroGrid {...gridOptions} />

          {/* Floating Pokemon Background Elements */}
          <div className="absolute inset-0 z-0">
            <FloatingPokemon
              pokemonId={25} // Pikachu
              size="small"
              speed={0.8}
              startPosition={{ x: 15, y: 20 }}
              direction="diagonal"
            />
            <FloatingPokemon
              pokemonId={6} // Charizard
              size="medium"
              speed={1.2}
              startPosition={{ x: 85, y: 15 }}
              direction="up"
            />
            <FloatingPokemon
              pokemonId={150} // Mewtwo
              size="large"
              speed={0.6}
              startPosition={{ x: 10, y: 80 }}
              direction="right"
            />
            <FloatingPokemon
              pokemonId={133} // Eevee
              size="small"
              speed={1.5}
              startPosition={{ x: 90, y: 70 }}
              direction="left"
            />
            <FloatingPokemon
              pokemonId={144} // Articuno
              size="medium"
              speed={0.9}
              startPosition={{ x: 70, y: 30 }}
              direction="down"
            />
            <FloatingPokemon
              pokemonId={151} // Mew
              size="small"
              speed={1.1}
              startPosition={{ x: 30, y: 60 }}
              direction="diagonal"
            />
            <FloatingPokemon
              pokemonId={1} // Bulbasaur
              size="small"
              speed={0.7}
              startPosition={{ x: 50, y: 10 }}
              direction="down"
            />
            <FloatingPokemon
              pokemonId={4} // Charmander
              size="small"
              speed={1.3}
              startPosition={{ x: 75, y: 85 }}
              direction="up"
            />
          </div>

          <div className="max-w-screen-xl relative z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            {/* Logo at top */}
            <div className="flex justify-center mb-8">
              <Logo size="lg" />
            </div>

            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <h1 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                CA: <span className="font-mono text-xs">Coming Soon</span>
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,255,255,_0.00)_202.08%)]">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-800 to-slate-900 dark:from-slate-300 dark:via-slate-400 dark:to-slate-500">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {description}
              </p>
              <div className="relative z-20 items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <a
                  href={ctaHref}
                  className="relative z-20 inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 dark:from-slate-700 dark:to-slate-600 dark:hover:from-slate-600 dark:hover:to-slate-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-600/20"
                >
                  <span className="mr-2 text-lg">⚡</span>
                  Access Platform
                </a>
              </div>
            </div>
            {bottomImage && (
              <div className="mt-32 mx-10 relative z-10">
                <img
                  src={bottomImage.light}
                  className="w-full shadow-lg rounded-lg border border-gray-200 dark:hidden"
                  alt="Dashboard preview"
                />
                <img
                  src={bottomImage.dark}
                  className="hidden w-full shadow-lg rounded-lg border border-gray-800 dark:block"
                  alt="Dashboard preview"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
