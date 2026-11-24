'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = (formData.get('phone') as string) || 'Not provided';
    const service = (formData.get('service') as string) || 'General Security Inquiry';
    const message = formData.get('message') as string;

    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      service,
      message,
      _subject: `New Security Quote Request: ${firstName} ${lastName}`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/mystrosecurity@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Unable to send at this moment. Please call us directly at (954) 549-9414 or email mystrosecurity@gmail.com');
      }
    } catch {
      setError('Connection error. Please call us directly at (954) 549-9414 or email mystrosecurity@gmail.com');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Header — Less black overlay, VIP bodyguard escort visible */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Background image — bodyguard escorting VIP */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-[center_top_20%] bg-no-repeat"
          style={{ backgroundImage: "url('/bodyguard-vip.jpg')" }}
        />
        {/* Translucent directional gradient — much less black, pictures clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/60" />

        <div className="relative z-10 section-container">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 backdrop-blur-md mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              24/7 Rapid Response & Security Assessments
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Contact <span className="gradient-text">Our Command Team</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] max-w-xl">
              Ready to secure your premises, personnel, or high-profile event? Connect with our security directors for a confidential assessment.
            </p>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* Contact section */}
      <section className="section-padding bg-gray-950">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-gray-900/60 backdrop-blur-md border border-gray-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  Confidential Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Request a Security Quote
                </h2>
                <p className="text-gray-400 text-sm mt-2">
                  All inquiries are protected by strict client confidentiality and non-disclosure standards.
                </p>
              </div>

              {submitted ? (
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Quote Request Received</h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to Mystro Security Services. A senior security director will review your specifications and contact you promptly within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1.5">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="form-input bg-gray-950/60 border-gray-800 focus:border-cyan-400 text-white"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="form-input bg-gray-950/60 border-gray-800 focus:border-cyan-400 text-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="form-input bg-gray-950/60 border-gray-800 focus:border-cyan-400 text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="form-input bg-gray-950/60 border-gray-800 focus:border-cyan-400 text-white"
                        placeholder="(954) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Primary Security Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="form-input bg-gray-950/60 border-gray-800 focus:border-cyan-400 text-white"
                      defaultValue=""
                    >
                      <option value="" disabled>Select service category…</option>
                      <option value="Executive & VIP Protection">Executive & VIP Protection (Bodyguard)</option>
                      <option value="Armed Security Guards">Armed Security Guards</option>
                      <option value="Unarmed Security Officers">Unarmed Security Officers</option>
                      <option value="Mobile Patrol Services">Mobile Patrol & Perimeter Response</option>
                      <option value="Event Security">Event & Red Carpet Security</option>
                      <option value="Surveillance & Monitoring">Surveillance & Remote Monitoring</option>
                      <option value="Estate & Residential Security">Estate & Residential Security</option>
                      <option value="Custom Security Detail">Other / Custom Security Detail</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Requirements & Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="form-textarea bg-gray-950/60 border-gray-800 focus:border-cyan-400 text-white"
                      placeholder="Please specify location (city/county), timeline, property type, armed/unarmed preference, or special circumstances…"
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-cyan-500/20 py-3.5"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting Request...
                      </>
                    ) : (
                      <>
                        Send Security Request
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Bodyguard Photo Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Bodyguard Team Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-gray-900/40">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src="/bodyguard-team.jpg"
                    alt="Mystro Security Team"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-950/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300">
                    24/7 Operations Desk
                  </span>
                </div>
                <div className="p-6 bg-gray-900/80 backdrop-blur-md">
                  <h3 className="text-white font-bold text-lg mb-1">Direct Field Operations</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Licensed tactical officers and executive bodyguards ready for emergency deployment and planned coverage throughout South Florida.
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Direct Phone</h4>
                    <a href="tel:9545499414" className="text-cyan-400 font-bold text-lg hover:underline">
                      (954) 549-9414
                    </a>
                    <p className="text-gray-400 text-xs mt-1">Available 24/7 for urgent protection dispatch</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Direct Email</h4>
                    <a href="mailto:mystrosecurity@gmail.com" className="text-cyan-400 font-medium hover:underline text-sm break-all">
                      mystrosecurity@gmail.com
                    </a>
                    <p className="text-gray-400 text-xs mt-1">Written proposals & RFP responses within 24h</p>
                  </div>
                </div>

                {/* Free Assessment Note */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-gray-900/80 border border-cyan-500/20">
                  <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Complimentary Threat Assessment
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Not sure what level of security coverage fits your facility or itinerary? We conduct comprehensive on-site threat assessments across South Florida with no obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
