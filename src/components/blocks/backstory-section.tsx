import React from "react"

export function BackstorySection() {
  return (
    <section className="py-24 bg-black dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white dark:text-white sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">$MBot</span> Backstory
          </h2>
          <p className="mt-4 text-lg text-purple-200 dark:text-purple-300 max-w-3xl mx-auto">
            From 14-year-old hustler to Pokemon card king - the journey that built MasterBot
          </p>
        </div>

        {/* Developer Story */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-800 to-purple-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">The Scalper's Journey</h3>
              <p className="text-purple-200">From 14-year-old hustler to Pokemon card king</p>
            </div>

            <div className="space-y-4 text-purple-100 leading-relaxed max-w-4xl mx-auto">
              <p>
                <strong className="text-white">2017.</strong> I was 14 when I first dipped my toes into reselling shoes.
                Back then, it was pure chaos - no proxies, no sophisticated with captcha solving, just raw speed and luck.
                I was one of the first kids my age running scripts to cop Jordans, Nikes, and anything hyped.
                Those early days taught me I&apos;d never be able to give up.
              </p>

              <p>
                <strong className="text-white">Then came the backdoor era.</strong> When traditional botting got too saturated
                and too difficult, I pivoted to backdooring, working directly with Footlocker, JD sports, and
                Nike staff. I learned how to connect with these people, to make money together.
                That&apos;s when I realized the real money wasn&apos;t made alone, but with others.
              </p>

              <p>
                <strong className="text-white">The proxy era hit.</strong> Suddenly, everyone was using residential proxies,
                VPNs, and headless browsers. The game changed overnight. I had to level up fast.
                Started building my own proxy networks, rotating IPs, developing custom fingerprints
                and started to make money selling on grey-hat forums to other scalpers.
              </p>

              <p>
                <strong className="text-white">Fast forward to Pokemon.</strong> I&apos;ve seen every iteration of this space
                from the wild west of Supreme bots to the corporate takeover of Shopify. Pokemon cards?
                That&apos;s just sneaker culture meets collectibles. Same game, different assets. I know exactly
                where the inefficiencies are, where the whales lurk, and how to build something that actually
                works for the average scalper.
              </p>

              <p>
                <strong className="text-white">Why I hate most bots around now?</strong> Because they&apos;re cringe. Built by people
                who maximise for licenses sold and not quality of service.
                No understanding of the game nor any respect for the people they&apos;re servicing.
                MasterBot is different - it&apos;s built by someone who&apos;s been in the trenches,
                who understands the ecosystem, and who actually cares about the community.
              </p>

              <div className="mt-6 p-4 bg-purple-900/50 rounded-lg border border-purple-600">
                <p className="text-center text-purple-200 italic">
                  &quot;I&apos;ve spent thousands of dollars and hours on proxies, servers, and failed projects. Since the start of this whole
                  Pokemon onchain meta I&apos;ve been building something transparent, effective, and actually useful
                  for fellow scalpers who want to capitalize.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
