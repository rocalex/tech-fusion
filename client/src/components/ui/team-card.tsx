import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function TeamCard({ name, role, bio, image }: TeamCardProps) {
  return (
    <motion.div 
      className="group"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-72 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          <div className="flex space-x-3">
            {[Linkedin, Twitter, Mail].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-blue-500 font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </motion.div>
  );
}
