import { 
  Brain, Link, Smartphone, MapPin, Mail, Phone, 
  Linkedin, Twitter, Github, Instagram 
} from "lucide-react";
import { 
  SiReact, SiNodedotjs, SiPython, SiEthereum, 
  SiAmazon, SiMongodb, SiTensorflow, SiKubernetes 
} from "react-icons/si";
import type { 
  Service, Project, TeamMember, Testimonial, 
  TechStack, Stats, ContactInfo, SocialLink
} from "../types";

export const services: Service[] = [
  {
    icon: <Brain className="text-blue-500" size={28} />,
    title: "AI Development",
    description: "Custom machine learning solutions, natural language processing, computer vision, and predictive analytics to transform your business.",
    bgColor: "bg-blue-100",
    features: [
      "Predictive Analytics",
      "Machine Learning Models",
      "Computer Vision"
    ]
  },
  {
    icon: <Link className="text-green-500" size={28} />,
    title: "Blockchain Solutions",
    description: "Secure, transparent, and decentralized solutions including smart contracts, DApps, and enterprise blockchain implementations.",
    bgColor: "bg-green-100",
    features: [
      "Smart Contracts",
      "DeFi Applications",
      "Token Development"
    ]
  },
  {
    icon: <Smartphone className="text-purple-600" size={28} />,
    title: "Web & Mobile Development",
    description: "Responsive web applications and intuitive mobile experiences built with modern frameworks and best practices.",
    bgColor: "bg-purple-100",
    features: [
      "Progressive Web Apps",
      "Cross-platform Mobile Apps",
      "Enterprise Solutions"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Decentralized Finance Platform",
    description: "A complete DeFi ecosystem with lending, staking, and liquidity pools features, built on Ethereum.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    category: "Blockchain",
    categoryColor: "bg-blue-100 text-blue-600",
    year: "2023"
  },
  {
    id: 2,
    title: "Predictive Analytics Solution",
    description: "AI-powered predictive analytics platform helping businesses forecast market trends and consumer behavior.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    category: "AI",
    categoryColor: "bg-green-100 text-green-600",
    year: "2023"
  },
  {
    id: 3,
    title: "Healthcare Mobile Application",
    description: "Cross-platform mobile application connecting patients with healthcare providers for telehealth consultations.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    category: "Mobile",
    categoryColor: "bg-purple-100 text-purple-600",
    year: "2022"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Chief Technology Officer",
    bio: "15+ years in AI and blockchain development",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead AI Engineer",
    bio: "Expert in machine learning and computer vision",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Blockchain Architect",
    bio: "Specialized in smart contracts and DeFi solutions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Emily Patel",
    role: "Mobile Development Lead",
    bio: "Expert in cross-platform app development",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "TechFusion delivered an AI solution that completely transformed our customer service operations. Their expertise and attention to detail exceeded our expectations.",
    name: "Robert Smith",
    title: "CTO, InnovateTech Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    quote: "The blockchain solution developed by TechFusion has revolutionized our supply chain management. Their team's technical knowledge and commitment to our success were impressive.",
    name: "Jessica Williams",
    title: "COO, Global Logistics Group",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    quote: "Working with TechFusion on our mobile app was a game-changer. Their team delivered on time and the final product exceeded our expectations in both design and functionality.",
    name: "Daniel Kim",
    title: "Founder, HealthTech Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export const techStack: TechStack[] = [
  { icon: <SiReact />, name: "React", color: "text-blue-500" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-600" },
  { icon: <SiPython />, name: "Python", color: "text-blue-600" },
  { icon: <SiEthereum />, name: "Ethereum", color: "text-purple-600" },
  { icon: <SiAmazon />, name: "AWS", color: "text-orange-500" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
  { icon: <SiTensorflow />, name: "TensorFlow", color: "text-orange-600" },
  { icon: <SiKubernetes />, name: "Kubernetes", color: "text-blue-500" }
];

export const stats: Stats[] = [
  { value: "100+", label: "Projects Delivered" },
  { value: "20+", label: "Countries Served" },
  { value: "50+", label: "Expert Developers" },
  { value: "95%", label: "Client Satisfaction" }
];

export const contactInfo: ContactInfo[] = [
  {
    type: "location",
    title: "Headquarters",
    value: "123 Tech Avenue, San Francisco, CA 94107, USA",
    icon: <MapPin className="text-blue-500" />
  },
  {
    type: "email",
    title: "Email",
    value: "contact@techfusion.com",
    icon: <Mail className="text-blue-500" />
  },
  {
    type: "phone",
    title: "Phone",
    value: "+1 (555) 123-4567",
    icon: <Phone className="text-blue-500" />
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "#",
    icon: <Linkedin size={20} />
  },
  {
    platform: "Twitter",
    url: "#",
    icon: <Twitter size={20} />
  },
  {
    platform: "GitHub",
    url: "#",
    icon: <Github size={20} />
  },
  {
    platform: "Instagram",
    url: "#",
    icon: <Instagram size={20} />
  }
];
