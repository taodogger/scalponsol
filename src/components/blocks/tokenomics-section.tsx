import { cn } from "@/lib/utils"

function TokenomicsSection() {
  const tokenomicsData = [
    {
      category: "Buybacks & Burns",
      utility: "Platform revenue buys back & burns tokens",
      percentage: "Reduces supply, increases value",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      category: "Pokemon Card Airdrops",
      utility: "Free rare Pokemon cards to holders",
      percentage: "Real-world value distribution",
      color: "from-blue-600 to-blue-700"
    },
    {
      category: "Dev Revenue Transparency",
      utility: "20% of daily revenue paid to dev",
      percentage: "No token sell incentive",
      color: "from-orange-600 to-orange-700"
    },
    {
      category: "Premium Access",
      utility: "Early access to scalping tools",
      percentage: "Token holders get priority",
      color: "from-slate-600 to-slate-700"
    }
  ]

  const stats = [
    { label: "Total Supply", value: "1,000,000,000" },
    { label: "Buyback Allocation", value: "5% of revenue" },
    { label: "Dev Revenue", value: "20% daily" },
    { label: "Card Airdrops", value: "Monthly" }
  ]

  return (
    <section className="py-24 bg-black dark:bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white dark:text-white sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">$SoS</span> Tokenomics
          </h2>
          <p className="mt-4 text-lg text-purple-200 dark:text-purple-300 max-w-3xl mx-auto">
            Built by ex-scalper turned dev with 20% daily revenue transparency. Every token you hold unlocks more value in our ecosystem.
          </p>
        </div>

        {/* Token Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-purple-300 dark:text-purple-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Utility Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tokenomicsData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-xl p-6 border border-purple-500/20 dark:border-purple-400/20",
                "bg-gradient-to-br from-purple-900/20 to-purple-800/20 dark:from-purple-900/30 dark:to-purple-800/30"
              )}
            >
              <div className={cn(
                "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
                item.color
              )} />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white dark:text-white mb-2">
                  {item.category}
                </h3>
                <p className="text-purple-200 dark:text-purple-300 mb-3">
                  {item.utility}
                </p>
                <div className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white",
                  `bg-gradient-to-r ${item.color}`
                )}>
                  {item.percentage}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export { TokenomicsSection }
