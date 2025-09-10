import { cn } from "@/lib/utils"
import { FloatingPokemon } from "@/components/ui/floating-pokemon"

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
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pokemon Elements */}
      <div className="absolute inset-0 z-0">
        <FloatingPokemon
          pokemonId={95} // Onix
          size="medium"
          speed={0.5}
          startPosition={{ x: 5, y: 15 }}
          direction="right"
        />
        <FloatingPokemon
          pokemonId={131} // Lapras
          size="large"
          speed={0.4}
          startPosition={{ x: 95, y: 20 }}
          direction="down"
        />
        <FloatingPokemon
          pokemonId={149} // Dragonite
          size="medium"
          speed={0.7}
          startPosition={{ x: 25, y: 85 }}
          direction="up"
        />
        <FloatingPokemon
          pokemonId={65} // Alakazam
          size="small"
          speed={0.9}
          startPosition={{ x: 75, y: 45 }}
          direction="diagonal"
        />
        <FloatingPokemon
          pokemonId={68} // Machamp
          size="small"
          speed={0.6}
          startPosition={{ x: 60, y: 75 }}
          direction="left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            <span className="text-2xl mr-2">💎</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">$SoS</span> Tokenomics
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built by ex-scalper turned dev with 20% daily revenue transparency. Every token you hold unlocks more value in our ecosystem.
          </p>
        </div>

        {/* Token Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
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
                "relative overflow-hidden rounded-xl p-6 border border-gray-200 dark:border-gray-800",
                "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
              )}
            >
              <div className={cn(
                "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
                item.color
              )} />
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.category}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
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

        {/* Developer Story */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">👨‍💻 The Scalper's Journey</h3>
              <p className="text-slate-200">From 14-year-old hustler to Pokemon card king</p>
            </div>

            <div className="space-y-4 text-slate-100 leading-relaxed max-w-4xl mx-auto">
              <p>
                <strong className="text-white">2017.</strong> I was 14 when I first dipped my toes into reselling shoes.
                Back then, it was pure chaos - no proxies, no sophisticated with captcha solving, just raw speed and luck.
                I was one of the first kids my age running scripts to cop Jordans, Nikes, and anything hyped.
                Those early days taught me I'd never be able to give up.
              </p>

              <p>
                <strong className="text-white">Then came the backdoor era.</strong> When traditional botting got too saturated
                and too difficult, I pivoted to backdooring, working directly with Footlocker, JD sports, and
                Nike staff. I learned how to connect with these people, to make money together.
                That's when I realized the real money wasn't made alone, but with others.
              </p>

              <p>
                <strong className="text-white">The proxy era hit.</strong> Suddenly, everyone was using residential proxies,
                VPNs, and headless browsers. The game changed overnight. I had to level up fast.
                Started building my own proxy networks, rotating IPs, developing custom fingerprints
                and started to make money selling on grey-hat forums to other scalpers.
              </p>

              <p>
                <strong className="text-white">Fast forward to Pokemon.</strong> I've seen every iteration of this space
                from the wild west of Supreme bots to the corporate takeover of Shopify. Pokemon cards?
                That's just sneaker culture meets collectibles. Same game, different assets. I know exactly
                where the inefficiencies are, where the whales lurk, and how to build something that actually
                works for the average scalper.
              </p>

              <p>
                <strong className="text-white">Why I hate most bots around now?</strong> Because they're cringe. Built by people
                who maximise for licenses sold and not quality of service.
                No understanding of the game nor any respect for the people they're servicing.
                Scalp on Sol is different - it's built by someone who's been in the trenches,
                who understands the ecosystem, and who actually cares about the community.
              </p>

              <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-600">
                <p className="text-center text-slate-200 italic">
                  💎 "I've spent thousands of dollars and hours on proxies, servers, and failed projects. Since the start of this whole
                  Pokemon onchain meta I've been building something transparent, effective, and actually useful
                  for fellow scalpers who want to capitalize." ⚡
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { TokenomicsSection }
