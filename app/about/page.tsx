import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Mystro Security Services',
  description:
    'Learn about Mystro Security Services — our mission, licensed officers, executive protection team, and core values.',
};

const values = [
  {
    title: 'Integrity',
    description:
      'We operate with strict confidentiality and total transparency. Our clients trust us with their safety, reputations, and families because we earn it daily.',
  },
  {
    title: 'Tactical Excellence',
    description:
      'From rigorous background checks to active-threat simulation training, we maintain rigorous operational standards. Every officer represents the Mystro hallmark of prestige.',
  },
  {
    title: 'Absolute Reliability',
    description:
      "When we commit, we deliver without compromise. Our 24/7 operations and dispatch center ensures zero coverage gaps and instant incident escalation.",
  },
  {
    title: 'Community Vigilance',
    description:
      'We invest heavily in the South Florida communities we safeguard. Our officers understand local terrain, municipal jurisdictions, and neighborhood dynamics.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header — Less black overlay, clear photo visibility */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Background image — bodyguard tactical & executive team */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-[center_top_15%] bg-no-repeat"
          style={{ backgroundImage: "url('/bodyguard-team.jpg')" }}
        />
        {/* Lighter, translucent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/60" />

        <div className="relative z-10 section-container">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 backdrop-blur-md mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Florida Licensed Security Agency
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              About <span className="gradient-text">Mystro Security</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] max-w-xl">
              A premier security and bodyguard division of Mystro Services LLC — built on trust, elite tactical standards, and an uncompromising commitment to keeping lives and properties safe.
            </p>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* Story & Visual Showcase */}
      <section className="section-padding bg-gray-950">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Defending What Matters Most With Precision & Discretion
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                <p>
                  Mystro Security Services was established with a focused purpose: to elevate the standard of private security and executive bodyguard protection across South Florida.
                </p>
                <p>
                  Operating under <strong className="text-white">Mystro Services LLC</strong>, our protective division has expanded from select executive escort details into a full-scale physical defense agency protecting commercial towers, luxury estates, live entertainment venues, and high-profile individuals.
                </p>
                <p>
                  We believe true security begins with elite personnel. That is why our ranks are drawn from vetted law enforcement, military, and specialized protective services veterans — each trained in situational awareness, crisis de-escalation, and rapid threat neutralisation.
                </p>
              </div>

              {/* Stat badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {[
                  { number: '500+', label: 'Protected Clients' },
                  { number: '50+', label: 'Licensed Officers' },
                  { number: '24/7', label: 'Command Center' },
                  { number: '10+', label: 'Years Experience' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold gradient-text">{s.number}</div>
                    <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Bodyguard Showcase Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-gray-900/40">
                <div className="relative h-[440px] sm:h-[480px] w-full">
                  <Image
                    src="/bodyguard-hero.jpg"
                    alt="Mystro Executive Protection Bodyguard"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Subtle translucent gradient so photo details are clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                </div>

                {/* Overlaid Floating Verified Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-950/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 shadow-md">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    State Certified Agency
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500 text-black shadow-md">
                    Active Deployment
                  </span>
                </div>

                {/* Bottom Card Summary */}
                <div className="absolute bottom-6 left-6 right-6 bg-gray-950/80 backdrop-blur-md border border-gray-800/80 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-bold">
                      M
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Mystro Services LLC</h4>
                      <p className="text-gray-400 text-xs">Executive Protection & Physical Defense Division</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — Lighter overlay on bg-values.jpg */}
      <section className="relative section-padding border-y border-gray-800/60 overflow-hidden">
        {/* Background image — guarded facility */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-values.jpg')" }}
        />
        {/* Lighter translucent gradient — reduced blackness */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-950/50 to-gray-950/85" />

        <div className="relative z-10 section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Operational Code
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-gray-300 mt-2">
              These non-negotiable principles guide every security assessment, briefing, and operational deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-900/65 backdrop-blur-md border border-gray-800/80 hover:border-cyan-500/50 hover:bg-gray-900/80 transition-all duration-300 p-6 text-center shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4 text-cyan-400 font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Bodyguard Patrol background with clear visibility */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bodyguard-patrol.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/55 to-gray-950/80" />

        <div className="relative z-10 section-container text-center">
          <div className="max-w-3xl mx-auto rounded-3xl bg-gray-900/65 backdrop-blur-md border border-cyan-500/30 p-8 sm:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Work With Florida&apos;s Trusted Security Team
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              Whether you need elite close protection, armed security officers, or are seeking to join our licensed protection detail, get in touch with our leadership today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary shadow-lg shadow-cyan-500/20">
                Contact Operations
              </Link>
              <a
                href="tel:9545499414"
                className="btn-secondary bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800"
              >
                Direct: (954) 549-9414
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
