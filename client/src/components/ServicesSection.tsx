import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/service-card";
import { Brain, Link, Smartphone } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/utils/animation";

const services = [
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

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver innovative solutions across multiple domains with expertise in the most advanced technologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={index}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                bgColor={service.bgColor}
                features={service.features}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
