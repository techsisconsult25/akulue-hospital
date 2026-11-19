'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Images } from 'lucide-react';

const facilities = [
  {
    title: 'Consultation Rooms',
    image: '/images/gallery/AMH-CONSULT.jpg',
    size: 'large',
  },
  {
    title: 'Private Wards',
    image: '/images/gallery/AMH-PRIVATE-WARD1.jpg',
    size: 'normal',
  },
  {
    title: 'Labour Wards',
    image: '/images/gallery/AMH-LABOURWARD2.jpg',
    size: 'normal',
  },
  {
    title: 'Pharmacy',
    image: '/images/gallery/AMH-PHARM2.jpg',
    size: 'normal',
  },
  {
    title: 'Ultrasound & X-rays',
    image: '/images/gallery/ultrasound-scaled.jpg',
    size: 'normal',
  },
  {
    title: 'Laboratory',
    image: '/images/gallery/lab-scaled.png',
    size: 'large',
  },
  {
    title: 'Waiting Room',
    image: '/images/gallery/AMH-WAITING-ROOM1.jpg',
    size: 'normal',
  },
  {
    title: 'Maternity Wards',
    image: '/images/gallery/AMH-MART-WARD.jpg',
    size: 'normal',
  },
];

export default function FacilitiesGallery() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E1F5EE] px-4 py-2 text-sm font-semibold text-primary">
            <Images size={16} />
            Our Facilities
          </div>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            A Look Inside <span className="text-gradient">Our Hospital</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Explore some of our hospital facilities and spaces designed to
            support quality healthcare and patient comfort.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-2xl ${
                facility.size === 'large' ? 'sm:col-span-2' : 'sm:col-span-1'
              }`}
            >
              <div className="relative h-64 overflow-hidden md:h-72">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082D0C]/90 via-[#082D0C]/15 to-transparent" />

                {/* Facility title */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-end justify-between">
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {facility.title}
                    </h3>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3FF229] text-[#082D0C] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#093600] hover:shadow-lg"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
