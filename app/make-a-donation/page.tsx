'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Heart,
  HandHeart,
  Stethoscope,
  Users,
  ArrowRight,
  ShieldCheck,
  Copy,
  Check,
} from 'lucide-react';

const donationWays = [
  {
    icon: Stethoscope,
    title: 'Support Patient Care',
    description:
      "Help support the hospital's efforts to provide compassionate care and essential medical attention to patients.",
  },
  {
    icon: HandHeart,
    title: 'Support Medical Services',
    description:
      "Contribute towards the hospital's healthcare services, equipment and facilities.",
  },
  {
    icon: Users,
    title: 'Help the Community',
    description:
      'Support initiatives that make quality healthcare more accessible to people in the community.',
  },
];

type CopyableDetailProps = {
  label: string;
  value: string;
  copyKey: string;
  copiedKey: string;
  onCopy: (value: string, key: string) => void;
};

function CopyableDetail({
  label,
  value,
  copyKey,
  copiedKey,
  onCopy,
}: CopyableDetailProps) {
  const isCopied = copiedKey === copyKey;

  return (
    <div className="flex items-center justify-between gap-3 border-b border-gray-100 py-4 last:border-0">
      <div className="min-w-0">
        <p className="mb-1 text-sm text-gray-500">{label}</p>
        <p className="break-all font-semibold text-[#082D0C]">{value}</p>
      </div>

      <button
        type="button"
        onClick={() => onCopy(value, copyKey)}
        className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
          isCopied
            ? 'bg-[#E1F5EE] text-primary'
            : 'bg-gray-100 text-gray-600 hover:bg-[#E1F5EE] hover:text-primary'
        }`}
        aria-label={`Copy ${label}`}
      >
        {isCopied ? <Check size={16} /> : <Copy size={16} />}
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}

export default function DonationPage() {
  const [copiedKey, setCopiedKey] = useState('');
  const [copyError, setCopyError] = useState('');

  async function copyToClipboard(value: string, key: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setCopyError('');
    } catch {
      setCopyError(
        'Unable to copy automatically. Please select and copy the account detail.',
      );
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#082D0C] py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/donation/donation.jpg"
            alt="Akulue Memorial Hospital"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#017211]/40 to-[#017211]/10" />

        <div className="container-width relative z-10">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#3FF229]">
              <Heart size={16} />
              Make a Difference
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Your Generosity Can Make a{' '}
              <span className="text-[#3FF229]">Difference.</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/80">
              Every act of kindness helps strengthen healthcare delivery and
              supports the hospital&apos;s commitment to quality patient care.
            </p>

            <Link
              href="#donation-details"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#3FF229] px-7 py-4 font-semibold text-[#082D0C] transition hover:bg-white"
            >
              Support Our Hospital
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-width grid items-center gap-14 md:grid-cols-2">
          <div className="relative min-h-[350px] overflow-hidden rounded-3xl md:min-h-[480px]">
            <Image
              src="/images/donation/surgery.jpg"
              alt="Akulue Memorial Hospital"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Give With Purpose
            </span>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#082D0C] md:text-4xl">
              Together, We Can Support Better Healthcare.
            </h2>

            <p className="mb-5 leading-8 text-gray-600">
              At Akulue Memorial Hospital, we believe that quality healthcare is
              strengthened by compassion, commitment and community support.
            </p>

            <p className="mb-5 leading-8 text-gray-600">
              Donations and acts of generosity can help support our ongoing
              efforts to improve patient care, strengthen medical services and
              maintain a welcoming healthcare environment.
            </p>

            <p className="leading-8 text-gray-600">
              Whether you are an individual, organisation or well-wisher, your
              support is appreciated.
            </p>
          </div>
        </div>
      </section>

      {/* Donation purposes */}
      <section className="section-padding bg-[#F5F8F5]">
        <div className="container-width">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Your Support Matters
            </span>

            <h2 className="mb-5 text-3xl font-bold text-[#082D0C] md:text-4xl">
              Ways Your Donation Can Help
            </h2>

            <p className="leading-7 text-gray-600">
              Your contribution can support different areas of the
              hospital&apos;s work and its commitment to patient care.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {donationWays.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E1F5EE] text-primary">
                    <Icon size={30} />
                  </div>

                  <span className="mb-3 block text-sm font-semibold text-secondary">
                    0{index + 1}
                  </span>

                  <h3 className="mb-4 text-xl font-bold text-[#082D0C]">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bank Account Details */}
      <section
        id="donation-details"
        className="section-padding scroll-mt-24 bg-white"
      >
        <div className="container-width">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Make Your Contribution
            </span>

            <h2 className="mb-5 text-3xl font-bold text-[#082D0C] md:text-4xl">
              Bank Account Details
            </h2>

            <p className="leading-7 text-gray-600">
              You can support Akulue Memorial Hospital through either of the
              bank accounts below. Choose the account that matches your
              preferred currency.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Nigerian Account */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="bg-[#082D0C] p-7 text-white">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3FF229]/15 text-[#3FF229]">
                  <HandHeart size={28} />
                </div>

                <span className="text-sm font-semibold uppercase tracking-wider text-[#3FF229]">
                  Nigerian Donations
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  Nigerian Naira (NGN)
                </h3>

                <p className="mt-2 text-sm text-white/65">
                  For donations within Nigeria.
                </p>
              </div>

              <div className="p-7">
                <CopyableDetail
                  label="Bank Name"
                  value="Fidelity Bank Plc"
                  copyKey="ng-bank"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />

                <CopyableDetail
                  label="Account Name"
                  value="Akulue Memorial Hospital"
                  copyKey="ng-name"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />

                <CopyableDetail
                  label="Account Number"
                  value="411218400"
                  copyKey="ng-account"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />

                <div className="mt-6 rounded-xl bg-[#E1F5EE] p-4 text-sm leading-6 text-[#082D0C]">
                  Please ensure the account name is displayed correctly before
                  confirming your transfer.
                </div>
              </div>
            </div>

            {/* International / USD Account */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="bg-[#017211] p-7 text-white">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-[#3FF229]">
                  <Heart size={28} />
                </div>

                <span className="text-sm font-semibold uppercase tracking-wider text-[#3FF229]">
                  International Donations
                </span>

                <h3 className="mt-2 text-2xl font-bold">US Dollar (USD)</h3>

                <p className="mt-2 text-sm text-white/75">
                  For international bank transfers.
                </p>
              </div>

              <div className="p-7">
                <CopyableDetail
                  label="Bank Name"
                  value="Fidelity Bank Plc"
                  copyKey="usd-bank"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />

                <CopyableDetail
                  label="Account Name"
                  value="Akulue Memorial Hospital"
                  copyKey="usd-name"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />

                <CopyableDetail
                  label="Account Number"
                  value="5250573473"
                  copyKey="usd-account"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />

                <CopyableDetail
                  label="SWIFT Code"
                  value="FIDTNGLA"
                  copyKey="usd-swift"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />

                <CopyableDetail
                  label="Sort Code"
                  value="070251850"
                  copyKey="usd-sort"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />

                <div className="mt-6 rounded-xl bg-[#E1F5EE] p-4 text-sm leading-6 text-[#082D0C]">
                  Please confirm international transfer charges and currency
                  requirements with your bank before sending.
                </div>
              </div>
            </div>
          </div>

          {copyError && (
            <p
              role="alert"
              className="mx-auto mt-6 max-w-2xl text-center text-sm text-red-600"
            >
              {copyError}
            </p>
          )}

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#E1F5EE] bg-[#F5F8F5] p-6 text-center">
            <ShieldCheck size={28} className="mx-auto mb-3 text-primary" />

            <h3 className="mb-2 font-bold text-[#082D0C]">
              Important Donation Information
            </h3>

            <p className="text-sm leading-7 text-gray-600">
              Before making a transfer, please verify the account details and
              beneficiary name with Akulue Memorial Hospital. Keep your
              transaction receipt for your records.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Contact the Hospital
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing message */}
      <section className="bg-[#E1F5EE] py-16">
        <div className="container-width text-center">
          <Heart
            size={34}
            className="mx-auto mb-5 fill-[#017211] text-[#017211]"
          />

          <h2 className="mb-4 text-2xl font-bold text-[#082D0C] md:text-3xl">
            Thank You for Your Kindness.
          </h2>

          <p className="mx-auto max-w-2xl leading-7 text-gray-600">
            Your willingness to support our mission means a great deal.
            Together, we can continue working towards better healthcare and
            quality patient care.
          </p>
        </div>
      </section>
    </main>
  );
}
