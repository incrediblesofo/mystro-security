import Link from 'next/link';

/* ─── Icon components ─── */
function ShieldIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}
function EyeIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}
function UsersIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}
function BoltIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}
function LockIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}
function ClockIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

/* ─── Services data ─── */
const services = [
  {
    icon: ShieldIcon,
    title: 'Armed & Unarmed Guards',
    category: 'Tactical & Concierge',
    badge: 'Class G & D Certified',
    metric: 'Immediate Dispatch',
    description:
      'State-licensed armed and unarmed officers providing vigilant protection, access management, and visible deterrence.',
    tags: ['Class G Armed Permit', 'De-escalation Trained', 'GPS Body Comms'],
  },
  {
    icon: BoltIcon,
    title: 'Executive & VIP Protection',
    category: 'Close Protection Detail',
    badge: 'Tier 1 Escort',
    metric: 'Discreet Escort',
    description:
      'Discreet close-protection bodyguards for executives, celebrities, dignitaries, and high-net-worth families with secure transit.',
    tags: ['Advance Route Recon', 'Armored Transport Ready', 'Threat Mitigation'],
  },
  {
    icon: EyeIcon,
    title: 'Mobile Patrol & Intercept',
    category: 'Rapid Vehicle Fleet',
    badge: 'Active GPS Fleet',
    metric: '< 15 Min Response',
    description:
      'Marked high-visibility vehicles conducting randomized sweeps, physical lock-checks, and rapid alarm response across South Florida.',
    tags: ['Geo-Fenced Routes', 'Real-Time Telemetry', 'Alarm Intercept Unit'],
  },
  {
    icon: UsersIcon,
    title: 'Event & Red Carpet Security',
    category: 'Crowd & Gala Control',
    badge: 'Special Events',
    metric: 'Full Incident Command',
    description:
      'Turnkey security planning for festivals, corporate summits, red-carpet galas, and VIP functions with seamless guest flow.',
    tags: ['VIP Holding Protocol', 'Bag & Magnetometer Check', 'EOD & K9 Integration'],
  },
  {
    icon: LockIcon,
    title: 'Access Control & Screening',
    category: 'Perimeter Defense',
    badge: 'Zero Breach Standard',
    metric: 'RFID / Biometric Sync',
    description:
      'Rigorous entry screening, credential validation, visitor tracking, and anti-tailgating protocols for corporate campuses.',
    tags: ['Biometric & Badge Gates', 'Visitor ID Verification', 'Barrier Defense'],
  },
  {
    icon: ClockIcon,
    title: '24/7 AI Video & SOC Monitoring',
    category: 'Remote Surveillance',
    badge: 'Live SOC Watch',
    metric: '24/7/365 Command Desk',
    description:
      'Optical video analytics, real-time perimeter alarms, and automated escalation linked directly to our armed response officers.',
    tags: ['4K Thermal Night Vision', 'Intrusion Detection AI', 'Direct Police Link'],
  },
];

const stats = [
  { number: '500+', label: 'Clients Protected' },
  { number: '24/7', label: 'Always On Duty' },
  { number: '100%', label: 'Licensed & Insured' },
  { number: '10+', label: 'Years Experience' },
];

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* High-quality auto-generated executive bodyguard photo */}
        <div
          className="absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bodyguard-hero.jpg')" }}
        />
        {/* Soft gradient overlay — NOT heavy black! Keeps the bodyguard & luxury SUV clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
        {/* Subtle Cyan ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 section-container w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 rounded-full px-4 py-1.5 mb-8 shadow-lg shadow-cyan-950/40">
              <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="text-cyan-300 text-xs font-bold tracking-wider uppercase">
                Mystro Services LLC • Licensed & Insured Security
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 text-white drop-shadow-md">
              Elite Bodyguard &{' '}
              <span className="gradient-text">Executive Protection</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-10 drop-shadow">
              Mystro Security Services delivers professional, discreet, and battle-tested protection for executives, VIPs, commercial properties, and private events. On duty 24/7 across South Florida and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary shadow-xl shadow-cyan-500/30">
                Request a Free Quote
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/services" className="btn-outline bg-gray-950/40 backdrop-blur-sm">
                Explore Protection Services
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 glow-line" />
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-900/85 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="stat-block">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label font-semibold text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES OVERVIEW ═══════════ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              Comprehensive Coverage
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Professional <span className="gradient-text">Security Solutions</span>
            </h2>
            <p className="text-gray-300 text-base">
              From close-protection executive bodyguards to full corporate surveillance, we provide tailored protection so you can operate with absolute peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group relative rounded-2xl overflow-hidden border border-gray-800/80 bg-gray-900/60 backdrop-blur-md p-7 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-900/85 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                {/* Subtle refined top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Top bar: Category & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400/90">
                      {svc.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wide bg-gray-800/80 border border-gray-700/70 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      {svc.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/15 group-hover:border-cyan-400/40 transition-all duration-300">
                      <svc.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {svc.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        <span>{svc.metric}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {svc.description}
                  </p>

                  {/* Refined feature pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-800/50 border border-gray-700/60 text-gray-300 group-hover:border-gray-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="relative z-10 pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors"
                  >
                    <span>Request Coverage</span>
                    <svg
                      className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>

                  <span className="text-[10px] text-gray-500 font-mono">
                    Mystro Security
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-ghost text-base">
              View All Security Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ PROTECTION IN ACTION (PHOTO SHOWCASE) ═══════════ */}
      <section className="section-padding bg-gray-900/40 border-y border-gray-800/80 relative">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              On-Duty Protection
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Elite Bodyguards <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Our officers are highly trained in threat de-escalation, rapid defensive tactics, and discreet VIP escort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/60 shadow-xl hover:border-cyan-500/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/bodyguard-hero.jpg"
                  alt="Executive Protection Officer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-cyan-500/90 text-gray-950 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  Executive Detail
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Close VIP & Executive Protection</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tailored bodyguard details for corporate leaders, celebrities, and high-net-worth individuals requiring around-the-clock personal security.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/60 shadow-xl hover:border-cyan-500/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/bodyguard-team.jpg"
                  alt="Corporate Headquarters Security Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-blue-500/90 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  Facility Command
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Corporate & Facility Security</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Uniformed and plainclothes officers providing access control, visitor screening, and perimeter defense for commercial buildings.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/60 shadow-xl hover:border-cyan-500/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/bodyguard-vip.jpg"
                  alt="VIP Event Security Detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-emerald-500/90 text-gray-950 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  Red Carpet & Events
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">High-Profile Event Escort</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Crowd control, safe transit corridors, and specialized VIP arrival and departure logistics for private galas and high-profile gatherings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY MYSTRO ═══════════ */}
      <section className="relative section-padding border-b border-gray-800/50 overflow-hidden">
        {/* Background image — tactical team with subtle translucent overlay so it's clearly visible */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bodyguard-team.jpg')" }}
        />
        {/* Soft, light gradient overlay — NOT pitch black */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />

        <div className="relative z-10 section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider mb-4">
                The Mystro Difference
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
                Why Choose <span className="gradient-text">Mystro Security?</span>
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    title: 'Trained & Licensed Personnel',
                    desc: 'Every officer undergoes rigorous tactical training, background screening, and holds active state security credentials.',
                  },
                  {
                    title: 'Tailored Security Plans',
                    desc: "We assess your unique risk profile and architect a custom operational strategy — never a generic template.",
                  },
                  {
                    title: 'Transparent Communication',
                    desc: 'Real-time incident reporting, digital patrol logs, and direct access to an executive security director 24/7.',
                  },
                  {
                    title: 'Rapid Deployment Guarantee',
                    desc: 'Need emergency coverage? We can dispatch licensed protection officers to your location within 24 hours.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 rounded-full bg-cyan-500/25 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                        <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Visual Photo Card with Live Status Badges */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/60 bg-gray-900">
                  <img
                    src="/bodyguard-team.jpg"
                    alt="Mystro Security Team"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-2">
                    <div className="bg-gray-950/90 backdrop-blur-md border border-cyan-400/40 rounded-xl p-3 flex items-center gap-3 shadow-lg">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      <div>
                        <div className="text-xs font-bold text-white">Active Protection Status</div>
                        <div className="text-[11px] text-cyan-400">Officers On-Duty • 24/7 Monitoring</div>
                      </div>
                    </div>
                    <div className="bg-gray-950/90 backdrop-blur-md border border-gray-700/60 rounded-xl p-3 flex items-center justify-between shadow-lg text-xs">
                      <span className="text-gray-300 font-semibold">Response Window</span>
                      <span className="text-emerald-400 font-bold">Under 24 Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative section-padding overflow-hidden">
        {/* Background image — VIP protection event */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bodyguard-vip.jpg')" }}
        />
        {/* Translucent overlay — makes the background image clearly visible while keeping text readable */}
        <div className="absolute inset-0 bg-gray-950/45 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-950/90" />

        <div className="relative z-10 section-container">
          <div className="relative overflow-hidden rounded-3xl bg-gray-950/75 backdrop-blur-md border border-cyan-500/30 p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl shadow-cyan-950/60">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-4">
              Immediate Dispatch Available
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
              Ready to Secure Your Dignitaries & Business?
            </h2>
            <p className="text-gray-200 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Contact Mystro Security Services today for a confidential risk assessment and custom protection proposal. Available 24/7/365.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary shadow-xl shadow-cyan-500/30">
                Contact Us Today
              </Link>
              <a href="tel:9545499414" className="btn-outline bg-gray-950/60 backdrop-blur-sm">
                Call (954) 549-9414
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
