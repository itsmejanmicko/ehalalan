


export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative">
        {/* Pulsing circle */}
        <div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse"></div>
        
        {/* Rotating ring */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-300 rounded-full animate-spin border-t-transparent"></div>
        
        {/* Loading text */}
        <p className="mt-4 text-lg font-semibold text-gray-700 text-center">Loading...</p>
      </div>
    </div>
  )
}

