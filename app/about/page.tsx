'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Users,
  Stethoscope,
  Target,
  Eye,
  Award,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description:
      'We believe every patient deserves kindness, dignity and personal attention throughout their healthcare journey.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Care',
    description:
      'We are committed to maintaining high standards of healthcare, patient safety and professional service.',
  },
  {
    icon: Users,
    title: 'Patient First',
    description:
      'We put patients and their well-being at the centre of the care and services we provide.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We continually seek opportunities to improve our services, facilities and healthcare experience.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#082D0C]">
        <Image
          src="/images/about/About.jpg"
          alt="Akulue Memorial Hospital"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D0C]/85 via-[#017211]/30 to-[#017211]/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-width relative z-10 py-24 text-center"
        >
          <span className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-[#3FF229] backdrop-blur-sm">
            Get to Know Us
          </span>

          <h1 className="text-4xl font-bold text-white md:text-6xl">
            About Akulue Memorial Hospital
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            Over five decades of healthcare service, compassion and commitment
            to the well-being of our community.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/80">
            <Link href="/" className="transition hover:text-[#3FF229]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#3FF229]">About Us</span>
          </div>
        </motion.div>
      </section>

      {/* Hospital Introduction */}
      <section className="section-padding bg-white">
        <div className="container-width grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[380px] overflow-hidden rounded-3xl md:h-[520px]">
              <Image
                src="/images/about/doctor-scaled.jpg"
                alt="Healthcare professional at Akulue Memorial Hospital"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-2xl bg-primary p-6 text-white shadow-xl md:-right-6 md:p-8">
              <p className="text-4xl font-bold text-[#3FF229]">50+</p>
              <p className="mt-1 text-sm font-medium">
                Years of Healthcare Service
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-8 lg:pt-0"
          >
            <span className="mb-4 inline-block rounded-full bg-[#E1F5EE] px-4 py-2 text-sm font-semibold text-primary">
              Who We Are
            </span>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              Healthcare Built on{' '}
              <span className="text-gradient">Trust and Compassion</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Welcome to Akulue Memorial Hospital, where modern medicine meets
                compassionate care. Founded over fifty years ago, our hospital
                has remained committed to providing quality healthcare services
                with a personal touch.
              </p>

              <p>
                Our history is rooted in a commitment to serving humanity. We
                honour the legacy of our founder, Professor Achufusi, whose
                selfless service helped shape the values that continue to guide
                the hospital.
              </p>

              <p>
                Today, our healthcare professionals continue this commitment by
                working to ensure that patients feel valued, respected and
                supported throughout their healthcare journey.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#F5F8F5] p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#E1F5EE] text-primary">
                <Heart size={28} />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Our Commitment</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Dedicated to Quality Patient Care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section-padding bg-[#F5F8F5]">
        <div className="container-width">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E1F5EE] px-4 py-2 text-sm font-semibold text-primary">
              Our Purpose
            </span>

            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              What Guides <span className="text-gradient">Our Work</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our commitment to healthcare is guided by a clear purpose: putting
              people first and continually working towards better patient
              experiences.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white p-8 shadow-sm md:p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E1F5EE] text-primary">
                <Target size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>

              <p className="mt-5 leading-8 text-gray-600">
                To provide quality, accessible and compassionate healthcare
                services through professional medical practice, modern
                facilities and a patient-centred approach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl bg-[#082D0C] p-8 text-white shadow-sm md:p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#3FF229]">
                <Eye size={32} />
              </div>

              <h3 className="text-2xl font-bold">Our Vision</h3>

              <p className="mt-5 leading-8 text-white/80">
                To continue growing as a trusted healthcare institution,
                recognised for quality patient care, professional excellence and
                positive contributions to the health of our community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E1F5EE] px-4 py-2 text-sm font-semibold text-primary">
              What Matters to Us
            </span>

            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Our Core <span className="text-gradient">Values</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              These principles shape how we serve our patients, work together
              and contribute to our community.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E1F5EE] text-primary">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#082D0C] py-20">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Stethoscope size={42} className="mx-auto mb-6 text-[#3FF229]" />

            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Your Health Matters to Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
              Whether you need a consultation, medical attention or more
              information about our services, our team is here to help.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#3FF229] px-8 py-4 font-bold text-[#082D0C] transition hover:bg-white"
            >
              Contact Us
              <ArrowRight size={19} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
