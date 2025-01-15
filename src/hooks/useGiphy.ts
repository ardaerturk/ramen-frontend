// hooks/useGiphy.ts

const GIPHY_API_KEY = 'ApBblWaJCJImxR1eYlPDH4ZK3YJyTx3C'

// hooks/useGiphy.ts
import { GiphyFetch } from '@giphy/js-fetch-api'

// const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY!)
const gf = new GiphyFetch(GIPHY_API_KEY)

export const useGiphy = () => {
  const fetchGif = async (searchTerm: string) => {
    try {
      const { data } = await gf.search(searchTerm, {
        limit: 1,
        rating: 'g'
      })
      return data[0]?.images.fixed_height.url
    } catch (error) {
      console.error('Error fetching GIF:', error)
      return null
    }
  }

  return { fetchGif }
}