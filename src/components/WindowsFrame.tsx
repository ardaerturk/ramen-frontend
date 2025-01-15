interface WindowsFrameProps {
    children: React.ReactNode
    title: string
  }
  
  export default function WindowsFrame({ children, title }: WindowsFrameProps) {
    return (
      <div className="border-2 border-gray-300 rounded shadow-lg max-w-4xl mx-auto my-8">
        {/* Windows XP-style title bar */}
        <div className="bg-gradient-to-r from-[#0058AE] to-[#3A6EA5] px-3 py-1 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/window-icon.png" className="w-4 h-4" alt="" />
            <span className="text-white font-semibold">{title}</span>
          </div>
          <div className="flex space-x-1">
            <button className="windows-button minimize">_</button>
            <button className="windows-button maximize">□</button>
            <button className="windows-button close">×</button>
          </div>
        </div>
        
        {/* Content */}
        <div className="bg-white">
          {children}
        </div>
      </div>
    )
  }