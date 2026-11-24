import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Mystro Security Services',
  description:
    'Explore the full range of professional security and executive protection services offered by Mystro Security Services.',
};

const services = [
  {
    title: 'Executive & VIP Protection',
    description:
      'Discreet, highly trained close-protection bodyguards for executives, dignitaries, celebrities, and high-net-worth individuals. We provide proactive threat mitigation, advance route planning, secure transport, and low-profile escorting.',
    features: [
      'Dedicated close protection bodyguard details',
      'Advance reconnaissance & secure transit',
      'Discreet corporate & celebrity escorting',
      'Threat assessment & intelligence briefings',
    ],
    badge: 'Elite Detail',
    photo: '/bodyguard-vip.jpg',
  },
  {
    title: 'Armed Security Officers',
    description:
      'State-licensed armed officers for high-value assets, luxury retail, residential estates, and sensitive commercial facilities. Every armed bodyguard undergoes rigorous firearms qualification, tactical de-escalation, and situational awareness training.',
    features: [
      'Florida Class G licensed armed officers',
      'Continuous tactical & tactical shoot proficiency',
      'High-risk environment & asset defense',
      'Immediate incident logging & live GPS dispatch',
    ],
    badge: 'Licensed Armed',
    photo: '/bodyguard-team.jpg',
  },
  {
    title: 'Mobile Patrol & Rapid Response',
    description:
      'High-visibility scheduled and randomized patrol sweeps across commercial complexes, residential gated communities, and industrial hubs. Our marked patrol units provide immediate alarm response and physical perimeter checks.',
    features: [
      'Marked modern security patrol fleet',
      'GPS-tracked timestamped patrol logs',
      'Lock-up, unlock & perimeter inspections',
      'Immediate alarm response & dispatch',
    ],
    badge: 'Active Fleet',
    photo: '/bodyguard-patrol.jpg',
  },
  {
    title: 'Unarmed Security Guards',
    description:
      'Professional uniformed security presence for corporate headquarters, luxury condominiums, medical campuses, and financial institutions. Our officers provide vigilant access control, guest screening, and conflict resolution.',
    features: [
      'Impeccably uniformed concierge presence',
      'Strict visitor management & badge verification',
      'Proactive conflict de-escalation',
      '24/7 lobby & premises observation',
    ],
    badge: 'Concierge Grade',
    photo: '/bodyguard-hero.jpg',
  },
  {
    title: 'Event & Red Carpet Security',
    description:
      'Comprehensive security operations for galas, product launches, private estate parties, and high-attendance venues. From perimeter control and VIP holding rooms to backstage security and emergency evacuation planning.',
    features: [
      'VIP access control & guest screening',
      'Crowd dynamic management & bag checks',
      'Discrete emergency response teams',
      'Coordination with local law enforcement',
    ],
    badge: 'Special Events',
    photo: '/bodyguard-vip.jpg',
  },
  {
    title: 'Surveillance & Remote Monitoring',
    description:
      "Integrated electronic counter-measures, high-definition perimeter surveillance, and 24/7 video analytics. Designed to work in unison with on-site officers for complete situational awareness and early threat detection.",
    features: [
      '4K thermal & optical perimeter cameras',
      '24/7 central monitoring station integration',
      'Real-time intrusion detection alerts',
      'Audit-ready archived video logs',
    ],
    badge: 'Tech Integration',
    photo: '/bodyguard-patrol.jpg',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header — Less black overlay, crisp bodyguard patrol picture visible */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Background image — bodyguard patrol officer & vehicle */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-[center_top_20%] bg-no-repeat"
          style={{ backgroundImage: "url('/bodyguard-patrol.jpg')" }}
        />
        {/* Translucent directional gradient — lets the photo be clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/60" />

        <div className="relative z-10 section-container">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 backdrop-blur-md mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Armed, Unarmed & Executive Security
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Comprehensive <span className="gradient-text">Protection Services</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] max-w-xl">
              From close personal protection details and armed defense to mobile patrols, Mystro Security Services deploys elite personnel tailored to your exact risk profile.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary shadow-lg shadow-cyan-500/20">
                Request Security Assessment
              </Link>
              <a
                href="tel:9545499414"
                className="btn-secondary backdrop-blur-md bg-gray-900/60 hover:bg-gray-800/80 border-gray-700/80 text-white"
              >
                (954) 549-9414
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* Featured Bodyguard Disciplines Showcase */}
      <section className="section-padding bg-gray-950/90 border-b border-gray-800/60">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Deployment Divisions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Elite Bodyguard & Tactical Capabilities
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              Every detail is led by vetted specialists with rigorous field certifications and extensive tactical background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Unit 1 */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/60 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/bodyguard-vip.jpg"
                  alt="VIP Bodyguard Protection"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/80 text-black backdrop-blur-md">
                  VIP & Close Escort
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Close Protection Detail</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Dedicated bodyguards providing overt and covert security for dignitaries, CEOs, and high-profile figures.
                </p>
              </div>
            </div>

            {/* Unit 2 */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/60 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/bodyguard-team.jpg"
                  alt="Tactical Armed Security Guard"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/80 text-black backdrop-blur-md">
                  Tactical & Armed
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Facility & Perimeter Defense</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Armed officers equipped with advanced comms and tactical readiness for critical infrastructure and estate gates.
                </p>
              </div>
            </div>

            {/* Unit 3 */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/60 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/bodyguard-patrol.jpg"
                  alt="Mobile Patrol Security Vehicle"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/80 text-black backdrop-blur-md">
                  Mobile Unit
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Patrol Fleet & Fast Intercept</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Marked high-visibility vehicles conducting frequent random scans, perimeter inspections, and rapid alarm response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="section-padding bg-gray-950">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Tailored Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Full Scope Security Solutions
            </h2>
            <p className="text-gray-400 mt-2">
              Every package is custom designed with continuous supervisory oversight and transparent accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/80 hover:border-cyan-500/40 hover:bg-gray-900/80 transition-all duration-300 p-7 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700/60">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div>
                  <div className="h-px w-full bg-gray-800/80 mb-5" />
                  <ul className="space-y-2.5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <svg
                          className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — with clearly visible bodyguard hero background & translucent glass container */}
      <section className="relative py-24 overflow-hidden border-t border-gray-800/60">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bodyguard-hero.jpg')" }}
        />
        {/* Soft translucent overlay — less black, image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/55 to-gray-950/80" />

        <div className="relative z-10 section-container">
          <div className="max-w-3xl mx-auto rounded-3xl bg-gray-900/65 backdrop-blur-md border border-cyan-500/30 p-8 sm:p-12 text-center shadow-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 mb-4">
              Direct Florida Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Need a Custom Protection Plan?
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              We build custom security details for corporate campuses, estate properties, and high-profile individuals. Speak directly with our tactical operations team today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary shadow-lg shadow-cyan-500/20">
                Get a Custom Quote
              </Link>
              <a
                href="tel:9545499414"
                className="btn-secondary bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800"
              >
                Call (954) 549-9414
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
