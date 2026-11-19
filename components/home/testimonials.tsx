'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-padding overflow-hidden bg-[#F5F8F5]">
      <div className="container-width">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-[#E1F5EE] px-4 py-2 text-sm font-semibold text-primary">
            Patient Testimonials
          </span>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            What Our Patients{' '}
            <span className="text-gradient">Say About Us</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            The trust of our patients and their families inspires us to keep
            providing compassionate healthcare.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white p-7 shadow-[0_15px_60px_rgba(0,0,0,0.06)] md:p-12"
        >
          {/* Decorative quote icon */}
          <div className="absolute right-8 top-8 text-[#E1F5EE] md:right-12 md:top-10">
            <Quote size={90} strokeWidth={1.2} />
          </div>

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[220px_1fr]">
            {/* Patient image */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#E1F5EE] md:h-40 md:w-40">
                <Image
                  src="/images/testimonials/Patient.jpg"
                  alt="Patient testimonial from Engr. Ugochukwu C. Onyechi"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Engr. Ugochukwu C. Onyechi
              </h3>

              <p className="mt-1 text-sm text-gray-500">Patient testimonial</p>

              <div className="mt-3 flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial text */}
            <div>
              <Quote
                size={35}
                className="mb-5 text-primary"
                fill="currentColor"
              />

              <h4 className="mb-5 text-xl font-bold leading-snug text-gray-900 md:text-2xl">
                A Trusted Family Healthcare Institution
              </h4>

              <blockquote className="space-y-4 text-base leading-8 text-gray-600">
                <p>
                  Akulue Memorial Hospital in Nsukka holds a special place in
                  our hearts. For generations, it has been the trusted place
                  where my siblings and I were born, and where my children have
                  also come into this world.
                </p>

                <p>
                  One of the standout features of Akulue Memorial Hospital is
                  its impeccable cleanliness. From the moment you step in,
                  you&apos;re struck by the absence of the typical hospital
                  smell, which is a testament to their rigorous hygiene
                  standards.
                </p>

                <p>
                  Akulue Memorial Hospital is more than just a healthcare
                  facility for us; it&apos;s a cornerstone of our family&apos;s
                  health and well-being. Its exceptional cleanliness, charitable
                  practices, dedicated staff, and highly qualified doctors make
                  it a beacon of hope and trust in the community.
                </p>
              </blockquote>

              <div className="mt-7 h-1 w-20 rounded-full bg-[#3FF229]" />
            </div>
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center text-sm text-gray-500"
        >
          Your health and trust remain at the heart of everything we do.
        </motion.p>
      </div>
    </section>
  );
}
