'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope } from 'lucide-react';

const services = [
  {
    title: 'Consultations',
    description:
      'Medical consultations to help patients discuss their health concerns and care needs.',
    image: '/images/services/doctors-office.gif',
  },
  {
    title: 'Surgeries',
    description: "Surgical care provided by the hospital's medical team.",
    image: '/images/services/surgery-room.gif',
  },
  {
    title: 'Lab Tests',
    description:
      'Laboratory testing to support medical investigations and diagnosis.',
    image: '/images/services/laboratory.gif',
  },
  {
    title: 'Scans',
    description: 'Medical imaging services to support patient assessment.',
    image: '/images/services/ct-scan.gif',
  },
  {
    title: 'X-rays',
    description: 'X-ray imaging as part of medical examination and diagnosis.',
    image: '/images/services/x-ray.gif',
  },
  {
    title: 'Hospitalization',
    description:
      'Hospital accommodation and care for patients who require admission.',
    image: '/images/services/hospitalization.gif',
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-[#F5F8F5]">
      <div className="container-width">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E1F5EE] px-4 py-2 text-sm font-bold text-primary">
            <Stethoscope size={17} />
            What We Offer
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Healthcare Services
            <span className="block text-primary">Designed Around You</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600">
            Explore our range of healthcare services, delivered with a
            commitment to quality patient care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-[#E1F5EE]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#082D0C]/40 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-extrabold text-gray-900 transition group-hover:text-primary">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Services */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#093600]"
          >
            Explore All Services
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
