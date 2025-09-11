"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Users, Lock, Timer } from "lucide-react"
import { cn } from "@/lib/utils"
import { fetchDexData, formatPrice, formatCurrency, CONTRACT_ADDRESS } from "@/lib/dexscreener"
import { FloatingPokemon } from "@/components/ui/floating-pokemon"
import { Logo } from "@/components/ui/logo"

interface DexScreenerData {
  priceUsd: string
  priceChange24h: number
  volume24h: string
  marketCap: string
  liquidity: string
}

function LoginPage() {
  const [dexData, setDexData] = useState<DexScreenerData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadDexData = async () => {
      const pair = await fetchDexData()

      if (pair) {
        setDexData({
          priceUsd: formatPrice(pair.priceUsd),
          priceChange24h: pair.priceChange?.h24 || 0,
          volume24h: pair.volume?.h24 ? formatCurrency(pair.volume.h24) : "N/A",
          marketCap: pair.marketCap ? formatCurrency(pair.marketCap) : "N/A",
          liquidity: pair.liquidity?.usd ? formatCurrency(pair.liquidity.usd) : "N/A"
        })
        setError(null)
      } else {
        setError(CONTRACT_ADDRESS === "YOUR_CONTRACT_ADDRESS_HERE"
          ? "Contract address not configured"
          : "Failed to load price data"
        )
      }

      setLoading(false)
    }

    loadDexData()

    if (CONTRACT_ADDRESS !== "YOUR_CONTRACT_ADDRESS_HERE") {
      // Update every 30 seconds
      const interval = setInterval(loadDexData, 30000)
      return () => clearInterval(interval)
    }
  }, [])

  const isLocked = process.env.NEXT_PUBLIC_PLATFORM_LOCKED !== 'false'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900/20 via-slate-800/10 to-slate-900/20 dark:from-slate-900/30 dark:via-slate-800/20 dark:to-slate-900/30 flex items-center justify-center p-4 relative">
      {/* Subtle background grid pattern like main page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 [transform:rotateX(65deg)]">
          <div className="animate-grid [background-image:linear-gradient(to_right,rgba(71,85,105,0.1)_1px,transparent_0),linear-gradient(to_bottom,rgba(71,85,105,0.1)_1px,transparent_0)] [background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
        </div>
      </div>

      {/* Background Pokemon Elements */}
      <div className="absolute inset-0 z-0">
        <FloatingPokemon
          pokemonId={150} // Mewtwo
          size="large"
          speed={0.3}
          startPosition={{ x: 12, y: 15 }}
          direction="diagonal"
        />
        <FloatingPokemon
          pokemonId={25} // Pikachu
          size="medium"
          speed={0.8}
          startPosition={{ x: 88, y: 25 }}
          direction="left"
        />
        <FloatingPokemon
          pokemonId={151} // Mew
          size="small"
          speed={0.6}
          startPosition={{ x: 20, y: 85 }}
          direction="right"
        />
        <FloatingPokemon
          pokemonId={144} // Articuno
          size="medium"
          speed={0.4}
          startPosition={{ x: 80, y: 75 }}
          direction="up"
        />
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo size="md" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            <span className="text-2xl mr-2">🔑</span> Access Portal
          </h1>
          <p className="text-gray-700 dark:text-slate-200">
            Built by ex-scalper turned dev. Exclusive platform for Pokemon card scalpers
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-white/90 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-gray-200 dark:border-white/20 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            {isLocked ? (
              <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
                <Lock className="h-5 w-5" />
                <span className="font-semibold">🔒 Platform Locked</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <Users className="h-5 w-5" />
                <span className="font-semibold">✅ Access Granted</span>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-gray-700 dark:text-white/80 mb-4">
              {isLocked
                ? "Platform access will be unlocked after token bonding on pump.fun"
                : "Welcome back! Access your scalping dashboard."
              }
            </p>

            {isLocked && (
              <div className="bg-yellow-50 dark:bg-yellow-500/20 rounded-lg p-4 mb-4 border border-yellow-200 dark:border-yellow-500/30">
                <div className="flex items-center justify-center space-x-2 text-yellow-700 dark:text-yellow-300 mb-2">
                  <Timer className="h-4 w-4" />
                  <span className="text-sm font-medium">Token Launch Pending</span>
                </div>
                <p className="text-yellow-600 dark:text-yellow-200 text-sm">
                  Join our X community for launch updates and early access notifications.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Price Tracker */}
        <div className="bg-white/90 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-gray-200 dark:border-white/20 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
            <h3 className="text-gray-900 dark:text-white font-semibold">$SoS Price</h3>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 dark:border-white mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-white/60">Loading price data...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-600 dark:text-red-400 mb-2">❌ {error}</p>
              <p className="text-gray-600 dark:text-white/60 text-sm">
                Price data temporarily unavailable
              </p>
            </div>
          ) : dexData ? (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  ${dexData.priceUsd}
                </div>
                <div className={cn(
                  "text-sm font-medium",
                  dexData.priceChange24h >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                )}>
                  {dexData.priceChange24h >= 0 ? "+" : ""}{dexData.priceChange24h.toFixed(2)}% (24h)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-gray-600 dark:text-white/60">Volume</div>
                  <div className="text-gray-900 dark:text-white font-medium">{dexData.volume24h}</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 dark:text-white/60">Liquidity</div>
                  <div className="text-gray-900 dark:text-white font-medium">{dexData.liquidity}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-white/60">Price data not available</p>
              <p className="text-gray-500 dark:text-white/40 text-sm mt-1">
                Token not yet launched
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isLocked ? (
            <>
              <button className="w-full bg-gradient-to-r from-slate-600 to-slate-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                🔒 Platform Locked - Coming Soon
              </button>
              <button className="w-full bg-gray-100 dark:bg-white/10 backdrop-blur-lg text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-xl border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 transition-all">
                🐦 Join X Community
              </button>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                Connect Phantom Wallet
              </button>
            </>
          ) : (
            <>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                Enter Dashboard
              </button>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                Connect Phantom Wallet
              </button>
            </>
          )}

          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-white/80 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
          >
            🏠 Back to Home
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 space-y-3">
          <div className="flex justify-center">
            <Logo size="sm" variant="icon-only" />
          </div>
          <p className="text-gray-600 dark:text-white/60 text-sm">
            Early access for $SoS token holders
          </p>
        </div>
      </div>
    </div>
  )
}

export { LoginPage }
