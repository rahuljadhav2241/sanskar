import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import { api } from '../services/api';
import { SGSLogo } from './SGSLogo';
import { SgsBrandMotifsStrip } from './BrandGraphics';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    try {
      await api.subscribeNewsletter(newsletterEmail);
    } catch (err) {
      console.error('Newsletter subscription error:', err);
    }
  };

  return (
    <footer id="corporate-footer" className="relative overflow-hidden bg-[#080E32] text-white font-sans border-t border-white/10">

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-8 lg:px-12 lg:pt-20">

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">

          {/* Col 1: Brand & Statement (Span 4) */}
          <div className="space-y-6 lg:col-span-4 pr-0 lg:pr-6">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center text-left focus:outline-none group"
              aria-label="Sanskar Growth Solutions Home"
            >
              <img
                src="/logo/logo.png"
                alt="Sanskar Growth Solutions"
                className="h-16 sm:h-18 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#AFEB00]">
                Business Growth &amp; Technology Partner
              </div>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-sans">
                Sanskar Growth Solutions — Business Growth Through Technology, Marketing &amp; Innovation.
              </p>
              <div className="text-[11px] font-mono text-slate-400">
                Strategy • Technology • Digital Growth
              </div>
            </div>

            {/* Signature Brand Motifs */}
            <div className="pt-1">
              <SgsBrandMotifsStrip motifSize={28} />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-all hover:border-[#AFEB00] hover:bg-[#AFEB00] hover:text-[#141414]"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-all hover:border-[#AFEB00] hover:bg-[#AFEB00] hover:text-[#141414]"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-all hover:border-[#AFEB00] hover:bg-[#AFEB00] hover:text-[#141414]"
              >
                <Twitter size={14} />
              </a>
              <a
                href="mailto:hello@sanskargrowthsolutions.com"
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-all hover:border-[#AFEB00] hover:bg-[#AFEB00] hover:text-[#141414]"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions (Span 2) */}
          <div className="space-y-4 lg:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-[#AFEB00] font-heading">
              Solutions
            </h5>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-sans">
              {[
                { title: 'Digital Growth', path: '/solutions/digital-growth' },
                { title: 'Technology Solutions', path: '/solutions/technology' },
                { title: 'Brand & Creative', path: '/solutions/brand-creative' },
                { title: 'Automation', path: '/solutions/technology' },
                { title: 'Business Consulting', path: '/solutions/business-consulting' },
              ].map((item) => (
                <li key={item.title}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries (Span 2) */}
          <div className="space-y-4 lg:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-[#AFEB00] font-heading">
              Industries
            </h5>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-sans">
              {[
                'Real Estate',
                'Interior & Construction',
                'B2B & Manufacturing',
                'Professional Services',
                'Technology & SaaS',
                'SMEs'
              ].map((ind) => (
                <li key={ind}>
                  <button
                    onClick={() => onNavigate('/industries')}
                    className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                  >
                    {ind}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company (Span 2) */}
          <div className="space-y-4 lg:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-[#AFEB00] font-heading">
              Company
            </h5>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-sans">
              {[
                { title: 'About', path: '/about' },
                { title: 'Work & Proof', path: '/work' },
                { title: 'Insights', path: '/insights' },
                { title: 'Careers', path: '/careers' },
                { title: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.title}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Join Our Insights (Span 2) */}
          <div className="space-y-4 lg:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-[#AFEB00] font-heading">
              Growth Insights
            </h5>
            <p className="text-xs leading-relaxed text-slate-300 font-sans">
              Get growth ideas, industry analysis, and technology strategies.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-xl border border-[#AFEB00]/40 bg-[#AFEB00]/10 p-2.5 text-xs text-white">
                <CheckCircle2 size={15} className="text-[#AFEB00] shrink-0" />
                <span>Subscribed! Welcome.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center rounded-xl border border-white/20 bg-white/5 p-1 transition-all focus-within:border-[#AFEB00]">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter work email"
                    className="w-full bg-transparent px-2 text-xs text-white placeholder-slate-400 outline-none"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex shrink-0 items-center justify-center rounded-lg bg-[#AFEB00] p-2 text-[#141414] hover:bg-[#9CD100] transition-colors"
                  >
                    <ArrowRight size={13} className="text-[#141414]" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-[11px] text-slate-400 font-sans">
              Serving Businesses from Pune • Working Across India &amp; Global Markets
            </div>
          </div>

        </div>

        {/* Bottom Legal & Slogan Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <div>
            © {new Date().getFullYear()} Sanskar Growth Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => onNavigate('/legal/privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('/legal/terms')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Operational Status Line */}
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
            <span className="font-medium text-xs text-white/90">
              Serving Businesses from Pune • Working Across India &amp; Global Markets
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
