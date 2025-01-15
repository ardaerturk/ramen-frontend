// components/PopupWindow.tsx
export default function PopupWindow({ title, content, type, style }) {
    return (
      <div className="
        fixed bg-[#ECE9D8] border-2 border-[#0054E3] w-80
        animate-bounce-subtle
      " style={style}>
        <div className="
          h-8 bg-gradient-to-r 
          ${type === 'warning' ? 'from-[#FFD700] to-[#FFA500]' : 'from-[#0054E3] to-[#2687FF]'}
          flex items-center justify-between px-2
        ">
          <span className="text-white">{title}</span>
          <button className="windows-button close">×</button>
        </div>
        <div className="p-4">
          <div className="flex items-start space-x-3">
            {type === 'warning' && (
              <img src="/warning.png" className="w-10 h-10" />
            )}
            <p>{content}</p>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button className="windows-button">OK</button>
            <button className="windows-button">Cancel</button>
          </div>
        </div>
      </div>
    )
  }