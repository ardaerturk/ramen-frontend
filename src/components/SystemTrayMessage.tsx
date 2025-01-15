// components/SystemTrayMessage.tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SystemTrayMessageProps {
  id: string
  icon: string
  message: string
  timestamp: number
  onClose?: () => void
}

export default function SystemTrayMessage({
  id,
  icon,
  message,
  timestamp,
  onClose
}: SystemTrayMessageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Auto-hide message after 5 seconds unless hovered
  useEffect(() => {
    if (!isHovered) {
      const timeout = setTimeout(() => {
        setIsVisible(false)
        onClose?.()
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [isHovered, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative w-72"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="
            bg-gradient-to-b from-[#ECE9D8] to-[#D6D2C2]
            border border-[#0054E3] rounded-sm shadow-lg
            overflow-hidden
          ">
            {/* Header */}
            <div className="
              bg-gradient-to-r from-[#0054E3] to-[#2687FF]
              px-2 py-1 flex items-center justify-between
            ">
              <div className="flex items-center space-x-2">
                <img 
                  src="/msn-icon.png" 
                  alt="MSN" 
                  className="w-4 h-4"
                />
                <span className="text-white text-xs font-semibold">
                  System Message
                </span>
              </div>
              <button 
                onClick={() => {
                  setIsVisible(false)
                  onClose?.()
                }}
                className="text-white hover:bg-red-500 px-1 rounded"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-3 flex items-start space-x-3">
              <div className="
                w-10 h-10 flex-shrink-0
                bg-white rounded-full
                flex items-center justify-center
                border border-gray-300
              ">
                <span className="text-xl">{icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">{message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="
              bg-[#ECE9D8] border-t border-gray-300
              px-3 py-1 flex justify-between items-center
            ">
              <button 
                className="
                  text-xs text-blue-600 hover:underline
                  windows-button px-2 py-0.5
                "
              >
                Click to respond
              </button>
              <div className="flex space-x-1">
                <button className="windows-button px-2 py-0.5 text-xs">
                  Options
                </button>
                <button 
                  className="windows-button px-2 py-0.5 text-xs"
                  onClick={() => {
                    setIsVisible(false)
                    onClose?.()
                  }}
                >
                  Close
                </button>
              </div>
            </div>

            {/* Classic Windows XP shadow effect */}
            <div className="
              absolute inset-0 pointer-events-none
              shadow-[inset_0_0_2px_rgba(0,0,0,0.3)]
            "/>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Optional: Smaller variant for less important notifications
export function MiniSystemTrayMessage({
  icon,
  message,
  onClose
}: Omit<SystemTrayMessageProps, 'id' | 'timestamp'>) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="
        bg-black bg-opacity-80 text-white
        px-3 py-2 rounded-full
        flex items-center space-x-2
        text-sm
      "
    >
      <span>{icon}</span>
      <span>{message}</span>
      <button 
        onClick={onClose}
        className="hover:text-gray-300"
      >
        ×
      </button>
    </motion.div>
  )
}

// Usage example of different message types
export const SystemTrayMessageTypes = {
  MSN: {
    icon: "💬",
    prefix: "MSN Messenger"
  },
  SYSTEM: {
    icon: "🖥️",
    prefix: "System"
  },
  UPDATE: {
    icon: "🔄",
    prefix: "Windows Update"
  },
  SECURITY: {
    icon: "🛡️",
    prefix: "Security Alert"
  },
  NETWORK: {
    icon: "📶",
    prefix: "Network"
  },
  ERROR: {
    icon: "⚠️",
    prefix: "Error"
  }
}