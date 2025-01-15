// components/PillButton.tsx
export function PillButton({ color, children }: PillButtonProps) {
    const colors = {
      purple: 'bg-[#9B4F96]',
      lime: 'bg-[#32CD32]',
      yellow: 'bg-[#FFD700]',
      orange: 'bg-[#FF6B35]',
      gray: 'bg-[#808080]',
      blue: 'bg-[#0078D7]'
    }
  
    return (
      <div 
        className={`
          ${colors[color]}
          px-10 py-2.5
          rounded-[100px]
          inline-flex items-center justify-center
          text-2xl font-bold
          relative
          cursor-pointer
          border-2 border-black/10
          transition-all duration-150
          hover:scale-[1.02]
          active:scale-[0.98]
          group
        `}
        style={{
          boxShadow: '2px 2px 4px rgba(0,0,0,0.2), inset 1px 1px 2px rgba(255,255,255,0.3)'
        }}
      >
        {/* Inner highlight effect */}
        <div className="
          absolute inset-0 
          rounded-[100px]
          bg-gradient-to-b from-white/30 to-transparent
          opacity-50
          pointer-events-none
        "/>
  
        {/* Text */}
        <span className="
          relative
          text-black
          drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]
        ">
          {children}
        </span>
  
        {/* Hover glow effect */}
        <div className="
          absolute inset-0
          rounded-[100px]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
          bg-gradient-to-b from-white/40 to-transparent
        "/>
      </div>
    )
  }