// components/About.tsx
export default function About() {
    return (
      <section className="min-h-screen relative px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Glitchy Title */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold glitch-text">
              SYSTEM://RAMEN_INFO.txt
            </h2>
          </div>
  
          {/* Content in Windows-style boxes */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[#32CD32] p-8 rounded-lg hover:bg-[#32CD32] hover:bg-opacity-10 transition-all">
              <h3 className="text-2xl font-bold mb-4">🍜 The Protocol</h3>
              <ul className="space-y-4 font-mono">
                <li>► Weekly dinner meetups</li>
                <li>► Secret locations revealed 24h before</li>
                <li>► Max 6 people per table</li>
                <li>► No boring networking allowed</li>
              </ul>
            </div>
  
            <div className="border border-[#32CD32] p-8 rounded-lg hover:bg-[#32CD32] hover:bg-opacity-10 transition-all">
              <h3 className="text-2xl font-bold mb-4">💾 The Stack</h3>
              <ul className="space-y-4 font-mono">
                <li>► Founders & Co-founders</li>
                <li>► Engineers & Designers</li>
                <li>► Product & Growth</li>
                <li>► VCs & Angels</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-4 font-mono text-sm text-[#32CD32]">
          Loading vibes.dll...
        </div>
      </section>
    )
  }