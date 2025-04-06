import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { staggerContainer, fadeInUp } from "@/utils/animation";

const testimonials = [
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

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear what our clients have to say about working with us
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              custom={index}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
