// components/Hero.tsx
export default function Hero() {
    return (
      <div className="relative max-w-3xl mx-auto bg-white rounded-t-sm overflow-hidden border border-[#0054E3]">
        {/* Window Title Bar */}
        <div className="
          bg-gradient-to-r from-[#0054E3] via-[#0086F0] to-[#0054E3]
          px-3 py-1.5 flex items-center justify-between 
        ">
          <div className="flex items-center space-x-2">
            <img src="/ramen-icon.png" className="w-4 h-4" alt="" />
            <span className="text-white text-sm font-semibold">RAMEN.exe</span>
          </div>
          <div className="flex space-x-1">
            <button className="w-4 h-4 flex items-center justify-center bg-[#ECE9D8] rounded-sm text-black text-xs hover:bg-gray-300">_</button>
            <button className="w-4 h-4 flex items-center justify-center bg-[#ECE9D8] rounded-sm text-black text-xs hover:bg-gray-300">□</button>
            <button className="w-4 h-4 flex items-center justify-center bg-[#ECE9D8] rounded-sm text-black text-xs hover:bg-red-500 hover:text-white">×</button>
          </div>
        </div>
  
        {/* Content */}
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="block">Ditch the Lonely</span>
              <span className="block text-[#32CD32]">Hustle.</span>
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold">
              <span className="block">Find Your</span>
              <span className="block text-[#32CD32]">Ramen Besties.</span>
            </h2>
          </div>
  
          <button className="
            bg-[#32CD32] hover:bg-[#2AB02A]
            text-black font-bold
            px-8 py-3
            rounded-full
            border-2 border-black/10
            transform hover:scale-105 active:scale-95
            transition-all duration-150
            shadow-[2px_2px_4px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.3)]
          ">
            Find My People
          </button>
  
          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-4">people from</p>
            <div className="flex space-x-6">
              {/* Your logos here */}
            </div>
          </div>
        </div>
      </div>
    )
  }