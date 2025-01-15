import { RetroPopup } from "./RetroPopup";

// components/FloatingElements.tsx
export function FloatingElements() {
    return (
      <>
        {/* Retro Windows */}
        <div className="absolute top-1/4 left-1/4 transform -rotate-12">
          <RetroPopup
            title="ramen.gif"
            bgColor="bg-yellow-200"
            content={
              <div className="p-4">
                <img src="/ramen-gif.gif" alt="Ramen" className="w-64" />
              </div>
            }
          />
        </div>
  
        {/* Post-modern style elements */}
        <div className="absolute top-1/3 right-1/4">
          <div className="bg-red-500 p-8 text-black font-bold">
            HUNGRY FOUNDERS IN YOUR AREA
            <img src="/dollar-bill.png" className="mt-4" />
          </div>
        </div>
  
        {/* Floating images */}
        <div className="absolute bottom-1/4 left-1/3">
          <img src="/fish-watch.png" className="w-48" />
        </div>
      </>
    )
  }