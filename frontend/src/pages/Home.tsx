import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        ></div>
        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="hidden lg:block absolute -left-10 md:-left-12 top-2 w-1 h-24 bg-blue-700"></div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase mb-6">
                COMPLETE<br />
                <span className="text-blue-700">TECHNOLOGY</span><br />
                ECOSYSTEM.
              </h1>
              <p className="mt-6 text-slate-600 max-w-lg text-sm leading-relaxed mb-10 font-medium">
                Stream Bird India is your single point of contact for advanced network connectivity and physical IT infrastructure deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/connectivity"
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Explore Connectivity
                </Link>
                <Link
                  to="/hardware"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-blue-700 text-slate-900 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors bg-white/60 backdrop-blur-sm"
                >
                  Hardware Solutions
                </Link>
              </div>
            </div>
            
            <div className="relative z-0 hidden lg:flex justify-center items-center perspective-[1000px]">
              <div className="w-full max-w-sm aspect-square rounded-full flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden bg-white">
                 <img 
                   src="/logo.png" 
                   alt="Stream Bird India Logo" 
                   className="w-full h-full object-contain p-4 mix-blend-multiply"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 text-center">
            Authorized Partnerships & Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-opacity duration-300">
            <div className="flex flex-col items-center">
              <div className="h-10 w-24 bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-800 uppercase tracking-wider rounded-sm">RELIANCE JIO</div>
              <span className="text-[10px] mt-2 font-bold text-slate-500 uppercase tracking-wider">Authorized</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-24 bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-800 uppercase text-center tracking-wider rounded-sm">VINDHYA TECH</div>
              <span className="text-[10px] mt-2 font-bold text-slate-500 uppercase tracking-wider">Solutions</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-24 bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold tracking-wider rounded-sm uppercase">GeM Portal</div>
              <span className="text-[10px] mt-2 text-slate-900 font-bold uppercase tracking-wider">Registered</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-24 border border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-700 tracking-wider rounded-sm uppercase">MSME / GST</div>
              <span className="text-[10px] mt-2 font-bold text-slate-500 uppercase tracking-wider">Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
              Core Competencies
            </h2>
            <p className="text-3xl font-black text-slate-900 tracking-tighter uppercase max-w-2xl">
              Bridging the gap between network providers and physical IT infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-slate-200 p-6 rounded-sm bg-slate-50 hover:border-blue-300 transition-colors flex flex-col">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">01. Service Connectivity</h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                Dedicated internet lines, MPLS, and Cloud solutions partnered with industry leaders to guarantee uptime.
              </p>
              <Link to="/connectivity" className="text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-blue-700 inline-flex items-center transition-colors">
                Learn more <span className="text-blue-700 ml-2">→</span>
              </Link>
            </div>

            <div className="border border-slate-200 p-6 rounded-sm bg-slate-50 hover:border-blue-300 transition-colors flex flex-col">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">02. Hardware Specialists</h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                Expert installation of enterprise-grade routers, firewalls, and campus-wide surveillance systems.
              </p>
              <Link to="/hardware" className="text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-blue-700 inline-flex items-center transition-colors">
                Learn more <span className="text-blue-700 ml-2">→</span>
              </Link>
            </div>

            <div className="border border-slate-200 p-6 rounded-sm bg-slate-50 hover:border-blue-300 transition-colors flex flex-col">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">03. Government Solutions</h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                Direct, transparent, and paperless IT procurement services via the GeM portal for public sector entities.
              </p>
              <Link to="/government" className="text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-blue-700 inline-flex items-center transition-colors">
                Learn more <span className="text-blue-700 ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
              Client Testimonials
            </h2>
            <p className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
              Trusted by industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-8 rounded-sm relative flex flex-col">
              <div className="text-blue-50 font-serif text-7xl leading-none absolute top-4 right-6">"</div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8 relative z-10 flex-1">
                "Stream Bird completely overhauled our campus connectivity. The seamless integration of their leased lines with the new hardware access points solved our latency issues overnight."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">
                  SJ
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Dr. Sanjeev Joshi</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">IT Director, Regional Tech College</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-sm relative flex flex-col">
              <div className="text-blue-50 font-serif text-7xl leading-none absolute top-4 right-6">"</div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8 relative z-10 flex-1">
                "Working with them through the GeM portal was effortless. Their transparency, professional hardware installation, and prompt support met all our strict corporate requirements."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">
                  AM
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Anita Menon</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Procurement Head, State Govt Dept</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-sm relative flex flex-col">
              <div className="text-blue-50 font-serif text-7xl leading-none absolute top-4 right-6">"</div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8 relative z-10 flex-1">
                "We needed a robust security infrastructure for our new regional office. They deployed enterprise firewalls and IP surveillance securely. Truly a one-stop solution."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">
                  RK
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Rajiv Kapoor</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">VP Operations, Apex Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">Upgrade Your<br/><span className="text-blue-400">Infrastructure.</span></h2>
          <p className="text-sm font-medium text-blue-200 mb-10 max-w-xl mx-auto uppercase tracking-wider leading-relaxed">
            Get a tailored consultation for your corporate office, college campus, or government institution today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-sm"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
