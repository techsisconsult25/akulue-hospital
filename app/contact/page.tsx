'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage('');

    const form = event.currentTarget;

    try {
      const response = await fetch('https://formspree.io/f/xbgoywqo', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        setErrorMessage(
          "Sorry, we couldn't send your message. Please try again.",
        );
      }
    } catch {
      setErrorMessage(
        'A connection error occurred. Please check your internet and try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#082D0C] py-28 text-white md:py-36">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#3FF229]/10 blur-3xl" />
        <Image
          src="/images/contact/contact.jpg"
          alt="Akulue Memorial Hospital"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082D0C]/85 via-[#017211]/60 to-[#017211]/50" />

        <div className="container-width relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#3FF229]">
            <MessageCircle size={16} />
            Get In Touch
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            We Are Here to{' '}
            <span className="text-[#3FF229]">Listen and Help.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Whether you have a question about our services or need information
            about visiting the hospital, we are happy to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + IMAGE */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Contact Information
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082D0C] md:text-4xl">
                Let&apos;s Start a Conversation.
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Reach out to Akulue Memorial Hospital for enquiries about our
                healthcare services, appointments and general information.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex gap-4 rounded-2xl border border-gray-100 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1F5EE] text-primary">
                    <MapPin size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#082D0C]">Our Location</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Nsukka, Enugu State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-gray-100 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1F5EE] text-primary">
                    <Phone size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#082D0C]">Phone</h3>
                    <p className="mt-1 text-sm text-gray-600">+2348137970942</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-gray-100 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1F5EE] text-primary">
                    <Mail size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#082D0C]">Email</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      akuluehospital@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[450px] overflow-hidden rounded-3xl bg-[#E1F5EE]">
              <Image
                src="/images/contact/doctor2.jpg"
                alt="Akulue Memorial Hospital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#082D0C]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#3FF229]">
                  Akulue Memorial Hospital
                </span>

                <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                  Dedicated to Quality Patient Care.
                </h3>

                <p className="mt-3 text-sm text-white/80">
                  Nsukka, Enugu State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="section-padding bg-[#F5F8F5]">
        <div className="container-width">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Send An Enquiry
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082D0C] md:text-5xl">
                How Can We Help You Today?
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-gray-600">
                Complete the form with your details and enquiry. Our online
                enquiry form will be connected to the hospital&apos;s email or
                preferred messaging service before the website goes live.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-primary">
                <CheckCircle2 size={20} />
                Your enquiry details are collected through the form.
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E1F5EE] text-primary">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#082D0C]">
                    Thank You!
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Your message has been sent successfully. Thank you for
                    contacting Akulue Memorial Hospital. Our team will get back
                    to you as soon as possible.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-7 font-semibold text-primary hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#082D0C]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#082D0C]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-gray-200 px-4 py-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#082D0C]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-gray-200 px-4 py-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-[#082D0C]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What is your enquiry about?"
                      className="w-full rounded-xl border border-gray-200 px-4 py-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-[#082D0C]"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 font-bold text-white transition hover:bg-[#082D0C]"
                  >
                    Submit Enquiry
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section-padding">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Find Us
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#082D0C] md:text-4xl">
              Visit Akulue Memorial Hospital
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              We are located in Nsukka, Enugu State, Nigeria. Use the map link
              below to find the hospital.
            </p>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Akulue+Memorial+Hospital+Nsukka"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#E1F5EE] px-7 py-4 font-bold text-primary transition hover:bg-primary hover:text-white"
            >
              Get Directions
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
