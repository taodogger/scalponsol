// DexScreener API utilities for $POKESCALP token

export interface DexPair {
  priceUsd: string
  priceChange?: {
    h24: number
  }
  volume?: {
    h24: string
  }
  marketCap?: string
  liquidity?: {
    usd: string
  }
}

export interface DexScreenerResponse {
  pairs: DexPair[]
}

// Replace with your actual contract address
export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "x6EarUTSrJzwyoBr1WjW4xciHFkrWMaaFnsi6TEpump"

export async function fetchDexData(): Promise<DexPair | null> {
  if (CONTRACT_ADDRESS === "YOUR_CONTRACT_ADDRESS_HERE") {
    return null
  }

  try {
    const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: DexScreenerResponse = await response.json()

    if (data.pairs && data.pairs.length > 0) {
      return data.pairs[0]
    }

    return null
  } catch (error) {
    console.error("Failed to fetch DexScreener data:", error)
    return null
  }
}

export function formatPrice(price: string): string {
  const num = parseFloat(price)
  if (num < 0.000001) {
    return num.toExponential(2)
  }
  return num.toFixed(6)
}

export function formatCurrency(value: string): string {
  const num = parseFloat(value)
  if (num >= 1000000) {
    return `$${(num / 1000000).toFixed(2)}M`
  }
  if (num >= 1000) {
    return `$${(num / 1000).toFixed(1)}K`
  }
  return `$${num.toFixed(2)}`
}
