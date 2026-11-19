'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, ShieldCheck } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden bg-primary lg:min-h-[760px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/AMH-front-view.jpg"
          alt="Akulue Memorial Hospital"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#082D0C]/75 via-[#017211]/60 to-[#017211]/30" />
      </div>

      {/* Hero Content */}
      <div className="container-width relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Small Label */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
            <HeartPulse size={17} className="text-[#3FF229]" />
            Welcome to Akulue Memorial Hospital
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Your Health Is
            <br />
            Our <span className="text-[#3FF229]">Top Priority.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            Exceptional medical care, compassionate professionals, and modern
            healthcare facilities — committed to supporting your health and
            wellbeing at every stage of life.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-teal-700"
            >
              Explore Our Services
              <ArrowRight size={19} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-primary"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-14 flex flex-wrap gap-8 border-t border-white/20 pt-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#3FF229]">
                <ShieldCheck size={23} />
              </div>

              <div>
                <p className="font-bold text-white">Skilled Professionals</p>
                <p className="text-xs text-slate-300">Dedicated care team</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#3FF229]">
                <HeartPulse size={23} />
              </div>

              <div>
                <p className="font-bold text-white">Patient First</p>
                <p className="text-xs text-slate-300">
                  Compassionate healthcare
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute -bottom-24 -right-24 hidden h-72 w-72 rounded-full border-[35px] border-white/5 lg:block" />
    </section>
  );
}
