import { motion } from "framer-motion";
import { StatsCard } from "@/components/ui/stats-card";
import { TechIcon } from "@/components/ui/tech-icon";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animation";
import { 
  SiReact, SiNodedotjs, SiPython, SiEthereum, 
  SiAmazon, SiMongodb, SiTensorflow, SiKubernetes 
} from "react-icons/si";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "20+", label: "Countries Served" },
  { value: "50+", label: "Expert Developers" },
  { value: "95%", label: "Client Satisfaction" }
];

const techStack = [
  { icon: <SiReact />, name: "React", color: "text-blue-500" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-600" },
  { icon: <SiPython />, name: "Python", color: "text-blue-600" },
  { icon: <SiEthereum />, name: "Ethereum", color: "text-purple-600" },
  { icon: <SiAmazon />, name: "AWS", color: "text-orange-500" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
  { icon: <SiTensorflow />, name: "TensorFlow", color: "text-orange-600" },
  { icon: <SiKubernetes />, name: "Kubernetes", color: "text-blue-500" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInLeft}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Business Through Technology</h2>
            <p className="text-lg text-gray-700 mb-6">
              Since our founding, TechFusion has been at the forefront of digital innovation, helping businesses leverage cutting-edge technologies to gain competitive advantages and create new opportunities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Hello OUR TEMA OUR TEAM Our team of senior developers, data scientists, and blockchain experts work collaboratively to deliver solutions that not only meet but exceed client expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                >
                  <StatsCard value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={fadeInRight}>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                alt="Our development team collaborating" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-0 w-64 h-64 bg-blue-500/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 z-0 w-32 h-32 bg-green-500/10 rounded-full"></div>
          </motion.div>
        </div>
        
        {/* Technology Stack */}
        <motion.div 
          className="mt-24"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-center mb-10">Our Technology Stack</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                custom={index}
              >
                <TechIcon 
                  icon={tech.icon} 
                  name={tech.name} 
                  color={tech.color} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
