import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { staggerContainer, fadeInUp, fadeInRight } from "@/utils/animation";
import { 
  Facebook, Diamond, Globe, Lightbulb, 
  ShieldCheck, Award
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-[#3730a3]/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
          alt="Modern office workspace"
          className="object-cover w-full h-full"
        />
      </div>
      
      <motion.div 
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Transforming Ideas into{" "}
            <GradientText>Digital Excellence</GradientText>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-2xl"
            variants={fadeInUp}
          >
            World-class development team specializing in AI, blockchain technology, 
            and cutting-edge web & mobile applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex flex-wrap gap-8 items-center"
            variants={fadeInRight}
          >
            <p className="text-white font-medium">Trusted by innovative companies:</p>
            <div className="flex flex-wrap gap-8">
              <div className="h-10 px-4 bg-white/20 rounded-md flex items-center justify-center">
                <Facebook className="text-white" size={20} />
              </div>
              <div className="h-10 px-4 bg-white/20 rounded-md flex items-center justify-center">
                <Globe className="text-white" size={20} />
              </div>
              <div className="h-10 px-4 bg-white/20 rounded-md flex items-center justify-center">
                <Diamond className="text-white" size={20} />
              </div>
              <div className="h-10 px-4 bg-white/20 rounded-md flex items-center justify-center">
                <Lightbulb className="text-white" size={20} />
              </div>
              <div className="h-10 px-4 bg-white/20 rounded-md flex items-center justify-center">
                <ShieldCheck className="text-white" size={20} />
              </div>
              <div className="h-10 px-4 bg-white/20 rounded-md flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
