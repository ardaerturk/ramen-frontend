// hooks/useWindowsXP.tsx
import { useState, useEffect, useCallback } from 'react'

interface Popup {
  id: string
  title: string
  content: string
  type: 'ad' | 'warning' | 'error' | 'system'
  position?: { x: number; y: number }
}

interface SystemMessage {
  id: string
  icon: string
  message: string
  timestamp: number
}

export default function useWindowsXP() {
  const [popups, setPopups] = useState<Popup[]>([])
  const [systemMessages, setSystemMessages] = useState<SystemMessage[]>([])
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false)
  const [activeWindows, setActiveWindows] = useState<string[]>([])

  // Sound effects
  const sounds = {
    error: new Audio('/sounds/error.wav'),
    notification: new Audio('/sounds/notification.wav'),
    click: new Audio('/sounds/click.wav'),
    startup: new Audio('/sounds/startup.wav'),
    warning: new Audio('/sounds/warning.wav'),
  }

  // Popup messages pool
  const popupPool = [
    {
      title: "🌟 CONGRATULATIONS! 🌟",
      content: "You're the 1,000,000th visitor! Claim your free ramen! 🍜",
      type: 'ad' as const,
    },
    {
      title: "⚠️ System Warning",
      content: "Your computer might be at risk! Install Ramen Antivirus Now!",
      type: 'warning' as const,
    },
    {
      title: "🔥 Hot Singles In Your Area",
      content: "Local founders want to meet you for ramen! Click here!",
      type: 'ad' as const,
    },
    {
      title: "📢 System Message",
      content: "A new version of RAMEN.exe is available! Update now?",
      type: 'system' as const,
    },
    {
      title: "🚨 Critical Error",
      content: "Too much awesomeness detected! System overload!",
      type: 'error' as const,
    },
    {
      title: "💾 Download Now!",
      content: "Free Ramen Screensaver - Make your desktop delicious!",
      type: 'ad' as const,
    },
    {
      title: "🎮 Gaming Time!",
      content: "You've been selected to play Ramen Crush Saga!",
      type: 'ad' as const,
    },
    {
      title: "🔄 Update Required",
      content: "Your friendship.dll is outdated. Install new friends?",
      type: 'system' as const,
    }
  ]

  // System message pool
  const systemMessagePool = [
    { icon: '🔋', message: 'Battery: 99% remaining (Plugged in)' },
    { icon: '📶', message: 'Network connection: Ramen WiFi' },
    { icon: '🛡️', message: 'Antivirus: Your ramen is protected' },
    { icon: '💭', message: 'You have new friend suggestions!' },
    { icon: '📊', message: 'System performance: Too awesome' },
    { icon: '🔄', message: 'Updates available: Install now?' },
    { icon: '📨', message: 'New message from: potential_bestie.exe' },
    { icon: '⚡', message: 'Power mode: Maximum friendship' }
  ]

  // Create a new popup
  const createPopup = useCallback((popupConfig?: Partial<Popup>) => {
    const randomPopup = popupPool[Math.floor(Math.random() * popupPool.length)]
    const newPopup: Popup = {
      id: Math.random().toString(36).substr(2, 9),
      ...randomPopup,
      ...popupConfig,
      position: {
        x: Math.random() * (window.innerWidth - 300),
        y: Math.random() * (window.innerHeight - 200)
      }
    }

    setPopups(prev => [...prev, newPopup])
    playSound(newPopup.type)
  }, [])

  // Remove a popup
  const removePopup = useCallback((id: string) => {
    setPopups(prev => prev.filter(popup => popup.id !== id))
    sounds.click.play()
  }, [])

  // Create a system tray message
  const createSystemMessage = useCallback(() => {
    const randomMessage = systemMessagePool[Math.floor(Math.random() * systemMessagePool.length)]
    const newMessage: SystemMessage = {
      id: Math.random().toString(36).substr(2, 9),
      ...randomMessage,
      timestamp: Date.now()
    }

    setSystemMessages(prev => [...prev, newMessage])
    sounds.notification.play()

    // Remove message after 5 seconds
    setTimeout(() => {
      setSystemMessages(prev => prev.filter(msg => msg.id !== newMessage.id))
    }, 5000)
  }, [])

  // Play sound effects
  const playSound = useCallback((type: Popup['type']) => {
    switch(type) {
      case 'error':
        sounds.error.play()
        break
      case 'warning':
        sounds.warning.play()
        break
      case 'system':
      case 'ad':
        sounds.notification.play()
        break
    }
  }, [])

  // Initialize chaos
  useEffect(() => {
    // Play startup sound
    sounds.startup.play()

    // Create initial popups
    setTimeout(() => {
      createPopup()
    }, 2000)

    // Create random popups
    const popupInterval = setInterval(() => {
      if (Math.random() > 0.5 && popups.length < 5) {
        createPopup()
      }
    }, 10000)

    // Create random system messages
    const systemMessageInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createSystemMessage()
      }
    }, 8000)

    return () => {
      clearInterval(popupInterval)
      clearInterval(systemMessageInterval)
    }
  }, [])

  // Cursor trail effect
  useEffect(() => {
    const trail: HTMLDivElement[] = []
    const trailLength = 10

    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div')
      dot.className = 'cursor-trail'
      document.body.appendChild(dot)
      trail.push(dot)
    }

    let mousePos = { x: 0, y: 0 }

    const updateMousePosition = (e: MouseEvent) => {
      mousePos = { x: e.clientX, y: e.clientY }
    }

    const animateTrail = () => {
      let x = mousePos.x
      let y = mousePos.y

      trail.forEach((dot, index) => {
        const nextDot = trail[index + 1]
        if (nextDot) {
          dot.style.left = `${nextDot.offsetLeft}px`
          dot.style.top = `${nextDot.offsetTop}px`
        } else {
          dot.style.left = `${x}px`
          dot.style.top = `${y}px`
        }
      })

      requestAnimationFrame(animateTrail)
    }

    document.addEventListener('mousemove', updateMousePosition)
    animateTrail()

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      trail.forEach(dot => dot.remove())
    }
  }, [])

  return {
    popups,
    systemMessages,
    createPopup,
    removePopup,
    createSystemMessage,
    playSound,
    isStartMenuOpen,
    setIsStartMenuOpen,
    activeWindows,
    setActiveWindows
  }
}