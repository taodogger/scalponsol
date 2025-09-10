import { HeroSection } from "@/components/ui/hero-section-dark"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="⚡ Scalponsol"
      subtitle={{
        regular: "The Ultimate Pokemon Card ",
        gradient: "Scalping Platform",
      }}
      description="Built by ex-scalper turned dev. The most trusted Pokemon card scalping platform with real transparency. Track prices, get alerts, and connect with fellow scalpers. Hold $SoS tokens for exclusive benefits and free card airdrops."
      ctaText="⚡ Access Platform"
      ctaHref="/login"
      bottomImage={{
        light: "/demopic.png",
        dark: "/demopic.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  )
}
export { HeroSectionDemo }
