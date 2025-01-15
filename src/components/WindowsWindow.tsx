// components/WindowsWindow.tsx
'use client'
import { useState, useRef } from 'react'
import Draggable from 'react-draggable'

interface WindowsWindowProps {
  title: string
  children: React.ReactNode
  initialPosition?: { x: number; y: number }
  width?: number
  height?: number
}

export default function WindowsWindow({ 
  title, 
  children, 
  initialPosition = { x: 100, y: 50 },
  width = 800,
  height = 600
}: WindowsWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const nodeRef = useRef(null)

  const windowStyle = isMaximized
    ? {
        width: '100vw',
        height: 'calc(100vh - 40px)', // Account for taskbar
        transform: 'none',
        top: 0,
        left: 0
      }
    : {
        width: `${width}px`,
        height: `${height}px`
      }

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={initialPosition}
      disabled={isMaximized}
      bounds="parent"
      handle=".window-handle"
    >
      <div
        ref={nodeRef}
        className={`
          absolute bg-[#ECE9D8] border-2 border-[#0054E3] shadow-lg
          ${isMinimized ? 'hidden' : ''}
        `}
        style={windowStyle}
      >
        {/* Windows XP Title Bar */}
        <div className="
          window-handle
          h-8 bg-gradient-to-r from-[#0054E3] to-[#2687FF] 
          flex items-center justify-between px-2 cursor-move
        ">
          <div className="flex items-center space-x-2">
            <img src="/window-icon.png" className="w-4 h-4" alt="" />
            <span className="text-white">{title}</span>
          </div>
          <div className="flex space-x-1">
            <button 
              onClick={() => setIsMinimized(true)}
              className="windows-button minimize hover:bg-gray-200"
            >
              _
            </button>
            <button 
              onClick={() => setIsMaximized(!isMaximized)}
              className="windows-button maximize hover:bg-gray-200"
            >
              □
            </button>
            <button className="windows-button close hover:bg-red-500 hover:text-white">
              ×
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="p-4 overflow-auto" style={{ height: 'calc(100% - 32px)' }}>
          {children}
        </div>
      </div>
    </Draggable>
  )
}