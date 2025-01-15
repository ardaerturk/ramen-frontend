import WindowsFrame from './WindowsFrame'
import PopupWindow from './PopupWindow'
import { useState } from 'react'

export default function Summary() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="relative max-w-6xl mx-auto my-12">
      {/* Error Message Popup */}
      {showPopup && (
        <PopupWindow
          title="System Message"
          onClose={() => setShowPopup(false)}
          type="error"
          className="absolute top-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="p-4 flex items-center space-x-4">
            <img src="/error.png" className="w-12 h-12" alt="error" />
            <div>
              <p>Too many awesome people detected!</p>
              <p className="text-sm text-gray-600">Would you like to continue anyway?</p>
            </div>
          </div>
          <div className="flex justify-end space-x-2 p-4 bg-gray-100">
            <button className="windows-button">OK</button>
            <button className="windows-button">Cancel</button>
          </div>
        </PopupWindow>
      )}

      {/* Main Summary Window */}
      <WindowsFrame title="about_ramen.txt - Notepad">
        <div className="p-8 space-y-8 bg-white font-['MS_Sans_Serif']">
          <div className="border-2 border-dashed border-blue-400 p-6 bg-blue-50">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              RAMEN://System_Overview.exe
            </h2>
            <div className="space-y-4 text-sm">
              <p>▶ Connecting ambitious founders & tech people</p>
              <p>▶ Weekly dinner meetups at secret locations</p>
              <p>▶ No boring networking, just real connections</p>
              <p>▶ Members from YC, Techstars, Top Companies</p>
            </div>
          </div>

          {/* Stats Section in Windows 98 Style */}
          <div className="grid grid-cols-3 gap-4">
            <div className="stats-box">
              <h3 className="font-bold">RAM Usage</h3>
              <div className="h-4 bg-gray-200 rounded">
                <div className="h-full bg-green-500 rounded" style={{width: '75%'}}></div>
              </div>
              <p>750+ Members</p>
            </div>
            <div className="stats-box">
              <h3 className="font-bold">CPU Load</h3>
              <div className="h-4 bg-gray-200 rounded">
                <div className="h-full bg-blue-500 rounded" style={{width: '90%'}}></div>
              </div>
              <p>90% Fun Rate</p>
            </div>
            <div className="stats-box">
              <h3 className="font-bold">Network</h3>
              <div className="h-4 bg-gray-200 rounded">
                <div className="h-full bg-yellow-500 rounded" style={{width: '85%'}}></div>
              </div>
              <p>85% Match Rate</p>
            </div>
          </div>
        </div>
      </WindowsFrame>
    </div>
  )
}