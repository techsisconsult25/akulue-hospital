import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Microscope,
  Scan,
  Hospital,
  Activity,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Consultations',
    description:
      'Our GP consultants and specialists are available to understand your health needs, assess your condition and guide you towards appropriate care.',
    image: '/images/services/doctors-office.gif',
    icon: Stethoscope,
  },
  {
    number: '02',
    title: 'Surgeries',
    description:
      'Our surgical services are supported by medical professionals committed to patient care, safety and attention throughout the treatment process.',
    image: '/images/services/surgery-room.gif',
    icon: HeartPulse,
  },
  {
    number: '03',
    title: 'Laboratory Tests',
    description:
      'Our laboratory provides accurate and comprehensive testing to support medical assessments and help inform clinical decisions.',
    image: '/images/services/laboratory.gif',
    icon: Microscope,
  },
  {
    number: '04',
    title: 'Scans',
    description:
      'Our imaging services provide detailed scans to support the assessment and diagnosis of different health conditions.',
    image: '/images/services/ct-scan.gif',
    icon: Scan,
  },
  {
    number: '05',
    title: 'X-rays',
    description:
      'Our X-ray services provide medical imaging to help healthcare professionals assess injuries and other conditions.',
    image: '/images/services/x-ray.gif',
    icon: Activity,
  },
  {
    number: '06',
    title: 'Hospitalization',
    description:
      'We provide comprehensive and compassionate care throughout your hospital stay, with attention to your comfort and wellbeing.',
    image: '/images/services/hospitalization.gif',
    icon: Hospital,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#082D0C] py-28 text-white md:py-36">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#3FF229]/10 blur-3xl" />
        <Image
          src="/images/services/services.jpg"
          alt="Akulue Memorial Hospital"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082D0C]/85 via-[#017211]/60 to-[#017211]/50" />

        <div className="container-width relative z-10">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#3FF229]">
            <HeartPulse size={16} />
            Healthcare Services
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Healthcare Services Designed Around{' '}
            <span className="text-[#3FF229]">Your Wellbeing.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            From consultations and diagnostic services to surgery and
            hospitalization, we are committed to providing compassionate
            healthcare for our community.
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#3FF229] px-7 py-4 font-semibold text-[#082D0C] transition hover:bg-white"
            >
              Contact Our Hospital
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding">
        <div className="container-width">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              What We Offer
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082D0C] md:text-5xl">
              Comprehensive Care,{' '}
              <span className="text-primary">One Hospital.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Akulue Memorial Hospital, our services bring together medical
              consultations, diagnostic support, treatment and inpatient care.
              Our goal is to make essential healthcare services accessible in a
              supportive environment.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#E1F5EE] p-8">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      unoptimized
                      className="object-contain p-8 transition duration-500 group-hover:scale-110"
                    />

                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E1F5EE] text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="text-xl font-bold text-[#082D0C]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3"
                    >
                      Make an Enquiry
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#E1F5EE]">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-3xl bg-[#017211] px-7 py-14 text-center text-white md:px-16 md:py-20">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[#3FF229]/10" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3FF229]">
                We Are Here For You
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                Your Health Deserves Attention.
              </h2>

              <p className="mt-5 leading-8 text-white/80">
                Have questions about our services? Get in touch with Akulue
                Memorial Hospital. Our team will be happy to assist with your
                enquiry.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-[#017211] transition hover:bg-[#3FF229] hover:text-[#082D0C]"
              >
                Get In Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
