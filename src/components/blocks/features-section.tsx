import { FeatureCard } from "@/components/ui/feature-card"
import {
  TrendingUp,
  Trophy,
  Users,
  Shield,
  Bot,
  BarChart3
} from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  tokenBenefit: string
  status: "available" | "coming-soon"
}

function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real-Time Price Tracking",
      description: "Live price monitoring across TCGPlayer, eBay, and other platforms with instant profit calculations.",
      tokenBenefit: "Premium analytics dashboard access",
      status: "available"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Anti-Ban Protection",
      description: "Built-in proxies, rate limiting, and smart timing to keep your accounts safe while scalping.",
      tokenBenefit: "Enterprise-grade protection suite",
      status: "available"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Scalping Bot",
      description: "Advanced AI algorithms scan multiple marketplaces instantly to find profitable flips before anyone else.",
      tokenBenefit: "50% faster alerts for token holders",
      status: "coming-soon"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Scalper Leaderboard",
      description: "Compete with other scalpers, climb ranks, and earn exclusive rewards based on your flipping success.",
      tokenBenefit: "VIP leaderboard with special prizes",
      status: "coming-soon"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Trading",
      description: "Connect with fellow scalpers, share strategies, and participate in group flips for bigger profits.",
      tokenBenefit: "Access to private trading channels",
      status: "coming-soon"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Profit Analytics",
      description: "Detailed performance metrics, ROI tracking, and market trend analysis to optimize your strategy.",
      tokenBenefit: "Advanced predictive analytics",
      status: "coming-soon"
    }
  ]

  return (
    <section className="py-24 bg-black dark:bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white dark:text-white sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">$MBot</span> Ecosystem
          </h2>
          <p className="mt-4 text-lg text-purple-200 dark:text-purple-300 max-w-3xl mx-auto">
            Built by ex-scalper turned dev with 20% daily revenue transparency.
            Real-time price tracking and anti-ban protection available now.
            Advanced features coming soon with token holder benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              tokenBenefit={feature.tokenBenefit}
              status={feature.status}
            />
          ))}
        </div>

        <div className="relative z-20 mt-16 text-center">
          <a
            href="/login"
            className="relative z-20 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Start with Price Tracking Today
          </a>
          <p className="mt-4 text-sm text-purple-300 dark:text-purple-400">
            Use our available features now, and get early access to advanced tools as a token holder.
          </p>
        </div>
      </div>
    </section>
  )
}

export { FeaturesSection }
