import { motion } from "framer-motion";
import { TeamCard } from "@/components/ui/team-card";
import { WorldMap } from "@/components/ui/world-map";
import { staggerContainer, fadeInUp } from "@/utils/animation";

const teamMembers = [
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

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our diverse team of experts working remotely from around the world to deliver excellence
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              custom={index}
            >
              <TeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            </motion.div>
          ))}
        </div>
        
        {/* World Map Visualization */}
        <motion.div 
          className="mt-20"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-center mb-6">Our Global Presence</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Our remote-first team spans the globe, bringing diverse perspectives and round-the-clock development capabilities
          </p>
          
          <div className="relative mx-auto max-w-5xl">
            <WorldMap />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
