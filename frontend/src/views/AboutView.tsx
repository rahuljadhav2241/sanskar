import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Compass,
  Rocket,
  Search,
  Lightbulb,
  Cpu,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  onOpenDiagnostic: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const approachSteps = [
  { num: '01', title: 'Discover', desc: 'Understand your business, market and commercial opportunities.', icon: Search },
  { num: '02', title: 'Strategise', desc: 'Build an accountable, tailored growth roadmap.', icon: Lightbulb },
  { num: '03', title: 'Build', desc: 'Develop and engineer sovereign technology and campaigns.', icon: Cpu },
  { num: '04', title: 'Launch', desc: 'Go to market with data calibration and precision.', icon: Rocket },
  { num: '05', title: 'Scale', desc: 'Automate CRM workflows, optimize yield and compound growth.', icon: BarChart3 },
];

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic
}) => {
  return (
    <div className="w-full bg-[#0F1B64] text-white font-sans selection:bg-[#AFEB00] selection:text-[#0F1B64] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. ABOUT HERO (CINEMATIC DARK SPLIT)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-white/10 bg-[#0F1B64] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/15 blur-[140px]" />
          <div className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/5 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* Left Narrative Column (Span 7) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-7 space-y-4 sm:space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#AFEB00]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-mono">
                  About Sanskar Growth Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-[1.08]">
                More Than a Service Provider. <br />
                <span className="text-[#AFEB00]">
                  A Business Growth &amp; Technology Partner.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Sanskar Growth Solutions is a Business Growth &amp; Technology Partner that brings together strategic intelligence, technology, performance acquisition, brand creative, and business systems to help ambitious businesses achieve sustainable market advantage.
              </p>

              <div className="font-heading text-lg sm:text-xl text-slate-200 font-bold tracking-tight flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#2033FF]" />
                <span>Built for Sustainable Business Growth</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenProjectModal}
                  className="px-8 py-3.5 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all hover:-translate-y-0.5"
                >
                  <span>Start a Growth Conversation</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={onOpenDiagnostic}
                  className="px-6 py-3 rounded-xl bg-[#0F1B64] hover:bg-[#2033FF] text-white border border-white/20 text-xs sm:text-sm font-bold transition-all"
                >
                  Take the Growth Diagnostic
                </button>
              </div>
            </motion.div>

            {/* Right Building Graphic with Floating Badge (Span 5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-white/15 shadow-2xl shadow-black/80">
                <img
                  src="/images/sgs-hq-building.jpg"
                  alt="Sanskar Growth Solutions Corporate Building"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B64] via-transparent to-black/30" />
              </div>

              {/* Floating Dark Capability Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0F1B64] border border-white/15 p-4 rounded-xl shadow-2xl backdrop-blur-xl max-w-[220px] space-y-1.5 z-20">
                {['Growth', 'Strategy', 'Technology', 'Creativity', 'Execution', 'Real Business Impact.'].map((item, idx) => (
                  <div
                    key={idx}
                    className={`text-xs ${idx === 5 ? 'text-[#AFEB00] font-bold pt-1 border-t border-white/15 font-mono' : 'text-slate-200 font-medium'
                      }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-mono text-[11px] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
                <span>Pune, Maharashtra</span>
              </div>
            </motion.div>

          </div>

          {/* Stats Bar Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">Pune HQ</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Working Across India &amp; Global</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">4 Core Levers</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Strategy • Tech • Growth • Automation</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">100% Owned</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Complete Client IP Ownership</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">Direct Access</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Senior Partner Accountability</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. PURPOSE & WHY SGS EXISTS
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F5FAFF] text-[#141414] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#2033FF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2033FF] font-mono">
                  WHY SGS EXISTS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[#141414] tracking-tight leading-[1.1]">
                Connecting Strategy, Technology &amp; Growth as One System.
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                Businesses today often work with multiple disconnected vendors for marketing, technology, branding and business development.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                SGS was built around a different approach: bringing these capabilities together so that strategy, execution, technology and growth work as one system.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-medium">
                Our objective is simple — help businesses attract the right opportunities, convert them more effectively and build systems that support long-term growth.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {/* Purpose Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F1B64] text-[#AFEB00] flex items-center justify-center">
                    <Target size={18} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#141414]">Our Purpose</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To empower ambitious Indian and global businesses with technology-driven growth systems that create durable, measurable commercial value.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F1B64] text-[#AFEB00] flex items-center justify-center">
                    <Compass size={18} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#141414]">Our Vision</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To be India's most trusted business growth &amp; technology partner across real estate, interiors, manufacturing, and growing businesses — combining strategic intelligence, engineering craft, and brand authority.
                </p>
              </div>
            </div>
          </div>

          {/* Beliefs Grid */}
          <div className="pt-8 border-t border-slate-200">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#2033FF] mb-6">
              CORE OPERATING BELIEFS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs font-mono font-bold text-[#2033FF]">01</div>
                <h4 className="text-lg font-heading font-bold text-[#141414]">High Agency &amp; Ownership</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We don't pass tickets between siloed sub-departments. Our senior team takes direct accountability for your conversion metrics and commercial outcomes.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs font-mono font-bold text-[#2033FF]">02</div>
                <h4 className="text-lg font-heading font-bold text-[#141414]">Craft Meets Commercial Impact</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We obsess over clean code, sub-second load times, and typographic perfection, but we always judge success by business revenue and sales velocity.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs font-mono font-bold text-[#2033FF]">03</div>
                <h4 className="text-lg font-heading font-bold text-[#141414]">Unified Operating Layer</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When ads, websites, CRMs, and brand media operate from a single unified architecture, customer acquisition costs drop and lifetime value multiplies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. LEADERSHIP (FOUNDER SPOTLIGHT)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200 text-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-6 bg-[#2033FF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2033FF] font-mono">
              LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[#141414] tracking-tight leading-[1.1] mb-8">
            Built by Practitioners. Led by Vision.
          </h2>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#F5FAFF] border border-slate-200 max-w-4xl">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#141414]">
                  Rahul Jadhav
                </h3>
                <p className="text-sm font-mono font-semibold text-[#2033FF] mt-0.5">
                  Founder &amp; Director, Sanskar Growth Solutions
                </p>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Rahul Jadhav founded Sanskar Growth Solutions with a focus on helping businesses connect growth strategy, technology and execution under one operating partner.
                </p>
                <p>
                  With experience across business development, magazine/media sales, digital initiatives and technology-led projects, Rahul's focus is to build SGS as a practical growth partner for ambitious businesses.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#0F1B64]">
                  Pune, India
                </span>
                <span>•</span>
                <span>Business Growth &amp; Technology Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          04. 5-PHASE APPROACH (CRISP WHITE ARCHITECTURAL SPREAD)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200 text-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#2033FF] mb-1.5">
                OUR METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[#141414] tracking-tight leading-[1.1]">
                A Clear Path From<br />
                Insight to Impact.
              </h2>
            </div>
            <div className="font-heading text-lg sm:text-xl text-[#0F1B64] font-bold tracking-tight flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#AFEB00]" />
              <span>Growth Without Guesswork</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {approachSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 hover:border-[#0F1B64] transition-all shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#0F1B64] text-[#AFEB00] flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#2033FF] block mb-0.5">
                      PHASE {step.num}
                    </span>
                    <h3 className="text-base font-heading font-bold text-[#141414]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          05. CINEMATIC SUMMIT BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-22 bg-[#0F1B64] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-summit.jpg"
            alt="Mountain Summit Sunset"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B64] via-[#0F1B64]/70 to-[#0F1B64]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#AFEB00] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <span>Direct Partner Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]">
            Partner with Us to Build a Business Growth Engine.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let's evaluate your commercial bottlenecks and engineer a system built for scalable growth.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenProjectModal}
              className="px-9 py-4 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl shadow-[#AFEB00]/25 transition-transform hover:-translate-y-0.5"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

