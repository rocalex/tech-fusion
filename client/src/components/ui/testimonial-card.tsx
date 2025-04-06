import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export function TestimonialCard({ quote, name, title, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center mb-6">
        <div className="text-blue-500 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
      <blockquote className="mb-6">
        <p className="text-gray-700 italic">
          "{quote}"
        </p>
      </blockquote>
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
}
