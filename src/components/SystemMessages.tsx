// components/SystemMessage.tsx
import {motion} from 'framer-motion'

export function SystemMessage({ message, id, onClose }: any) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className="
        w-72 bg-gradient-to-b from-[#ECE9D8] to-[#D6D2C2]
        border border-[#0054E3] rounded-sm shadow-lg
      "
    >
      {/* Header */}
      <div className="
        bg-gradient-to-r from-[#0054E3] to-[#2687FF]
        px-2 py-1 flex items-center justify-between
      ">
        <div className="flex items-center space-x-2">
          <img src="/msn-icon.png" alt="MSN" className="w-4 h-4" />
          <span className="text-white text-xs font-semibold">
            Ramen Messenger
          </span>
        </div>
        <button 
          onClick={() => onClose(id)}
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
          <img src="/ramen-icon.png" alt="" className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm">{message}</p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Updated system messages
export const SYSTEM_MESSAGES = [
  "🍜 ramen_lover_42 has signed in",
  "💫 Your rizz level increased by 69%",
  "🌟 New bestie request from founder_grindset_24/7",
  "🎮 Loading that good good...",
  "📱 fr fr no cap just dropped",
  "💾 saving massive W to memories.dll",
  "🔮 rizz calculator loading...",
  "🎀 downloading fresh drip pack...",
  "🚀 chad.exe has entered the chat",
  "💅 main character energy detected",
  "🗿 absolutely bussin vibes loaded",
  "✨ no cap detector activated",
  "🌈 based department calling...",
  "🎭 CEO of friendship wants to connect",
  "🌟 sheeeesh levels rising"
] as const