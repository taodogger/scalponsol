import { HeroSectionDemo } from "@/components/blocks/demo"
import { FeaturesSection } from "@/components/blocks/features-section"
import { TokenomicsSection } from "@/components/blocks/tokenomics-section"
import { BackstorySection } from "@/components/blocks/backstory-section"
import { CarouselDemo } from "@/components/ui/carousel-demo"
import { NavbarDemo } from "@/components/ui/navbar-demo"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <NavbarDemo />
      
      {/* Home section */}
      <section id="home">
        <HeroSectionDemo />
      </section>
      
      {/* Community Wins section */}
      <section id="wins" className="h-screen bg-black flex flex-col items-center justify-center">
        {/* Title section */}
        <div className="text-center mb-16 pt-20">
          <h2 className="text-3xl font-bold text-white dark:text-white sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">$MBot</span> Community Wins
          </h2>
        </div>
        
        {/* Carousel */}
        <CarouselDemo />
      </section>
      
      {/* Features section */}
      <section id="features">
        <FeaturesSection />
      </section>
      
      {/* Tokenomics section */}
      <section id="tokenomics">
        <TokenomicsSection />
      </section>
      
      {/* Backstory section */}
      <section id="backstory">
        <BackstorySection />
      </section>
    </div>
  );
}
