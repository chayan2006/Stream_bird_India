import { Link } from 'react-router-dom';
import { Target, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl relative">
            <div className="absolute -left-6 md:-left-8 top-1 w-1 h-12 bg-blue-700"></div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              About Stream Bird
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Established in August 2024, Stream Bird India emerged with a singular vision: to help corporate clients seamlessly navigate their digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Left Column: Story & Mission */}
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Mission</h2>
                <div className="p-6 border border-slate-200 bg-white rounded-sm">
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    To provide a complete technology ecosystem by merging high-performance connectivity with expert hardware installation. We aim to be the definitive single point of contact for enterprises, educational institutions, and government bodies upgrading their digital infrastructure.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Company Profile</h2>
                <ul className="space-y-4 border border-slate-200 bg-white p-6 rounded-sm text-sm">
                  <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Established</span>
                    <span className="text-slate-900 font-semibold">August 26th, 2024</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-slate-100 pb-3 pt-1">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Location</span>
                    <span className="text-slate-900 font-semibold">Mirzapur, U.P.</span>
                  </li>
                  <li className="flex items-center justify-between pt-1">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Certifications</span>
                    <span className="text-slate-900 font-semibold text-right">MSME, GST, GeM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Leadership */}
            <div className="bg-slate-900 p-8 md:p-10 rounded-sm border border-slate-800 text-white h-fit">
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-8">Leadership</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">Mr. Akshat Jaiswal</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6">Founder & Director</p>
                <div className="space-y-4 text-slate-300 text-sm font-medium leading-relaxed">
                  <p>
                    Under the leadership of Mr. Akshat Jaiswal and his dedicated team, Stream Bird India brings extensive experience in managing end-to-end enterprise operations and large-scale IT projects.
                  </p>
                  <p>
                    With a background characterized by strategic planning, cross-functional collaboration, and successfully handling major Government Tenders via the GeM portal, the leadership team ensures operational excellence and scalable technical infrastructures.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6">
                <h4 className="font-bold text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-4">Core Competencies</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-300 font-semibold">
                    <div className="w-1.5 h-1.5 bg-blue-500"></div>
                    End-to-end enterprise operations
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 font-semibold">
                    <div className="w-1.5 h-1.5 bg-blue-500"></div>
                    Large-scale IT deployments
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 font-semibold">
                    <div className="w-1.5 h-1.5 bg-blue-500"></div>
                    Government tender execution
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-t border-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
            <p className="text-3xl font-black text-slate-900 tracking-tighter uppercase">The Stream Bird Advantage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-slate-200 bg-slate-50 flex flex-col hover:border-blue-700 transition-colors cursor-default">
              <div className="w-12 h-12 bg-white border border-slate-200 text-blue-700 flex items-center justify-center mb-6 rounded-sm">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Single Point of Contact</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium flex-1">
                We eliminate the friction of dealing with multiple vendors. We operate as both your ISP for connectivity and your IT contractor for hardware deployment.
              </p>
            </div>
            
            <div className="p-8 border border-slate-200 bg-slate-50 flex flex-col hover:border-blue-700 transition-colors cursor-default">
              <div className="w-12 h-12 bg-white border border-slate-200 text-blue-700 flex items-center justify-center mb-6 rounded-sm">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">End-to-End Execution</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium flex-1">
                From initial planning and network architecture to physical installation and continuous maintenance, we manage the entire project lifecycle seamlessly.
              </p>
            </div>
            
            <div className="p-8 border border-slate-200 bg-slate-50 flex flex-col hover:border-blue-700 transition-colors cursor-default">
              <div className="w-12 h-12 bg-white border border-slate-200 text-blue-700 flex items-center justify-center mb-6 rounded-sm">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Enterprise Reliability</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium flex-1">
                Partnering with top-tier ISPs and deploying premium hardware, we deliver solutions with guaranteed SLAs designed for mission-critical enterprise operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
