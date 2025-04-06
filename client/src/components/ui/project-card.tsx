import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  year: string;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  category, 
  categoryColor, 
  year 
}: ProjectCardProps) {
  return (
    <motion.div 
      className="group rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
      whileHover={{ y: -5 }}
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColor}`}>
            {category}
          </span>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors"
        >
          View Case Study <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
