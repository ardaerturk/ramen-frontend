// components/FloatingWindows.tsx
export default function FloatingWindows() {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Random floating windows */}
        <div className="absolute top-[20%] right-[10%] transform rotate-12">
          <Window 
            title="ramen.gif" 
            content={<img src="/ramen-gif.gif" alt="Ramen" />} 
          />
        </div>
        <div className="absolute bottom-[30%] left-[5%] transform -rotate-6">
          <Window 
            title="warning.exe" 
            content={
              <div className="p-4 bg-yellow-300 text-black">
                ⚠️ WARNING: Too many cool people detected
              </div>
            } 
          />
        </div>
        {/* Add more floating windows */}
      </div>
    )
  }
  
  function Window({ title, content }) {
    return (
      <div className="bg-gray-900 border border-[#32CD32] rounded-lg overflow-hidden w-64">
        <div className="bg-[#32CD32] px-3 py-1 flex items-center justify-between">
          <span className="text-black font-mono text-sm">{title}</span>
          <div className="flex space-x-1">
            <button className="w-3 h-3 rounded-full bg-red-500" />
            <button className="w-3 h-3 rounded-full bg-yellow-500" />
            <button className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
        <div className="p-2">
          {content}
        </div>
      </div>
    )
  }