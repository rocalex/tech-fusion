import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, bgColor, features }: ServiceCardProps) {
  return (
    <motion.div 
      className="rounded-xl bg-white shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
      whileHover={{ y: -10 }}
    >
      <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-6", bgColor)}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-2 h-5 w-5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="#contact" 
        className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
}
