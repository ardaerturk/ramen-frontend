// utils/position.ts
export const getRandomPosition = (padding = { x: 300, y: 200 }) => {
    if (typeof window === 'undefined') return { x: 0, y: 0 }
    
    return {
      x: Math.random() * (window.innerWidth - padding.x),
      y: Math.random() * (window.innerHeight - padding.y)
    }
  }
  
  export const ensureOnScreen = (position: { x: number, y: number }) => {
    if (typeof window === 'undefined') return position
  
    return {
      x: Math.min(Math.max(position.x, 0), window.innerWidth - 300),
      y: Math.min(Math.max(position.y, 0), window.innerHeight - 200)
    }
  }