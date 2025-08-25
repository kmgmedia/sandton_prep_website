"use client";
import { Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ClassesSection() {
  const cards = [
    {
      title: "Sunshine Tots",
      age: "6-18 Months",
      desc: "Sensory play and early development",
      time: "6:00 AM - 7:00 PM",
      max: "Max 8 children",
      features: ["Sensory exploration", "Motor skills", "Social interaction"],
    },
    {
      title: "Creative Minds",
      age: "2-4 Years",
      desc: "Creative expression and foundational learning",
      time: "7:30 AM - 3:00 PM",
      max: "Max 15 children",
      features: ["Art & craft", "Music & movement", "Language development"],
    },
    {
      title: "Little Explorers",
      age: "5-10 Years",
      desc: "Academic preparation and character building",
      time: "7:30 AM - 4:00 PM",
      max: "Max 15 children",
      features: ["Academic readiness", "Problem solving", "Leadership skills"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="bg-slate-50 py-16 px-6 flex flex-col items-center">
      {/* Title */}
      <div className="flex flex-col text-center max-w-2xl mb-12">
        <h2
          className="font-sandyKids font-bold text-4xl md:text-5xl text-gray-900 mb-4 tracking-wider"
          style={{ WebkitTextStroke: 0 }}
        >
          Discover our <br />
          <span className="font-black">professional classes</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Age-appropriate programs designed to nurture every child’s unique
          potential
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-[#FFFBEA] rounded-2xl shadow-sm border p-8 flex flex-col items-center text-center"
          >
            <div className="absolute w-20 h-20 rounded-full bg-[var(--secondary-100)] flex items-center justify-center mb-6"></div>
            <div className=" relative w-16 h-16 rounded-full bg-[var(--primary-800)] flex items-center justify-center mb-6"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-yellow-600 font-semibold mb-4">{card.age}</p>
            <p className="text-gray-600 mb-4">{card.desc}</p>
            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-2">
              <Clock className="w-4 h-4" /> {card.time}
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-6">
              <Users className="w-4 h-4" /> {card.max}
            </div>
            <ul className="text-gray-700 text-sm space-y-2 mb-6">
              {card.features.map((feature, i) => (
                <li key={i}>⭐ {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg">
              Book Class
            </button>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16 mb-12">
        <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition">
          View All Classes <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
