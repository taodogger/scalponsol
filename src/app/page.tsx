import { HeroSectionDemo } from "@/components/blocks/demo"
import { FeaturesSection } from "@/components/blocks/features-section"
import { TokenomicsSection } from "@/components/blocks/tokenomics-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSectionDemo />
      <FeaturesSection />
      <TokenomicsSection />
    </div>
  );
}
