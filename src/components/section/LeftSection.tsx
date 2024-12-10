

export default function LeftSection() {
    const officers = [
      {
        role: "PRESIDENT",
        name: "MARK ANTHONY A. BIOC",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "VICE PRESIDENT",
        name: "LEE GREENE D. BAJO",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "SECRETARY",
        name: "JUSTIN ISABELO ORANDA",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "TREASURER",
        name: "RHUELANN MARIE MATILLOSA",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "AUDITOR",
        name: "ASIANNA CUAYZON",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "PUBLIC INFORMATION OFFICER",
        name: "MARK ANTON LIMOCON",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "PROTOCOL OFFICER",
        name: "EMMAN CLEMENA",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "GRADE 8 REPRESENTATIVE",
        name: "RECHELLE DAÑOULO",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "GRADE 9 REPRESENTATIVE",
        name: "JORHEM CANDIA",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        role: "GRADE 10 REPRESENTATIVE",
        name: "ALDWIN EBAL",
        image: "/placeholder.svg?height=100&width=100",
      },
    ]
  
    return (
      <div className="min-h-screen bg-cyan-400/10 p-6 relative overflow-hidden rounded-xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-8xl font-bold text-white transform -rotate-45"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              Hotdog
            </div>
          ))}
        </div>
        
        {/* Main Content */}
        <div className="relative max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-white rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">HIRAYA PARTYLIST</h1>
            <p className="text-blue-200 text-lg">"WHERE HOPE BECOMES REALITY"</p>
          </div>
  
          {/* Officers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-12">
            {officers.map((officer, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-3">
                  <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src={officer.image}
                      alt={officer.name}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-blue-200 font-semibold mb-1">{officer.role}</h3>
                <p className="text-white font-bold">{officer.name}</p>
              </div>
            ))}
          </div>
  
          {/* Footer */}
          <div className="text-center">
            <p className="text-white text-xl font-medium mb-4">
              Let&apos;s weave hope into every step together
            </p>
            <p className="text-yellow-300 text-2xl font-bold">
              VOTE STRAIGHT! VOTE WISELY!
            </p>
          </div>
  
          {/* Bottom Triangles */}
          <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
            <div className="flex justify-around">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-red-500 transform rotate-45 -mb-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  