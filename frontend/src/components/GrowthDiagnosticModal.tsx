import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, RefreshCw, Layers, X, Download } from 'lucide-react';
import { GrowthStage } from '../types';
import { api } from '../services/api';

interface GrowthDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSolution?: (solutionSlug: string) => void;
  onOpenContact?: () => void;
  onStartProjectWithDiagnostic?: (stage: GrowthStage, answers: any) => void;
}

export const GrowthDiagnosticModal: React.FC<GrowthDiagnosticModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
  onStartProjectWithDiagnostic
}) => {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('real-estate');
  const [primaryBottleneck, setPrimaryBottleneck] = useState<string>('not-enough-leads');
  const [objective, setObjective] = useState<string>('generate-more-leads');

  if (!isOpen) return null;

  const calculateRecommendation = () => {
    const isAttract = ['not-enough-leads', 'poor-lead-quality', 'weak-digital-presence'].includes(primaryBottleneck);
    const isConvert = ['low-conversion', 'poor-follow-up', 'no-crm'].includes(primaryBottleneck);

    if (isAttract) {
      return {
        stage: 'attract' as GrowthStage,
        bottleneckName: 'Demand Generation & Pipeline',
        focus: 'ATTRACT',
        title: 'Your Primary Growth Bottleneck: Demand Generation',
        whatThisMeans: 'Your business is losing growth at the front of the funnel due to unpredictable enquiry volume, inconsistent traffic, or low-intent buyer inquiries.',
        solution: 'ATTRACT / Demand & Performance Engine',
        priorityModules: [
          'High-Intent Meta & Google Ads Acquisition',
          'Targeted Conversion Landing Pages',
          'Search Engine Optimization (SEO) & Visibility',
          'Qualified Inbound Lead Generation Architecture'
        ]
      };
    } else if (isConvert) {
      return {
        stage: 'convert' as GrowthStage,
        bottleneckName: 'Lead Conversion & Follow-up',
        focus: 'CONVERT',
        title: 'Your Primary Growth Bottleneck: Lead Conversion',
        whatThisMeans: 'Enquiries are entering your business, but leakage occurs due to slow response times, missing CRM tracking, or an unpersuasive digital experience.',
        solution: 'CONVERT / Conversion & Sales Systems',
        priorityModules: [
          'Centralized Lead Management & CRM Setup',
          'Automated Instant WhatsApp & Email Follow-up',
          'Modern High-Converting Business Website',
          'Sales Pipeline & Conversion Rate Optimization'
        ]
      };
    } else {
      return {
        stage: 'scale' as GrowthStage,
        bottleneckName: 'Operational Systems & Automation',
        focus: 'SCALE',
        title: 'Your Primary Growth Bottleneck: Operations & Systems',
        whatThisMeans: 'Manual workflows, disconnected software tools, and fragmented customer data are capping your team’s capacity to handle more business efficiently.',
        solution: 'SCALE / Technology & Automation Systems',
        priorityModules: [
          'Custom Business Software & Workflow Automation',
          'Integrated CRM & Operations Architecture',
          'Executive Business Dashboards & Analytics',
          'Digital Transformation & Process Streamlining'
        ]
      };
    }
  };

  const rec = calculateRecommendation();

  const handleGenerateDiagnostic = async () => {
    setStep(4);
    try {
      await api.submitDiagnostic({
        businessType,
        primaryBottleneck,
        currentRevenueStage: objective,
        recommendedStage: rec.stage,
        recommendedTitle: rec.title,
        recommendedSolution: rec.solution
      });
    } catch (e) {
      console.error('Failed to submit diagnostic:', e);
    }
  };

  const handleCompleteAction = () => {
    if (onStartProjectWithDiagnostic) {
      onStartProjectWithDiagnostic(rec.stage, { businessType, primaryBottleneck, objective });
    } else if (onOpenContact) {
      onOpenContact();
    } else {
      onClose();
    }
  };

  const handleDownloadSummary = () => {
    const summaryText = `SGS GROWTH DIAGNOSTIC SUMMARY
========================================
Business Type: ${businessType}
Primary Challenge: ${primaryBottleneck}
Key Objective: ${objective}

PRIMARY BOTTLENECK:
${rec.title}

WHAT THIS MEANS:
${rec.whatThisMeans}

RECOMMENDED FOCUS: ${rec.focus}
Solution: ${rec.solution}

PRIORITY MODULES:
${rec.priorityModules.map((m, i) => `${i + 1}. ${m}`).join('\n')}

========================================
Sanskar Growth Solutions | sanskargrowthsolutions.com
Strategy • Technology • Digital Growth • Automation
`;
    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SGS-Growth-Diagnostic-Summary.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0F1B64] border border-white/15 rounded-2xl p-6 sm:p-9 text-white shadow-2xl max-h-[92vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6 pt-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A1245] border border-white/10 flex items-center justify-center text-[#AFEB00]">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                SGS Growth Diagnostic
              </h3>
              <p className="text-xs text-slate-300 font-sans mt-0.5">
                Identify your primary business growth bottleneck in 60 seconds
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step 1: Business Profile */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-[2px] w-4 bg-[#AFEB00]" />
                <span className="text-xs uppercase font-mono font-bold text-[#AFEB00] tracking-wider">Step 1 of 3</span>
              </div>
              <h4 className="text-2xl font-heading font-bold text-white tracking-tight">Tell us about your business</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'real-estate', title: 'Real Estate & Property', desc: 'Developers, brokers, spatial builders' },
                { id: 'interior-construction', title: 'Interior & Construction', desc: 'Studios, fitout, construction firms' },
                { id: 'b2b-manufacturing', title: 'B2B & Manufacturing', desc: 'Industrial, OEM, B2B suppliers' },
                { id: 'professional-services', title: 'Professional Services', desc: 'Advisory, consulting, financial, legal' },
                { id: 'technology-saas', title: 'Technology & SaaS', desc: 'Software platforms, IT, tech services' },
                { id: 'sme-growing', title: 'SME / Growing Business', desc: 'Established business seeking scalable growth' },
                { id: 'other', title: 'Other Industry', desc: 'Commercial ventures & trading' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBusinessType(b.id)}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 ${businessType === b.id
                      ? 'bg-[#0A1245] border-[#AFEB00] text-white shadow-sm ring-1 ring-[#AFEB00]/30'
                      : 'bg-[#0A1245] border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                >
                  <div className="text-sm font-semibold font-heading text-white">{b.title}</div>
                  <div className="text-xs text-slate-400 font-sans mt-0.5">{b.desc}</div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                onClick={() => setStep(2)}
                className="px-7 py-3 rounded-xl bg-[#AFEB00] text-[#0F1B64] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#9CD100] flex items-center gap-2 shadow-lg shadow-[#AFEB00]/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Continue to Challenge</span>
                <ArrowRight size={14} className="text-[#0F1B64]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Primary Bottleneck */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-[2px] w-4 bg-[#AFEB00]" />
                <span className="text-xs uppercase font-mono font-bold text-[#AFEB00] tracking-wider">Step 2 of 3</span>
              </div>
              <h4 className="text-2xl font-heading font-bold text-white tracking-tight">What is your biggest growth challenge?</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'not-enough-leads', title: 'Not enough leads', tag: 'Demand' },
                { id: 'poor-lead-quality', title: 'Poor lead quality', tag: 'Demand' },
                { id: 'low-conversion', title: 'Low conversion rate', tag: 'Conversion' },
                { id: 'weak-digital-presence', title: 'Weak digital presence', tag: 'Brand' },
                { id: 'poor-follow-up', title: 'Poor follow-up & tracking', tag: 'Sales' },
                { id: 'manual-processes', title: 'Manual processes', tag: 'Operations' },
                { id: 'no-crm', title: 'No structured CRM system', tag: 'Systems' },
                { id: 'technology-limitations', title: 'Technology limitations', tag: 'Tech' },
                { id: 'scaling-challenges', title: 'Scaling challenges', tag: 'Scale' },
                { id: 'other-challenge', title: 'Other challenge', tag: 'General' },
              ].map((bn) => (
                <button
                  key={bn.id}
                  onClick={() => setPrimaryBottleneck(bn.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${primaryBottleneck === bn.id
                      ? 'bg-[#0A1245] border-[#AFEB00] text-white shadow-sm ring-1 ring-[#AFEB00]/30'
                      : 'bg-[#0A1245] border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold font-heading text-white">{bn.title}</span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                      {bn.tag}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-7 py-3 rounded-xl bg-[#AFEB00] text-[#0F1B64] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#9CD100] flex items-center gap-2 shadow-lg shadow-[#AFEB00]/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Continue to Objectives</span>
                <ArrowRight size={14} className="text-[#0F1B64]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: What are you trying to achieve? */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-[2px] w-4 bg-[#AFEB00]" />
                <span className="text-xs uppercase font-mono font-bold text-[#AFEB00] tracking-wider">Step 3 of 3</span>
              </div>
              <h4 className="text-2xl font-heading font-bold text-white tracking-tight">What are you trying to achieve?</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'generate-more-leads', title: 'Generate more leads' },
                { id: 'increase-sales', title: 'Increase sales & revenue' },
                { id: 'improve-conversion', title: 'Improve conversion rate' },
                { id: 'automate-operations', title: 'Automate operations' },
                { id: 'build-website-system', title: 'Build a new website / system' },
                { id: 'launch-product', title: 'Launch a new business / product' },
                { id: 'scale-operations', title: 'Scale existing operations' }
              ].map((obj) => (
                <button
                  key={obj.id}
                  onClick={() => setObjective(obj.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${objective === obj.id
                      ? 'bg-[#0A1245] border-[#AFEB00] text-white shadow-sm ring-1 ring-[#AFEB00]/30'
                      : 'bg-[#0A1245] border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                >
                  <span className="text-sm font-semibold font-heading text-white">{obj.title}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => setStep(2)}
                className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                onClick={handleGenerateDiagnostic}
                className="px-7 py-3 rounded-xl bg-[#AFEB00] text-[#0F1B64] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#9CD100] flex items-center gap-2 shadow-lg shadow-[#AFEB00]/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Generate Diagnostic Report</span>
                <ArrowRight size={14} className="text-[#0F1B64]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Diagnostic Results */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-[2px] w-4 bg-[#AFEB00]" />
                <span className="text-xs uppercase font-mono font-bold text-[#AFEB00] tracking-wider">Diagnosis Complete</span>
              </div>
              <h4 className="text-2xl font-heading font-bold text-white tracking-tight">{rec.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1 leading-relaxed">{rec.whatThisMeans}</p>
            </div>

            {/* Recommended Solution Package */}
            <div className="p-5 rounded-xl bg-[#0A1245] border border-white/10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs uppercase font-heading font-bold text-slate-300">Recommended SGS Focus:</span>
                <span className="text-xs font-heading font-bold text-[#0F1B64] px-3.5 py-1 rounded-md bg-[#AFEB00]">
                  {rec.focus}
                </span>
              </div>
              <div className="text-sm font-heading font-bold text-white">
                {rec.solution}
              </div>
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-xs font-heading font-semibold text-slate-300 block">Recommended Solutions Modules:</span>
                {rec.priorityModules.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-sans font-medium">
                    <CheckCircle2 size={15} className="text-[#AFEB00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-1.5"
                >
                  <RefreshCw size={13} />
                  <span>Retake</span>
                </button>
                <button
                  onClick={handleDownloadSummary}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-slate-300 hover:text-[#AFEB00] flex items-center gap-1.5 ml-3"
                >
                  <Download size={13} />
                  <span>Download Summary</span>
                </button>
              </div>

              <button
                onClick={handleCompleteAction}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#AFEB00] text-[#0F1B64] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#9CD100] flex items-center justify-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Discuss Your Growth Plan</span>
                <ArrowRight size={15} className="text-[#0F1B64]" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
