import { Server, ShieldAlert, Video, Router, Settings, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hardware() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl relative">
            <div className="absolute -left-6 md:-left-8 top-1 w-1 h-12 bg-blue-700"></div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Hardware Deployment
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We translate powerful network connections into functional physical infrastructure through expert installation and precise configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="flex gap-6 p-6 border border-slate-200 bg-white rounded-sm hover:border-blue-700 transition-colors">
                <div className="shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 text-blue-700 rounded-sm flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Network Hardware Installation</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Deployment of essential, enterprise-grade network hardware. We handle the physical installation of <strong>routers, core switches, edge switches, and wireless access points</strong> to create a robust structural backbone for your organization.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 border border-slate-200 bg-white rounded-sm hover:border-blue-700 transition-colors">
                <div className="shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 text-blue-700 rounded-sm flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Security & Traffic Management</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Connecting to the internet securely requires more than just a wire. We set up and configure <strong>advanced hardware firewalls and load balancers</strong> to defend your internal network and efficiently distribute high-volume traffic.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 border border-slate-200 bg-white rounded-sm hover:border-blue-700 transition-colors">
                <div className="shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 text-blue-700 rounded-sm flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Surveillance Systems</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Complete physical security solutions. We manage the setup, wiring, and configuration of <strong>IP security cameras</strong> and NVR systems for monitoring massive corporate offices and educational campus environments.
                  </p>
                </div>
              </div>
              
               <div className="flex gap-6 p-6 border border-slate-200 bg-white rounded-sm hover:border-blue-700 transition-colors">
                <div className="shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 text-blue-700 rounded-sm flex items-center justify-center">
                  <Router className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Configuration & Optimization</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Hardware is only as good as its programming. Our team ensures that every router and switch is precisely configured for <strong>efficient data flow, VLAN segmentation, and long-term network management</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual/Feature Box */}
            <div className="bg-blue-700 rounded-sm p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center border border-blue-600">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Tool className="w-64 h-64" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">The Dual-Role Advantage</h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed font-medium">
                  Most companies hire an ISP for the connection and a separate IT contractor for the hardware. Stream Bird India operates as both.
                </p>
                <p className="text-blue-100 text-sm mb-10 leading-relaxed font-medium">
                  As a channel partner for ISPs and a tier-one hardware installation specialist, we eliminate the friction of dealing with multiple vendors. One point of contact, total deployment.
                </p>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Schedule an Installation <Settings className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
