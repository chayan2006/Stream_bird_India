import { Briefcase, Building, Activity, ShieldCheck, Network, Award } from 'lucide-react';

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header Section */}
      <section className="bg-blue-900 border-b border-blue-800 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Briefcase className="absolute -right-20 -bottom-20 w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative max-w-3xl">
            <div className="absolute -left-6 md:-left-8 top-1 w-1 h-12 bg-blue-500"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-800/50 text-blue-200 text-[10px] font-bold mb-6 border border-blue-700 uppercase tracking-widest">
              <Award className="w-3 h-3" /> Enterprise Project Experience
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              Featured Case Studies & <span className="text-blue-500">Experience</span>
            </h1>
            <p className="text-sm font-medium text-blue-100/90 leading-relaxed uppercase tracking-widest max-w-2xl">
              Network Infrastructure & Surveillance Lead | Stream Bird India (February 2026 – Present)
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Overview Section */}
          <div className="bg-white p-8 md:p-12 border border-slate-200 rounded-sm shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Building className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Project Overview</h2>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6 max-w-3xl">
                Comprehensive Healthcare Infrastructure Deployment
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="space-y-4">
                  <div className="flex flex-col border-l-4 border-blue-600 pl-4 py-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client</span>
                    <span className="text-sm font-bold text-slate-900">Directorate of Medical Education and Training, Uttar Pradesh</span>
                  </div>
                  <div className="flex flex-col border-l-4 border-blue-600 pl-4 py-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Timeline</span>
                    <span className="text-sm font-bold text-slate-900">February 2026 – February 2027</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Led the end-to-end deployment of critical digital infrastructure, enterprise networking, and centralized IP-based video surveillance networks for government medical colleges and district hospitals to enable unified, real-time monitoring and high-capacity storage optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Solutions Delivered */}
          <div>
            <div className="mb-12 text-center">
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Implementation</h2>
              <p className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Core Solutions Delivered</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="bg-white border border-slate-200 p-8 rounded-sm hover:border-blue-400 transition-colors flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center rounded-sm mb-6 shrink-0">
                  <Network className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black uppercase text-slate-900 tracking-tight mb-4">
                  1. Centralized Surveillance & Network Core
                </h4>
                <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                  Engineered a secure hub-and-spoke surveillance network bridging a primary Mother Location to three distributed healthcare branches.
                </p>
                <div className="space-y-4 flex-1">
                  <div className="bg-slate-50 p-4 border border-slate-100 rounded-sm">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">Mother Hub (Mirzapur)</span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      Deployed 50 Mbps ILL with enterprise Cisco routing. Configured centralized workstation managing a 32-Channel NVR/DVR with 20 TB+ storage.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 border border-slate-100 rounded-sm">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">Spoke Branches</span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      Provisioned dedicated 20 Mbps ILLs at District Male, Female, and Bhairav Prasad Hospitals. Integrated diverse CP Plus and Hikvision hardware.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-white border border-slate-200 p-8 rounded-sm hover:border-blue-400 transition-colors flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center rounded-sm mb-6 shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black uppercase text-slate-900 tracking-tight mb-4">
                  2. High-Throughput Bandwidth Scaling
                </h4>
                <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                  Location: Autonomous State Medical College, Mirzapur.
                </p>
                <div className="bg-slate-50 p-5 border border-slate-100 rounded-sm flex-1">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">Execution & Impact</span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Dynamically scaled and managed network infrastructure from an initial 100 Mbps bandwidth up to 200 Mbps. This ensured zero-downtime, high-throughput network stability required to maintain seamless data replication, telemedicine capabilities, and heavy campus administrative loads.
                  </p>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="bg-white border border-slate-200 p-8 rounded-sm hover:border-blue-400 transition-colors flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center rounded-sm mb-6 shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black uppercase text-slate-900 tracking-tight mb-4">
                  3. Regional Campus Connectivity
                </h4>
                <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                  Location: Autonomous State Medical College, Fatehpur.
                </p>
                <div className="bg-slate-50 p-5 border border-slate-100 rounded-sm flex-1">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">Execution & Impact</span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Supervised the deployment of a long-term Internet Leased Line network with custom-configured Cisco routing hardware. Seamlessly adjusted post-deployment architecture to provision dedicated Static IP routing on-demand to meet evolving client operational and technical needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Standards Section */}
          <div className="bg-slate-900 p-8 md:p-12 border border-slate-800 rounded-sm text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 top-0 opacity-10">
              <ShieldCheck className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Quality & Compliance</h2>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-10 max-w-2xl">
                Enterprise Technical Standards Met
              </h3>
              
              <p className="text-sm text-slate-300 font-medium leading-relaxed mb-10 max-w-3xl">
                Every contract was executed under strict performance metrics via the Government e-Marketplace (GeM) platform, with each individual deployment valued at <span className="text-white font-bold">₹7,00,302.00</span>.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-slate-700 bg-slate-800/50 p-5 rounded-sm backdrop-blur-sm">
                  <div className="text-3xl font-black text-blue-400 mb-2">99.5%</div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Network Uptime</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed">Guaranteed mission-critical network availability per billing quarter.</p>
                </div>
                
                <div className="border border-slate-700 bg-slate-800/50 p-5 rounded-sm backdrop-blur-sm">
                  <div className="text-3xl font-black text-blue-400 mb-2">&lt;1%</div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Packet Drop Rate</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed">Achieved rigorous low-latency performance over intensive 1000-ping testing intervals.</p>
                </div>
                
                <div className="border border-slate-700 bg-slate-800/50 p-5 rounded-sm backdrop-blur-sm">
                  <div className="text-3xl font-black text-blue-400 mb-2">3X</div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Built-in Redundancy</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed">Hybrid media infrastructure across Fiber, Copper, and Wireless (Radio/RF) rings.</p>
                </div>
                
                <div className="border border-slate-700 bg-slate-800/50 p-5 rounded-sm backdrop-blur-sm">
                  <div className="text-3xl font-black text-blue-400 mb-2">DDoS</div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Advanced Protection</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed">Configured block-level Static IP assignments bundled with active DDoS protection.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
