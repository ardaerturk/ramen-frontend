// components/RetroPopup.tsx
'use client'
import { motion } from 'framer-motion'
import { useGiphy } from '@/hooks/useGiphy'
import { useEffect, useState } from 'react'

interface RetroPopupProps {
  id: string
  title: string
  type: 'win' | 'ad' | 'warning' | 'download' | 'message' | 'error'
  position: { x: number, y: number }
  onClose: (id: string) => void
}

export function RetroPopup({ id, title, type, position, onClose }: RetroPopupProps) {
  const { gifs, loading } = useGiphy()
  const [gif, setGif] = useState<string | null>(null)

  useEffect(() => {
    if (!loading && gifs?.[type]) {
      setGif(gifs[type])
    }
  }, [loading, gifs, type])

  const getContent = () => {
    switch (type) {
      case 'win':
        return (
          <div className="space-y-2 text-center">
            <img
              src={gif || '/trophy.gif'}
              alt="Trophy"
              className="mx-auto w-20 h-20 object-cover"
            />
            <h3 className="text-xl font-bold text-blue-600 animate-pulse">
              You're the 1,000,000th visitor!
            </h3>
            <p>Claim your free ramen bowl NOW!</p>
            <div className="flex space-x-2 justify-center mt-4">
              <button className="windows-button">OK</button>
              <button className="windows-button">Cancel</button>
            </div>
          </div>
        )
      case 'ad':
        return (
          <div className="space-y-2 text-center">
            <img
              src={gif || '/ramen.gif'}
              alt="Ad"
              className="mx-auto w-24 h-24 object-cover"
            />
            <p className="text-red-500 font-bold animate-bounce">
              Local founders want to meet YOU! 🍜
            </p>
            <button className="windows-button w-full bg-green-500 text-white hover:bg-green-600">
              CLICK HERE NOW!!!
            </button>
          </div>
        )
      case 'warning':
        return (
          <div className="space-y-2 text-center">
            <img
              src={gif || '/warning.gif'}
              alt="Warning"
              className="mx-auto w-16 h-16 object-cover"
            />
            <h3 className="font-bold text-yellow-600">WARNING!</h3>
            <p className="text-sm">
              Your system might be at risk. <br /> Please update your system now!
            </p>
            <div className="flex space-x-2 justify-center mt-4">
              <button className="windows-button bg-yellow-400 hover:bg-yellow-500">Fix Now</button>
              <button className="windows-button">Ignore</button>
            </div>
          </div>
        )
      case 'download':
        return (
          <div className="space-y-2 text-center">
            <img
              src={gif || '/download.gif'}
              alt="Download"
              className="mx-auto w-16 h-16 object-cover"
            />
            <h3 className="font-bold">Downloading...</h3>
            <p className="text-sm">
              Installing new “Dancing Baby” screensaver... <br />
              Please wait.
            </p>
            <button className="windows-button mt-2">Cancel Download</button>
          </div>
        )
      case 'message':
        return (
          <div className="space-y-2 text-center">
            <img
              src={gif || '/msn.gif'}
              alt="MSN Messenger"
              className="mx-auto w-16 h-16 object-cover"
            />
            <h3 className="font-bold text-blue-500">MSN Messenger</h3>
            <p className="text-sm">You have a new message from Bill Gates!</p>
            <div className="flex space-x-2 justify-center mt-4">
              <button className="windows-button bg-blue-500 text-white hover:bg-blue-600">Read</button>
              <button className="windows-button">Ignore</button>
            </div>
          </div>
        )
      case 'error':
        return (
          <div className="space-y-2 text-center">
            <img
              src={gif || '/error.gif'}
              alt="Error"
              className="mx-auto w-16 h-16 object-cover"
            />
            <h3 className="font-bold text-red-600">CRITICAL ERROR!!!</h3>
            <p className="text-sm">
              Your system has encountered a serious issue. <br />
              Please reinstall Windows XP. <br />
              (Totally legit, we promise!)
            </p>
            <div className="flex space-x-2 justify-center mt-4">
              <button className="windows-button bg-red-500 text-white hover:bg-red-600">Fix</button>
              <button className="windows-button">Cancel</button>
            </div>
          </div>
        )
      default:
        return <div>No content available.</div>
    }
  }

  return (
    <motion.div
      className="absolute bg-white border border-[#0054E3] w-[300px] shadow-lg"
      style={{ left: position?.x, top: position?.y }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <div className="bg-gradient-to-r from-[#0054E3] to-[#2687FF] px-2 py-1.5 flex items-center justify-between">
        <span className="text-white text-sm font-semibold select-none">{title}</span>
        <button
          onClick={() => onClose(id)}
          className="text-white font-bold hover:bg-red-500 px-2 rounded"
        >
          ×
        </button>
      </div>
      <div className="p-4 text-sm">
        {getContent()}
      </div>
    </motion.div>
  )
}
