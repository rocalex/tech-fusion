import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechIconProps {
  icon: React.ReactNode;
  name: string;
  color: string;
}

export function TechIcon({ icon, name, color }: TechIconProps) {
  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mb-2">
        <div className={cn("text-2xl", color)}>
          {icon}
        </div>
      </div>
      <span className="text-sm font-medium text-gray-600">{name}</span>
    </motion.div>
  );
}
