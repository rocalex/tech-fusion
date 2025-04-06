import { motion } from "framer-motion";

interface StatsCardProps {
  value: string;
  label: string;
}

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <motion.span 
        className="text-4xl font-bold text-blue-500 block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}
