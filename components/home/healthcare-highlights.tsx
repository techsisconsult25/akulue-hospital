'use client';

import { motion } from 'framer-motion';
import {
  Microscope,
  UserRoundCheck,
  HeartHandshake,
  Clock,
} from 'lucide-react';

const highlights = [
  {
    icon: Microscope,
    title: 'Advanced Technologies',
    description:
      'Modern medical equipment and technology supporting quality healthcare and accurate diagnosis.',
  },
  {
    icon: UserRoundCheck,
    title: 'Skilled Professionals',
    description:
      'A dedicated team of healthcare professionals committed to your wellbeing.',
  },
  {
    icon: HeartHandshake,
    title: 'Holistic Services',
    description:
      'Comprehensive healthcare services delivered with compassion and personal attention.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Care',
    description:
      'Emergency healthcare support when you need medical attention.',
  },
];

export default function HealthcareHighlights() {
  return (
    <section className="relative z-20 bg-white py-16">
      <div className="container-width">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-100 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1F5EE] text-[#017211] transition duration-300 group-hover:bg-[#017211] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-[#017211]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 w-10 rounded-full bg-[#3FF229] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
