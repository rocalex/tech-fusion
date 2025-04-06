import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/utils/animation";

const projects = [
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

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions that have transformed businesses across industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              custom={index}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                categoryColor={project.categoryColor}
                year={project.year}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={fadeInUp}
        >
          <Button
            variant="outline"
            className="group"
            asChild
          >
            <a href="#contact">
              View All Projects 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
