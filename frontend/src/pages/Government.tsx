import { ShieldCheck, FileCheck, Landmark, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Government() {
  const caseStudies = [
    {
      title: "Government State Medical College, Mirzapur",
      type: "Internet bandwidth & IT reapplication",
      status: "Ongoing"
    },
    {
      title: "Government District Hospital, Mirzapur",
      type: "Hospital-wide Network Infrastructure",
      status: "Ongoing"
    },
    {
      title: "Government Divisional Hospital, Mirzapur",
      type: "Connectivity & Surveillance",
      status: "Ongoing"
    },
    {
      title: "Government State Medical College, Fatehpur",
      type: "Campus IT & Network Installation",
      status: "Ongoing"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <section className="bg-emerald-900 border-b border-emerald-800 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Landmark className="absolute -right-20 -bottom-20 w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative max-w-3xl">
            <div className="absolute -left-6 md:-left-8 top-1 w-1 h-12 bg-emerald-500"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-800/50 text-emerald-200 text-[10px] font-bold mb-6 border border-emerald-700 uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> Official GeM Registered Provider
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              Government <span className="text-emerald-500">Solutions</span>
            </h1>
            <p className="text-sm font-medium text-emerald-100/90 leading-relaxed uppercase tracking-widest max-w-2xl">
              Enabling paperless, transparent, and direct IT procurement for Central and State government ministries, departments, and public sector undertakings.
            </p>
          </div>
        </div>
      </section>

      <section id="gem" className="py-16 md:py-24 flex-1 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Why source through GeM with us?</h2>
              <p className="text-sm text-slate-600 mb-10 leading-relaxed font-medium">
                As a registered service provider on the Government e-Marketplace (GeM), Stream Bird India provides direct service access to government buyers, ensuring compliance and efficiency.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6 p-6 border border-slate-200 bg-white rounded-sm hover:border-emerald-700 transition-colors">
                  <div className="shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 text-emerald-700 rounded-sm flex items-center justify-center">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Paperless & Cashless</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Promoting a digital ecosystem for secure, contactless procurement activities, fully aligned with national IT initiatives.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border border-slate-200 bg-white rounded-sm hover:border-emerald-700 transition-colors">
                  <div className="shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 text-emerald-700 rounded-sm flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Streamlined Procurement</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Benefit from built-in online features for tracking supply rollouts, managing milestone payments, and rapid grievance resolution.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border border-slate-200 bg-white rounded-sm hover:border-emerald-700 transition-colors">
                  <div className="shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 text-emerald-700 rounded-sm flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Transparent Processes</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Operations on a pan-India level-playing field ensure fair, accountable, and legally sound business-to-government operations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Case Studies */}
            <div className="bg-slate-900 p-8 md:p-10 rounded-sm border border-slate-800 text-white shadow-xl h-fit">
              <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-8 border-b border-slate-800 pb-4">Active Deployments Overview</h2>
              
              <div className="space-y-6">
                {caseStudies.map((item, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-none"></div>
                    <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.type}</p>
                    <span className="inline-block mt-3 text-[10px] font-bold bg-slate-800 text-emerald-400 border border-emerald-900 px-2 py-1 rounded-sm uppercase tracking-widest">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">
                  Ready to upgrade your digital infrastructure?
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 text-white hover:bg-emerald-800 px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Contact Implementation Team
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
