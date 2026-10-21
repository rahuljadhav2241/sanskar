import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import {
  ArrowRight,
  Play,
  Search,
  Lightbulb,
  Cpu,
  Rocket,
  BarChart3,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Target,
  Compass,
  Building2,
  TrendingUp,
  Zap,
  Layers,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  Users,
  Laptop,
  Settings,
  Database,
  Clock,
  FileText
} from 'lucide-react';
import { CaseStudy, InsightArticle } from '../types';
import { SgsBrandMotifsStrip } from '../components/BrandGraphics';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: (initialService?: string) => void;
  onOpenDiagnostic: () => void;
  onSelectCaseStudy?: (study: CaseStudy) => void;
  onSelectArticle?: (article: InsightArticle) => void;
}

const problemsList = [
  {
    num: '01',
    title: 'Inconsistent Leads',
    problem: 'Your business depends too heavily on referrals or unpredictable enquiries.',
    impacts: 'Revenue, Pipeline, Sales Growth',
    image: '/images/card-funnel-leads-perfect.png',
    icon: Users,
    sgsResponse: 'Demand Generation & Performance Marketing',
  },
  {
    num: '02',
    title: "Leads Don't Convert",
    problem: 'Enquiries come in, but follow-ups, qualification and sales tracking are inconsistent.',
    impacts: 'Sales Process, CRM, Conversions',
    image: '/images/card-magnet-leads-perfect.png',
    icon: BarChart3,
    sgsResponse: 'CRM, Lead Management & Conversion Systems',
  },
  {
    num: '03',
    title: 'Weak Digital Presence',
    problem: "Your website and online presence don't communicate the quality of your business.",
    impacts: 'Brand, Website, Online Visibility',
    image: '/images/card-digital-presence-perfect.png',
    icon: Laptop,
    sgsResponse: 'Website, Brand & Digital Experience',
  },
  {
    num: '04',
    title: 'Manual Operations',
    problem: 'Your team spends too much time on repetitive processes.',
    impacts: 'Time, Productivity, Team Efficiency',
    image: '/images/card-manual-operations-perfect.png',
    icon: Settings,
    sgsResponse: 'Automation & Technology Solutions',
  },
  {
    num: '05',
    title: 'Disconnected Systems',
    problem: 'Marketing, sales, customer data and operations work in separate systems.',
    impacts: 'Data, Systems, Scalable Growth',
    image: '/images/card-disconnected-systems-perfect.png',
    icon: Database,
    sgsResponse: 'Integrated Growth & Technology Architecture',
  },
];

const growthStagesList = [
  {
    stage: 'ATTRACT',
    title: 'Generate Demand',
    slug: 'digital-growth',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    capabilities: [
      'Digital Marketing',
      'Performance Marketing',
      'SEO',
      'Social Media',
      'Content & Creative',
      'Lead Generation',
      'Brand Positioning',
    ],
    ctaText: 'Explore Digital Growth',
  },
  {
    stage: 'CONVERT',
    title: 'Turn Opportunities Into Business',
    slug: 'technology',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    capabilities: [
      'Landing Pages',
      'Websites',
      'CRM',
      'Lead Management',
      'WhatsApp Automation',
      'Sales Funnels',
      'Analytics & Conversion Optimization',
    ],
    ctaText: 'Explore Conversion Systems',
  },
  {
    stage: 'SCALE',
    title: 'Build Systems That Support Growth',
    slug: 'business-consulting',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    capabilities: [
      'Custom Software',
      'Business Automation',
      'SaaS & Portals',
      'CRM & ERP Solutions',
      'AI & Automation',
      'Business Dashboards',
      'Digital Transformation',
    ],
    ctaText: 'Explore Technology Solutions',
  },
];

const priorityIndustriesList = [
  {
    title: 'Real Estate & Property',
    slug: 'real-estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    tag: 'Priority 01',
    cta: 'Build My Real Estate Growth System',
  },
  {
    title: 'Interior & Construction',
    slug: 'interior-construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    tag: 'Priority 02',
    cta: 'Build My Interior Growth System',
  },
  {
    title: 'B2B & Manufacturing',
    slug: 'b2b-manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    tag: 'Priority 03',
    cta: 'Build My B2B Growth System',
  },
  {
    title: 'Professional Services',
    slug: 'professional-services',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    tag: 'Sector Focus',
    cta: 'Explore Advisory Stack',
  },
  {
    title: 'Technology & SaaS',
    slug: 'technology-saas',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    tag: 'Sector Focus',
    cta: 'Explore Tech Stack',
  },
];

const approachSteps = [
  {
    num: '01',
    phase: 'Phase 01',
    title: 'Discover',
    desc: 'Understand your business, customers, challenges and objectives.',
    deliverable: 'Diagnostic & Audit',
    icon: Search,
  },
  {
    num: '02',
    phase: 'Phase 02',
    title: 'Strategize',
    desc: 'Define the right growth, technology and commercial approach.',
    deliverable: 'Growth Roadmap',
    icon: Lightbulb,
  },
  {
    num: '03',
    phase: 'Phase 03',
    title: 'Build',
    desc: 'Develop the required marketing assets, technology and systems.',
    deliverable: 'Platform & Assets',
    icon: Settings,
  },
  {
    num: '04',
    phase: 'Phase 04',
    title: 'Launch',
    desc: 'Put the system into action and connect the required channels.',
    deliverable: 'Channel Activation',
    icon: Rocket,
  },
  {
    num: '05',
    phase: 'Phase 05',
    title: 'Measure',
    desc: 'Track performance, conversion and business outcomes.',
    deliverable: 'Attribution & Tracking',
    icon: BarChart3,
  },
  {
    num: '06',
    phase: 'Phase 06',
    title: 'Scale',
    desc: 'Optimize what works and build the next growth layer.',
    deliverable: 'Compounding Scale',
    icon: TrendingUp,
  },
];

const whySgsPoints = [
  {
    num: '01',
    title: 'Business-First Thinking',
    desc: 'We start with your business objective—not a predefined service package.',
  },
  {
    num: '02',
    title: 'Strategy + Technology',
    desc: 'Marketing, technology and automation work together instead of operating as separate functions.',
  },
  {
    num: '03',
    title: 'Industry Understanding',
    desc: 'We design solutions around the realities of your industry and customer journey.',
  },
  {
    num: '04',
    title: 'Measurable Execution',
    desc: 'We focus on meaningful commercial outcomes, not vanity metrics.',
  },
  {
    num: '05',
    title: 'Long-Term Partnership',
    desc: 'We aim to become a strategic growth partner as your business evolves.',
  },
];

const caseStudiesList = [
  {
    id: 'arc-interiors',
    client: 'Raaga Interiors',
    industry: 'Interior & Construction',
    headline: 'From Local Referrals to Predictable High-Value Consultations.',
    challenge: 'Relied heavily on unpredictable offline architect referrals with no structured homeowner acquisition funnel.',
    sgsApproach: 'Visual authority portfolio web system, targeted Meta discovery campaigns, and automated intake CRM.',
    description: 'We helped Raaga Interiors build a complete growth system with website, digital campaigns, CRM and automated follow-ups.',
    metrics: [
      { value: '3.4x', label: 'Qualified Inquiries', sub: '↑ 240% increase' },
      { value: '62%', label: 'Lower Cost / Lead', sub: '↓ 62% reduction' },
      { value: '90 Days', label: 'Time to Scale', sub: 'From setup to measurable results' },
    ],
    compactMetrics: [
      { val: '3.4x', label: 'Inquiries' },
      { val: '62%', label: 'Lower CPL' },
      { val: '90 Days', label: 'Time to Scale' },
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'apex-realty',
    client: 'Sanskar Realty',
    industry: 'Real Estate & Property',
    headline: 'Scaling Luxury Residential Bookings Across Western India.',
    challenge: 'Slow response times on generic portals causing lead drop-off and low site-visit conversion.',
    sgsApproach: 'High-intent search and meta campaigns, responsive project microsite, and sub-2-minute CRM dispatch.',
    description: 'We engineered high-intent campaigns, high-converting project microsites, and automated sub-2-minute CRM dispatch.',
    metrics: [
      { value: '2.8x', label: 'Qualified Leads', sub: '↑ 180% surge' },
      { value: '54%', label: 'Lower Cost / Lead', sub: '↓ 54% reduction' },
      { value: '120 Days', label: 'Sales Pipeline', sub: 'From launch to velocity' },
    ],
    compactMetrics: [
      { val: '2.8x', label: 'Leads' },
      { val: '54%', label: 'Lower CPL' },
      { val: '120 Days', label: 'Sales Pipeline' },
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'novacommerce',
    client: 'Nova Distribution',
    industry: 'Distribution & Commerce',
    headline: 'Digitized B2B Ordering & Automated Procurement Pipelines.',
    challenge: 'Manual phone and paper catalog workflows resulting in delayed RFQ processing and missed regional accounts.',
    sgsApproach: 'Modern digital catalog portal, automated RFQ lead distribution, and targeted Google search visibility.',
    description: 'We digitized regional catalog workflows with an automated RFQ ordering portal and high-velocity B2B commercial outreach.',
    metrics: [
      { value: '3.1x', label: 'B2B Inquiries', sub: '↑ 210% increase' },
      { value: '48%', label: 'Lower Cost / Lead', sub: '↓ 48% reduction' },
      { value: '90 Days', label: 'Deal Cycle', sub: 'Halved procurement cycle' },
    ],
    compactMetrics: [
      { val: '3.1x', label: 'B2B Inquiries' },
      { val: '48%', label: 'Lower CPL' },
      { val: '90 Days', label: 'Deal Cycle' },
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'cleanzo',
    client: 'Cleanzo',
    industry: 'Manufacturing',
    headline: 'High-Velocity Institutional Lead Acquisition & Brand Modernization.',
    challenge: 'Offline retail distribution saturation with no unified corporate procurement portal.',
    sgsApproach: 'Custom B2B ordering portal, SEO dominance, and high-velocity digital outreach.',
    description: 'We modernized industrial presence with verified specs, buyer discovery channels, and automated factory procurement.',
    metrics: [
      { value: '2.6x', label: 'Website Traffic', sub: '↑ 160% organic lift' },
      { value: '67%', label: 'Lower Cost / Lead', sub: '↓ 67% reduction' },
      { value: '3 Months', label: 'Time to Scale', sub: 'B2B Inquiries surge' },
    ],
    compactMetrics: [
      { val: '2.6x', label: 'Website Traffic' },
      { val: '67%', label: 'Lower CPL' },
      { val: '3 Months', label: 'B2B Inquiries' },
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  },
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic,
}) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const activeCase = caseStudiesList[activeCaseIdx];

  return (
    <div className="w-full bg-[#F5FAFF] text-[#1A1A1A] font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. HERO SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <Hero onNavigate={onNavigate} />

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. TRUST / POSITIONING STRIP (BELOW HERO)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-8 sm:py-10 bg-[#080E32] text-white border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
              One Growth Partner. Multiple Business Growth Levers.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-mono font-bold text-[#AFEB00] uppercase tracking-wider">01. Digital Growth</div>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                Generate visibility, demand and qualified opportunities.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-mono font-bold text-[#2033FF] uppercase tracking-wider">02. Technology</div>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                Build websites, platforms, CRM and business systems.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-mono font-bold text-[#AFEB00] uppercase tracking-wider">03. Automation</div>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                Reduce manual work and improve operational efficiency.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-mono font-bold text-[#2033FF] uppercase tracking-wider">04. Strategy</div>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                Connect marketing, sales and technology to business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. THE PROBLEMS WE SOLVE — WHERE IS YOUR BUSINESS LOSING GROWTH?
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-8 sm:pt-10 lg:pt-10 pb-6 sm:pb-8 lg:pb-8 bg-[#F8FAFC] text-[#141414] border-b border-slate-200 overflow-hidden">
        {/* Full-Section Background Scene: Image spans the entire section with corner emphasized */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/images/diagnostic-businessman-hires.png"
            alt=""
            className="w-full h-full object-cover object-left-bottom"
          />
          {/* Smooth overlay: bottom-left corner remains clear and vivid,
              while the rest softly blends into the #F8FAFC section background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 70% 80% at 0% 100%, transparent 0%, transparent 35%, rgba(248, 250, 252, 0.45) 55%, rgba(248, 250, 252, 0.9) 75%, #F8FAFC 95%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {/* Left Column: Title, Benefits & Open View to the Exposed Background Scene */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3 relative z-10">
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF7D3] border border-[#D4F09B] text-slate-900 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                  <span>Business Growth Diagnostic</span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-[38px] lg:text-[42px] font-heading font-black leading-[1.05] text-[#080E32] tracking-tight">
                  Where Is Your<br />
                  Business Losing<br />
                  <span className="text-[#84CC16]">Growth?</span>
                </h2>

                {/* Paragraph */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans max-w-[340px]">
                  Most businesses don't need more services. They need the right systems working together. Identify your biggest growth bottleneck in seconds.
                </p>

                {/* 3 Core Value Props */}
                <div className="space-y-2 pt-0.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 text-slate-800 shadow-xs">
                      <Target size={15} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-heading font-bold text-[#080E32]">
                        Pinpoint what's holding you back
                      </h4>
                      <p className="text-[11px] text-slate-500 font-sans">
                        Across leads, marketing, systems, team and tech.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 text-slate-800 shadow-xs">
                      <BarChart3 size={15} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-heading font-bold text-[#080E32]">
                        Get personalised insights
                      </h4>
                      <p className="text-[11px] text-slate-500 font-sans">
                        Based on real business patterns.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 text-slate-800 shadow-xs">
                      <Zap size={15} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-heading font-bold text-[#080E32]">
                        Know the next best step
                      </h4>
                      <p className="text-[11px] text-slate-500 font-sans">
                        With clear recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Natural open spacer aligned with the height of the 2-row cards + pill bar */}
              <div className="hidden lg:block min-h-[110px] xl:min-h-[130px] pointer-events-none" />
            </div>

            {/* Right Column: 3x2 Grid of Compact Cards + Snug Integrated Dark Pill Bar */}
            <div className="lg:col-span-8 flex flex-col justify-start space-y-3 sm:space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {problemsList.map((item) => (
                  <div
                    key={item.num}
                    onClick={onOpenDiagnostic}
                    className="relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 hover:border-[#2033FF]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs overflow-hidden h-[190px] sm:h-[196px]"
                  >
                    {/* Top-Right Integrated Artwork */}
                    <div className="absolute top-0 right-0 w-[55%] h-[72px] pointer-events-none select-none overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover object-right-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      {/* Top-Left: Number & Icon */}
                      <div className="space-y-1 relative z-10 mb-2">
                        <span className="text-xs font-mono font-bold text-[#2033FF] tracking-wider block">
                          {item.num}
                        </span>
                        <div className="text-[#080E32] group-hover:text-[#2033FF] transition-colors">
                          <item.icon size={20} strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="relative z-10 space-y-1">
                        <h3 className="text-[14.5px] sm:text-[15px] font-heading font-extrabold text-[#080E32] leading-snug group-hover:text-[#2033FF] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-[11.5px] text-slate-500 leading-snug font-sans line-clamp-2">
                          {item.problem}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row: Impacts & Circle Arrow Button */}
                    <div className="relative z-10 pt-2 mt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          IMPACTS
                        </span>
                        <span className="text-[11px] font-heading font-semibold text-[#080E32] leading-tight block">
                          {item.impacts}
                        </span>
                      </div>
                      <div className="w-7 h-7 rounded-full border border-[#2033FF]/40 group-hover:border-[#2033FF] group-hover:bg-[#2033FF] group-hover:text-white flex items-center justify-center text-[#2033FF] transition-all shrink-0">
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Card 06: Self-Diagnostic CTA Card in Dark Navy */}
                <div className="relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#080E32] text-white border border-white/10 flex flex-col justify-between shadow-xl overflow-hidden group h-[190px] sm:h-[196px]">
                  {/* Glowing curved dotted trendline SVG in background */}
                  <svg
                    className="absolute -right-2 top-1/2 -translate-y-1/3 w-44 h-28 pointer-events-none opacity-40"
                    viewBox="0 0 180 100"
                    fill="none"
                  >
                    <path
                      d="M10 85 C 50 80, 80 60, 110 35 C 130 18, 150 20, 170 12"
                      stroke="#84CC16"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <circle cx="170" cy="12" r="3" fill="#84CC16" />
                    <circle cx="110" cy="35" r="2" fill="#84CC16" />
                    <circle cx="60" cy="70" r="1.5" fill="#84CC16" />
                  </svg>

                  <div className="relative z-10 space-y-2">
                    {/* Top Row: GET YOUR DIAGNOSTIC + Floating dark pill badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-[#84CC16]">
                        <BarChart2 size={15} strokeWidth={2.5} />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                          GET YOUR DIAGNOSTIC
                        </span>
                      </div>

                      <div className="px-1.5 py-0.5 rounded bg-[#0F172A]/90 border border-white/15 text-[8px] text-right font-sans text-slate-300 leading-tight">
                        <div>Identify.</div>
                        <div>Prioritize.</div>
                        <div className="text-[#84CC16] font-semibold">Grow.</div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1">
                      <h3 className="text-[15px] sm:text-base font-heading font-extrabold text-white leading-tight">
                        Find Your Specific Bottleneck
                      </h3>
                      <p className="text-[11px] text-slate-300 leading-snug font-sans">
                        Evaluate your leads, marketing, systems and team in under 60 seconds.
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="relative z-10 pt-2">
                    <button
                      onClick={onOpenDiagnostic}
                      className="w-full py-2 px-3 rounded-lg bg-[#84CC16] hover:bg-[#65A30D] text-[#080E32] text-[10.5px] font-heading font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md hover:shadow-lime-500/25 active:scale-[0.99] group/btn"
                    >
                      <span>TAKE THE GROWTH DIAGNOSTIC</span>
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Integrated Dark Pill Bar directly beneath the 6 cards */}
              <div className="rounded-2xl bg-[#080E32] text-white p-3 sm:p-3.5 border border-white/10 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[#84CC16] flex items-center justify-center text-[#84CC16] shrink-0">
                      <Clock size={16} strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs sm:text-[13px] text-[#84CC16]">60 Seconds</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-300 font-sans">Quick & simple assessment</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 md:pt-0 md:pl-4 lg:pl-5">
                    <div className="w-8 h-8 rounded-full border border-[#84CC16] flex items-center justify-center text-[#84CC16] shrink-0">
                      <FileText size={16} strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs sm:text-[13px] text-[#84CC16]">Personalised Insights</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-300 font-sans">Based on your business</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 md:pt-0 md:pl-4 lg:pl-5">
                    <div className="w-8 h-8 rounded-full border border-[#84CC16] flex items-center justify-center text-[#84CC16] shrink-0">
                      <TrendingUp size={16} strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs sm:text-[13px] text-[#84CC16]">Clear Next Steps</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-300 font-sans">Focus on what will drive the most impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          04. ATTRACT → CONVERT → SCALE (MAIN SERVICES RESTRUCTURED)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-[#080E32] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-heading mb-2">
                THE THREE GROWTH STAGES
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-bold leading-[1.08] text-white tracking-tight">
                Attract. Convert. Scale.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                Instead of a disjointed catalog of fifty services, SGS organizes business growth into three synchronized execution phases.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/solutions')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#AFEB00] hover:underline self-start md:self-end pb-1"
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {growthStagesList.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden bg-[#0F1B64]/80 border border-white/15 p-6 sm:p-7 flex flex-col justify-between shadow-xl space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-[#AFEB00] border border-white/10">
                      STAGE 0{idx + 1} • {item.stage}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">{item.title}</h3>
                    <div className="h-[2px] w-10 bg-[#2033FF] mb-4" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                      Core Systems Included:
                    </span>
                    <ul className="space-y-1.5">
                      {item.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 size={13} className="text-[#AFEB00] shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onNavigate('/solutions')}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight size={14} className="text-[#AFEB00]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          05. INDUSTRY-SPECIFIC GROWTH SYSTEMS
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-[#F5FAFF] text-[#141414] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2033FF] font-heading">
              SECTOR-SPECIFIC ARCHITECTURES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-bold leading-[1.08] text-[#141414] tracking-tight">
              Industry-Specific Growth Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              Every industry has different customers, sales cycles and operational challenges. SGS builds growth and technology systems around how your business actually operates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {priorityIndustriesList.slice(0, 3).map((ind, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(`/industries/${ind.slug}`)}
                className="group relative h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-slate-900 flex flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#080E32]/80 text-[#AFEB00] border border-white/20">
                    {ind.tag}
                  </span>
                </div>

                <div className="relative z-10 space-y-2 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading leading-tight group-hover:text-[#AFEB00] transition-colors">
                    {ind.title}
                  </h3>
                  <div className="pt-2 flex items-center justify-between border-t border-white/20">
                    <span className="text-xs font-heading font-semibold text-slate-200">
                      {ind.cta}
                    </span>
                    <ArrowRight size={14} className="text-[#AFEB00] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('/industries')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2033FF] hover:text-[#080E32] transition-colors"
            >
              <span>Explore All Industries We Serve</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          06. HOW WE WORK — FROM BUSINESS PROBLEM TO GROWTH SYSTEM
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-white text-[#141414] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header & Top Ascending Stepper Visual */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF] text-[#4F46E5] text-[11px] font-mono font-bold uppercase tracking-wider">
                <span>METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-black leading-[1.08] text-[#080E32] tracking-tight">
                From Business Problem to<br />
                <span className="text-[#AFEB00]">Growth System.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                A clear, accountable 6-step journey from initial diagnosis to sustainable commercial scale.
              </p>
            </div>

            {/* Ascending Curve Stepper Graph */}
            <div className="w-full lg:max-w-xl relative pt-4 lg:pt-0">
              <svg
                className="w-full h-auto overflow-visible select-none"
                viewBox="0 0 760 160"
                fill="none"
              >
                <defs>
                  <linearGradient id="stepperFillGrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2033FF" stopOpacity="0.02" />
                    <stop offset="50%" stopColor="#2033FF" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#AFEB00" stopOpacity="0.22" />
                  </linearGradient>
                  <linearGradient id="stepperStrokeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#080E32" stopOpacity="0.35" />
                    <stop offset="45%" stopColor="#2033FF" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#AFEB00" />
                  </linearGradient>
                </defs>

                {/* Shaded area under the curve */}
                <path
                  d="M 30 140 C 85 134, 120 126, 165 116 C 215 106, 260 94, 305 80 C 355 67, 400 54, 445 44 C 475 36, 505 32, 535 28 L 535 160 L 30 160 Z"
                  fill="url(#stepperFillGrad)"
                />

                {/* Dashed curve line */}
                <path
                  d="M 30 140 C 85 134, 120 126, 165 116 C 215 106, 260 94, 305 80 C 355 67, 400 54, 445 44 C 475 36, 505 32, 535 28"
                  stroke="url(#stepperStrokeGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="5 5"
                />

                {/* Step 1: Diagnose (Dot at 30, 140) */}
                <g>
                  <text x="30" y="104" fill="#080E32" style={{ fontWeight: 800, fontSize: '12px', fontFamily: 'inherit' }}>
                    Diagnose
                  </text>
                  <text x="30" y="122" fill="#64748B" style={{ fontSize: '10px', fontFamily: 'inherit' }}>
                    Find the real issues
                  </text>
                  <circle cx="30" cy="140" r="4.5" fill="#080E32" stroke="white" strokeWidth="2.5" />
                </g>

                {/* Step 2: Strategize (Dot at 165, 116) */}
                <g>
                  <text x="165" y="80" fill="#080E32" style={{ fontWeight: 800, fontSize: '12px', fontFamily: 'inherit' }}>
                    Strategize
                  </text>
                  <text x="165" y="98" fill="#64748B" style={{ fontSize: '10px', fontFamily: 'inherit' }}>
                    Plan for impact
                  </text>
                  <circle cx="165" cy="116" r="4.5" fill="#2033FF" stroke="white" strokeWidth="2.5" />
                </g>

                {/* Step 3: Build (Dot at 305, 80) */}
                <g>
                  <text x="305" y="44" fill="#080E32" style={{ fontWeight: 800, fontSize: '12px', fontFamily: 'inherit' }}>
                    Build
                  </text>
                  <text x="305" y="62" fill="#64748B" style={{ fontSize: '10px', fontFamily: 'inherit' }}>
                    Implement systems
                  </text>
                  <circle cx="305" cy="80" r="4.5" fill="#2033FF" stroke="white" strokeWidth="2.5" />
                </g>

                {/* Step 4: Scale (Dot at 445, 44) */}
                <g>
                  <text x="445" y="10" fill="#080E32" style={{ fontWeight: 800, fontSize: '12px', fontFamily: 'inherit' }}>
                    Scale
                  </text>
                  <text x="445" y="28" fill="#64748B" style={{ fontSize: '10px', fontFamily: 'inherit' }}>
                    Drive continuous growth
                  </text>
                  <circle cx="445" cy="44" r="4.5" fill="#080E32" stroke="white" strokeWidth="2.5" />
                </g>

                {/* Peak Action Indicator (Hits at 535, 28) */}
                <foreignObject x="535" y="10" width="225" height="42" className="overflow-visible">
                  <div
                    onClick={() => onOpenProjectModal()}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#AFEB00] group-hover:scale-105 transition-transform flex items-center justify-center text-[#080E32] shadow-md shadow-lime-500/25 shrink-0">
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-[#080E32] group-hover:bg-[#0F1B64] border border-white/10 shadow-lg text-[10px] font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors whitespace-nowrap">
                      <span className="text-[#AFEB00]">A CLEAR PATH TO GROWTH</span>
                      <ArrowRight size={11} className="text-[#AFEB00] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>

          {/* Main 4-Column Grid: 6 Steps (Cols 1-3) + Dark CTA Card (Col 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* 6 Process Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
              {approachSteps.map((step, idx) => {
                const Icon = step.icon;
                const showArrow = idx === 0 || idx === 1 || idx === 3 || idx === 4;
                return (
                  <div key={step.num} className="relative group flex flex-col">
                    <div
                      onClick={() => onOpenProjectModal(step.title)}
                      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#2033FF]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full shadow-xs cursor-pointer"
                    >
                      <div>
                        {/* Top Row: Icon + Watermark Number */}
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-[#2033FF] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-[#2033FF]/40 transition-transform">
                            <Icon size={20} strokeWidth={2.2} />
                          </div>
                          <span className="text-3xl sm:text-4xl font-heading font-black text-slate-200 group-hover:text-slate-300 transition-colors tracking-tight select-none">
                            {step.num}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="mt-4 space-y-1.5">
                          <h3 className="text-lg font-heading font-bold text-[#080E32] group-hover:text-[#2033FF] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right: Circular Arrow Button */}
                      <div className="pt-4 flex justify-end">
                        <div className="w-8 h-8 rounded-full border border-slate-300 group-hover:border-[#2033FF] group-hover:bg-[#2033FF] group-hover:text-white flex items-center justify-center text-slate-600 transition-all shrink-0">
                          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Connector Arrow (large screens) */}
                    {showArrow && (
                      <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center pointer-events-none text-slate-300 font-mono text-xs">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dark CTA Card */}
            <div className="lg:col-span-3 bg-[#080E32] text-white rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#AFEB00]/10 border border-[#AFEB00]/30 text-[#AFEB00] text-[10px] font-mono font-bold tracking-wider uppercase">
                  <Settings size={12} />
                  <span>STRUCTURED. PRACTICAL. RESULT-DRIVEN.</span>
                </div>

                {/* Heading */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white leading-tight">
                  Turn Your Business Challenges Into<br />
                  <span className="text-[#AFEB00]">Measurable Growth.</span>
                </h3>

                {/* 4 Checkmarks */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-200 font-sans">
                    <CheckCircle2 size={16} className="text-[#AFEB00] shrink-0" />
                    <span>Clear diagnosis</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-200 font-sans">
                    <CheckCircle2 size={16} className="text-[#AFEB00] shrink-0" />
                    <span>Custom growth roadmap</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-200 font-sans">
                    <CheckCircle2 size={16} className="text-[#AFEB00] shrink-0" />
                    <span>Execution support</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-200 font-sans">
                    <CheckCircle2 size={16} className="text-[#AFEB00] shrink-0" />
                    <span>Measurable results</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-6">
                <button
                  onClick={() => onOpenProjectModal()}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#AFEB00] text-[#080E32] hover:bg-[#9EEB00] text-xs font-heading font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lime-500/25 active:scale-[0.99] group/btn"
                >
                  <span>TALK TO OUR TEAM</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Full-width 4-Item Bar Strip */}
          <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-6 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#2033FF]/10 text-[#2033FF] flex items-center justify-center shrink-0">
                  <Target size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#080E32]">Structured methodology</h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">From insight to execution</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5 lg:pl-6">
                <div className="w-10 h-10 rounded-full bg-[#2033FF]/10 text-[#2033FF] flex items-center justify-center shrink-0">
                  <Users size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#080E32]">Cross-functional expertise</h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">Business + Marketing + Technology</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5 lg:pl-6">
                <div className="w-10 h-10 rounded-full bg-[#2033FF]/10 text-[#2033FF] flex items-center justify-center shrink-0">
                  <FileText size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#080E32]">Practical, real-world approach</h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">Built for commercial impact</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5 lg:pl-6">
                <div className="w-10 h-10 rounded-full bg-[#2033FF]/10 text-[#2033FF] flex items-center justify-center shrink-0">
                  <BarChart3 size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#080E32]">Designed for scale</h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">From early traction to long-term growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          07. SELECTED WORK / CASE STUDIES (OUR CLIENTS, REAL GROWTH)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-[#060B24] text-white overflow-hidden">
        {/* Architectural building watermark at bottom left - Enhanced visibility */}
        <div className="absolute left-0 bottom-0 w-[440px] h-[460px] sm:w-[540px] sm:h-[560px] lg:w-[640px] lg:h-[640px] opacity-45 pointer-events-none overflow-hidden select-none z-0">
          <img
            src="/images/hero-building.jpg"
            alt=""
            className="w-full h-full object-cover object-bottom filter grayscale contrast-150 brightness-135 mix-blend-luminosity"
          />
          {/* Subtle boundary fades so it blends smoothly without hard edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#060B24]/30 to-[#060B24]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060B24]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start w-full">
            {/* Left Narrative Column (lg:col-span-3) */}
            <div className="lg:col-span-3 min-w-0 space-y-4 pt-2">
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#B4F000]">
                TRUSTED BY GROWING BUSINESSES
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-heading font-black leading-[1.04] text-white tracking-tight">
                Our Clients,<br />
                <span className="text-[#B4F000]">Real Growth.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-xs pt-1">
                From established companies to fast-growing businesses, we build systems that create measurable commercial impact.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/work')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B4F000] hover:underline cursor-pointer group"
                >
                  <span>View All Case Studies</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Main Area (lg:col-span-9): Top Logos + Center Card & Right Cards */}
            <div className="lg:col-span-9 min-w-0 space-y-5 sm:space-y-6 w-full">
              {/* Top Client Logos & Carousel Controls Bar */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-white/10 overflow-x-auto no-scrollbar w-full min-w-0">
                {/* 5 Client Logos with Dividers */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-7 shrink min-w-0">
                  {/* Logo 1: Raaga Interiors */}
                  <button
                    onClick={() => setActiveCaseIdx(0)}
                    className={`flex flex-col items-start leading-none transition-opacity cursor-pointer shrink-0 ${activeCaseIdx === 0 ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <span className="font-serif text-base sm:text-lg tracking-tight text-white font-normal">Raaga</span>
                    <span className="text-[8px] font-mono tracking-[0.25em] text-slate-400 uppercase mt-0.5">INTERIORS</span>
                  </button>

                  <div className="h-5 sm:h-6 w-px bg-white/10 shrink-0" />

                  {/* Logo 2: Sanskar Realty */}
                  <button
                    onClick={() => setActiveCaseIdx(1)}
                    className={`flex items-center gap-2 transition-opacity cursor-pointer shrink-0 ${activeCaseIdx === 1 ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <svg className="w-4 h-5 sm:w-5 sm:h-6 text-slate-300" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="10" width="5" height="16" rx="1" />
                      <rect x="10" y="4" width="5" height="22" rx="1" />
                      <rect x="17" y="14" width="5" height="12" rx="1" />
                    </svg>
                    <div className="leading-tight text-left">
                      <span className="font-heading font-bold text-xs text-white block">Sanskar</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-300 font-sans block">Realty</span>
                    </div>
                  </button>

                  <div className="h-5 sm:h-6 w-px bg-white/10 shrink-0" />

                  {/* Logo 3: Nova Distribution */}
                  <button
                    onClick={() => setActiveCaseIdx(2)}
                    className={`flex items-center gap-2 transition-opacity cursor-pointer shrink-0 ${activeCaseIdx === 2 ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L22 20H15.5L12 13L8.5 20H2L12 2Z" />
                    </svg>
                    <div className="leading-tight text-left">
                      <span className="font-heading font-black text-[11px] sm:text-xs text-white tracking-wider block">NOVA</span>
                      <span className="text-[7px] sm:text-[8px] font-mono text-slate-400 tracking-widest block uppercase">DISTRIBUTION</span>
                    </div>
                  </button>

                  <div className="h-5 sm:h-6 w-px bg-white/10 shrink-0" />

                  {/* Logo 4: Cleanzo */}
                  <button
                    onClick={() => setActiveCaseIdx(3)}
                    className={`flex items-center gap-1.5 sm:gap-2 transition-opacity cursor-pointer shrink-0 ${activeCaseIdx === 3 ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                    <span className="font-heading font-black text-[11px] sm:text-xs tracking-wider text-white uppercase">CLEANZO</span>
                  </button>

                  <div className="h-5 sm:h-6 w-px bg-white/10 shrink-0 hidden sm:block" />

                  {/* Logo 5: Avani Land Developers */}
                  <div className="hidden sm:flex items-center gap-2 opacity-60 text-slate-300 shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-1.5 3-4 6-7 8 3 1 6 3 7 7 1-4 4-6 7-7-3-2-5.5-5-7-8z" />
                    </svg>
                    <div className="leading-tight text-left">
                      <span className="font-serif font-bold text-xs text-white block">Avani</span>
                      <span className="text-[8px] font-mono text-slate-400 tracking-wider block uppercase">LAND DEVELOPERS</span>
                    </div>
                  </div>
                </div>

                {/* Carousel Prev / Next Navigation Arrows */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveCaseIdx((prev) => (prev > 0 ? prev - 1 : caseStudiesList.length - 1))}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#15234E] hover:bg-[#1E3068] text-white/90 flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                    aria-label="Previous case study"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActiveCaseIdx((prev) => (prev < caseStudiesList.length - 1 ? prev + 1 : 0))}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#B4F000] hover:bg-[#A3E600] text-[#080E28] flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                    aria-label="Next case study"
                  >
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Grid: Center Mega Card (lg:col-span-7) + Right Cards Stack (lg:col-span-5) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch w-full min-w-0">
                {/* Center Mega Featured Card (lg:col-span-7) */}
                <div className="lg:col-span-7 min-w-0 rounded-3xl overflow-hidden bg-[#070D28] border border-white/10 shadow-2xl flex flex-col justify-between h-full">
                  {/* Top Photographic Area */}
                  <div className="relative flex-1 min-h-[360px] sm:min-h-[400px] p-5 sm:p-7 flex flex-col justify-between overflow-hidden">
                    <img
                      src={activeCase.image}
                      alt={activeCase.client}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060B24]/95 via-[#060B24]/75 to-transparent pointer-events-none" />

                    {/* Top Badge */}
                    <div className="relative z-10">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#F1FCE2] text-[#1E293B] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                        FEATURED CASE STUDY
                      </span>
                    </div>

                    {/* Main Copy Inside Photo Card */}
                    <div className="relative z-10 space-y-2.5 pt-4">
                      {/* Client Logo / Wordmark */}
                      <div className="space-y-0.5">
                        <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-none font-normal">
                          {activeCase.client.split(' ')[0]}
                        </div>
                        <div className="text-[10px] font-mono tracking-[0.3em] text-slate-300 uppercase">
                          {activeCase.client.split(' ').slice(1).join(' ') || 'SOLUTIONS'}
                        </div>
                        <div className="text-xs text-slate-400 font-sans pt-0.5">
                          {activeCase.industry}
                        </div>
                      </div>

                      {/* Headline */}
                      <h3 className="text-lg sm:text-xl lg:text-[22px] xl:text-[25px] font-heading font-bold text-white leading-[1.2] max-w-md pt-1">
                        {activeCase.headline}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-200/90 leading-relaxed font-sans max-w-sm">
                        {activeCase.description || activeCase.sgsApproach}
                      </p>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <button
                          onClick={() => onNavigate('/work')}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B4F000] text-[#080E28] hover:bg-[#A3E600] text-xs font-heading font-extrabold uppercase tracking-wider cursor-pointer shadow-md transition-all group"
                        >
                          <span>View Full Case Study</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom White Metrics Bar */}
                  <div className="bg-white text-[#080E28] p-4 sm:p-5 grid grid-cols-3 gap-2.5 sm:gap-4 divide-x divide-slate-200 min-w-0">
                    {activeCase.metrics.map((m, mIdx) => (
                      <div key={mIdx} className={`min-w-0 ${mIdx > 0 ? 'pl-2.5 sm:pl-4' : ''}`}>
                        <div className="text-xl sm:text-2xl lg:text-[26px] font-heading font-black text-[#080E28] tracking-tight leading-none">
                          {m.value}
                        </div>
                        <div className="text-[11px] sm:text-xs font-heading font-bold text-slate-800 leading-tight mt-1.5 truncate">
                          {m.label}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-[#16A34A] mt-1 flex items-center gap-1 font-sans leading-tight">
                          {m.sub || 'From setup to measurable results'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 4 Selectable Case Study Cards (lg:col-span-5) */}
                <div className="lg:col-span-5 min-w-0 flex flex-col justify-between h-full space-y-0">
                  <div className="grid grid-rows-4 gap-2.5 sm:gap-3 flex-1 pb-2">
                    {caseStudiesList.map((cs, idx) => {
                      const isActive = activeCaseIdx === idx;
                      return (
                        <div
                          key={cs.id}
                          onClick={() => setActiveCaseIdx(idx)}
                          className={`p-3 sm:p-3.5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between gap-2.5 sm:gap-3 h-full min-w-0 ${
                            isActive
                              ? 'bg-[#070E30] border-2 border-[#B4F000] shadow-lg shadow-lime-500/10'
                              : 'bg-[#081033] border border-white/10 hover:border-white/25 hover:bg-[#0A143E]'
                          }`}
                        >
                          {/* Thumbnail */}
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                            <img
                              src={cs.image}
                              alt={cs.client}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                            <h4 className="font-heading font-bold text-white text-sm sm:text-[15px] truncate">
                              {cs.client}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-400 font-sans truncate">
                              {cs.industry}
                            </p>

                            {/* 3 Compact Metrics Grid matching Reference Image */}
                            <div className="grid grid-cols-3 gap-1 pt-1 min-w-0">
                              {cs.compactMetrics?.map((cm, cIdx) => (
                                <div key={cIdx} className="min-w-0">
                                  <div className="font-mono font-bold text-[#B4F000] text-xs sm:text-[13px] leading-tight truncate">
                                    {cm.val}
                                  </div>
                                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-sans leading-tight truncate">
                                    {cm.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Circle Button */}
                          <div className="shrink-0 pl-0.5">
                            {isActive ? (
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B4F000] text-[#080E28] flex items-center justify-center shadow-md">
                                <ArrowRight size={14} strokeWidth={2.5} />
                              </div>
                            ) : (
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 text-slate-400 flex items-center justify-center hover:border-white/40 hover:text-white transition-colors">
                                <ArrowRight size={13} />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Link in Right Column (Left-Aligned below Card 4) */}
                  <div className="pt-1.5 text-left">
                    <button
                      onClick={() => onNavigate('/work')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#B4F000] hover:underline cursor-pointer group"
                    >
                      <span>View All Case Studies</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          08. WHY BUSINESSES CHOOSE SGS (SECTION 14)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-white text-[#141414] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2033FF] font-heading">
              DIFFERENTIATORS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold leading-[1.1] text-[#080E32] tracking-tight">
              Why Businesses Choose SGS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Built from the ground up to solve the real operational challenges ambitious businesses face when scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {whySgsPoints.map((pt) => (
              <div
                key={pt.num}
                className="p-5 rounded-2xl bg-[#F5FAFF] border border-slate-200 space-y-2 hover:border-[#2033FF] transition-all shadow-xs"
              >
                <div className="text-xs font-mono font-bold text-[#2033FF]">{pt.num}</div>
                <h3 className="text-base font-heading font-bold text-[#080E32] leading-snug">{pt.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          09. FINAL CONVERSION BANNER (SECTION 43)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-18 sm:py-24 bg-[#080E32] text-white overflow-hidden text-center">
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#AFEB00] text-xs font-mono font-bold uppercase tracking-wider">
            <span>START THE CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-heading font-bold leading-[1.08] text-white tracking-tight">
            Ready to Identify Your Next Growth Opportunity?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Tell us where your business is today, what is holding it back and where you want to go.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenProjectModal('general')}
              className="px-8 py-4 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={onOpenDiagnostic}
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              <span>Take the Growth Diagnostic</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 font-sans pt-2">
            No obligation. Just a practical conversation about your business.
          </p>
        </div>
      </section>

    </div>
  );
};
