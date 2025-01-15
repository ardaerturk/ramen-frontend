export default function TaskBar() {
    return (
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-[#245EDB] to-[#3A6EA5] border-t-2 border-blue-300">
        <div className="flex items-center h-full px-2">
          <button className="start-button flex items-center space-x-2 px-4 py-1 rounded-sm">
            <img src="/windows-logo.png" className="w-5 h-5" alt="Start" />
            <span className="text-white font-bold">Start</span>
          </button>
  
          <div className="flex-1 flex items-center space-x-2 px-2">
            <div className="task-item">
              <img src="/ramen-icon.png" className="w-4 h-4" />
              <span>RAMEN.exe</span>
            </div>
            <div className="task-item">
              <img src="/notepad-icon.png" className="w-4 h-4" />
              <span>about_ramen.txt</span>
            </div>
          </div>
  
          <div className="flex items-center space-x-2 text-white text-sm">
            <img src="/msn-icon.png" className="w-4 h-4" />
            <img src="/volume-icon.png" className="w-4 h-4" />
            <div className="px-2">4:20 PM</div>
          </div>
        </div>
      </div>
    )
  }