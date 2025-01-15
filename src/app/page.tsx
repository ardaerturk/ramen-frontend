// pages/index.tsx
'use client'
import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import { PillButton } from '@/components/PillButton'
import { SystemMessage } from '@/components/SystemMessages'
import { RetroPopup } from '@/components/RetroPopup'

export default function Home() {
  const [popups, setPopups] = useState([
    { id: '1', title: 'CONGRATULATIONS!!!', type: 'win' as const },
    { id: '2', title: 'HOT SINGLES IN YOUR AREA', type: 'ad' as const },
    { id: '3', title: 'WARNING!!!', type: 'warning' as const }
  ])

  const popupTypes = [
    { title: 'CONGRATULATIONS!!!', type: 'win' },
    { title: 'HOT SINGLES IN YOUR AREA', type: 'ad' },
    { title: 'WARNING!!!', type: 'warning' },
    { title: 'DOWNLOADING...', type: 'download' },
    { title: 'MSN MESSENGER', type: 'message' },
    { title: 'CRITICAL ERROR!!!', type: 'error' },
  ]

  useEffect(() => {
    const createPopup = () => {
      const randomType = popupTypes[Math.floor(Math.random() * popupTypes.length)]
      const position = {
        x: Math.random() * (window.innerWidth - 300),
        y: Math.random() * (window.innerHeight - 200)
      }
      setPopups(prev => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          ...randomType,
          position
        }
      ])
    }

    for (let i = 0; i < 5; i++) {
      createPopup()
    }

    const interval = setInterval(() => {
      if (popups?.length < 15) {
        createPopup()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleClosePopup = (id: string) => {
    setPopups(prev => prev.filter(popup => popup.id !== id))
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=910')`,
        }}
      />
      <div className="popup inset-0 z-10 relative w-full h-full">
        {popups.map(popup => (
          <RetroPopup
            key={popup.id}
            {...popup}
            onClose={handleClosePopup}
          />
        ))}
      </div>
      <div className="relative z-20">
        <nav className="fixed top-4 w-full flex justify-between px-4">
          <PillButton color="purple">Instagram</PillButton>
          <PillButton color="lime">Home</PillButton>
          <PillButton color="yellow">Press</PillButton>
        </nav>
        <main className="pt-20">
          <Hero />
        </main>
        <nav className="fixed bottom-4 w-full flex justify-between px-4">
          <PillButton color="orange">Bio</PillButton>
          <PillButton color="gray">Contact</PillButton>
          <PillButton color="blue">Work</PillButton>
        </nav>
      </div>
      <div className="fixed bottom-20 right-4 z-30">
        <SystemMessage />
      </div>
    </div>
  )
}
