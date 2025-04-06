import { motion } from "framer-motion";

// Sample location data - would be replaced with real team locations
const locations = [
  { id: 1, x: "20%", y: "30%", size: "sm", label: "San Francisco" },
  { id: 2, x: "55%", y: "25%", size: "md", label: "London" },
  { id: 3, x: "40%", y: "50%", size: "sm", label: "New Delhi" },
  { id: 4, x: "80%", y: "40%", size: "md", label: "Singapore" },
  { id: 5, x: "30%", y: "70%", size: "sm", label: "São Paulo" },
  { id: 6, x: "85%", y: "25%", size: "sm", label: "Tokyo" },
];

const getSizeClass = (size: string) => {
  switch (size) {
    case "sm": return "w-3 h-3";
    case "md": return "w-4 h-4";
    case "lg": return "w-5 h-5";
    default: return "w-3 h-3";
  }
};

export function WorldMap() {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-sm">
      <div className="aspect-w-16 aspect-h-9 md:aspect-h-5 relative">
        <svg 
          className="w-full h-full"
          viewBox="0 0 1200 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified world map SVG */}
          <path 
            d="M60,270 Q140,180 200,230 Q240,260 280,230 Q320,200 360,240 Q400,280 440,260 Q480,240 520,280 Q560,320 600,300 Q640,280 680,320 Q720,360 760,340 Q800,320 840,360 Q880,400 920,380 Q960,360 1000,400 Q1040,440 1080,400 L1140,400 L1140,600 L60,600 Z" 
            fill="#e2e8f0" 
            strokeWidth="2" 
            stroke="#cbd5e1"
          />
          <path 
            d="M300,60 Q340,40 380,60 Q420,80 460,70 Q500,60 540,80 Q580,100 620,90 Q660,80 700,100 Q740,120 780,110 Q820,100 860,110 L900,120 L900,250 Q860,230 820,250 Q780,270 740,250 Q700,230 660,250 Q620,270 580,250 Q540,230 500,250 Q460,270 420,250 Q380,230 340,240 Q300,250 260,240 L260,120 Z" 
            fill="#e2e8f0" 
            strokeWidth="2" 
            stroke="#cbd5e1"
          />
        </svg>
        
        {/* Location dots */}
        {locations.map((location) => (
          <motion.div
            key={location.id}
            className="absolute flex flex-col items-center"
            style={{ left: location.x, top: location.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: location.id * 0.2 }}
          >
            <div className="relative mb-1">
              <div className={`rounded-full bg-blue-500 ${getSizeClass(location.size)}`}></div>
              <motion.div 
                className={`absolute top-0 left-0 rounded-full bg-blue-500 opacity-60 ${getSizeClass(location.size)}`}
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
            <span className="text-xs font-medium text-gray-700 bg-white/80 px-1 rounded">
              {location.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
