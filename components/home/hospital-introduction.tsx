'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: HeartPulse,
    title: 'Compassionate Care',
    description: 'Every patient deserves attention, dignity and care.',
  },
  {
    icon: ShieldCheck,
    title: 'Patient Wellbeing',
    description: 'Your health and safety remain our priorities.',
  },
  {
    icon: Stethoscope,
    title: 'Dedicated Professionals',
    description: 'A committed team supporting your healthcare needs.',
  },
];

export default function HospitalIntroduction() {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-width grid items-center gap-14 lg:grid-cols-2">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] sm:min-h-[720px]">
            <Image
              src="/images/about/doctor1.jpg"
              alt="Doctor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Decorative Shape */}
          <div className="absolute -bottom-5 -left-5 -z-10 h-40 w-40 rounded-bl-[40px] rounded-tr-[40px] bg-[#3FF229]/30" />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 right-5 flex items-center gap-3 rounded-2xl bg-white p-5 shadow-xl sm:right-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E1F5EE] text-primary">
              <HeartPulse size={26} />
            </div>

            <div>
              <p className="font-extrabold text-primary">Patient First</p>
              <p className="text-xs text-gray-500">Dedicated to quality care</p>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-6 lg:pt-0"
        >
          {/* Section Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E1F5EE] px-4 py-2 text-sm font-bold text-primary">
            <span className="h-2 w-2 rounded-full bg-[#3FF229]" />
            About Our Hospital
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-[46px]">
            Opt for the City&apos;s Leading Hospital!
            <span className="mt-2 block text-primary">
              The Premier Choice for Your Healthcare Needs.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base leading-8 text-gray-600">
            At Akulue Memorial Hospital, we are committed to providing
            exceptional medical care with a compassionate touch. Our dedicated
            healthcare professionals and modern facilities support a safe and
            welcoming environment for your care.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1F5EE] text-primary">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Button */}
          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#093600]"
          >
            Discover More About Us
            <ArrowRight size={19} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
