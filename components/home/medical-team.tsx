'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mrs Ebele Tai-Nwankwo',
    role: 'Hospital Administrator',
    image: '/images/team/Admin.jpg',
  },
  {
    name: 'Dr Asadu Peter',
    role: 'Part-time Principal Medical Officer',
    image: '/images/team/Dr-Asadu.jpg',
  },
  {
    name: 'Dr Chukwuka',
    role: 'Senior Resident Doctor',
    image: '/images/team/Dr-Chuks.png',
  },
  {
    name: 'Dr. Nwabunwanne Chukwudi',
    role: 'Resident Doctor',
    image: '/images/team/Dr-Nwanne.jpeg',
  },
  {
    name: 'Mrs. Ugwubujo Georgina',
    role: 'Matron',
    image: '/images/team/Head-Nurse.png',
  },
  {
    name: 'Mrs. Ugwu Anastasia',
    role: 'Assistant Head Nurse',
    image: '/images/team/Matron-2.png',
  },
  {
    name: 'Mrs. Ugwoke Gloria',
    role: 'Pharmacist',
    image: '/images/team/Pharm-Gloria.png',
  },
  {
    name: 'Mrs. Ezeja Jane',
    role: 'Senior Radiographer',
    image: '/images/team/Radiographer.png',
  },
  {
    name: 'Mr. Paul Udoba',
    role: 'Laboratory Scientist',
    image: '/images/team/Lab_Scientist.png',
  },
];

export default function MedicalTeam() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E1F5EE] px-4 py-2 text-sm font-semibold text-primary">
            <Users size={16} />
            Our Medical Team
          </div>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Meet the People Behind{' '}
            <span className="text-gradient">Your Care</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Our team brings together healthcare professionals committed to
            serving patients with compassion, professionalism and dedication.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Staff photograph */}
              <div className="relative h-72 overflow-hidden bg-[#E1F5EE]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#082D0C]/40 to-transparent" />
              </div>

              {/* Staff details */}
              <div className="p-6">
                <div className="mb-3 h-1 w-12 rounded-full bg-[#3FF229] transition-all duration-300 group-hover:w-20" />

                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-primary">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-gray-600">
            Have a question about our healthcare services?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#093600] hover:shadow-lg"
          >
            Contact Our Hospital
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
