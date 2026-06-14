import { Wifi, RadioReceiver, Phone, Cloud, Shield, Database, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      id: "ill",
      title: "Internet Leased Lines (ILL)",
      icon: <RadioReceiver className="w-6 h-6" />,
      description: "Dedicated, symmetrical internet access designed for businesses. Ensures consistent speeds, maximum uptime, and reliability for data-intensive tasks and critical applications like VoIP and cloud services.",
      features: [
        "Symmetrical upload and download speeds",
        "99.5% Service Level Agreement (SLA) uptime",
        "Dedicated bandwidth not shared with other users"
      ]
    },
    {
      id: "mpls",
      title: "MPLS (Multi-Protocol Label Switching)",
      icon: <Database className="w-6 h-6" />,
      description: "A secure wide-area network (WAN) technology that prioritizes data based on labels. Improves performance and reliability for corporate enterprises with multiple remote locations by creating an efficient private network.",
      features: [
        "Secure data transmission across multiple branch offices",
        "Prioritized routing for mission-critical traffic",
        "Simplified network management and operations"
      ]
    },
    {
      id: "sip",
      title: "SIP Trunking & Cloud",
      icon: <Phone className="w-6 h-6" />,
      description: "Virtual voice lines for businesses, enabling seamless Voice over IP (VoIP) communications. Supports the consolidation of voice and data networks alongside scalable cloud storage options.",
      features: [
        "Cost-effective scaling for voice communications",
        "Seamless integration with existing PBX systems",
        "High-availability cloud storage for secure backups"
      ]
    },
    {
      id: "wifi",
      title: "Campus & College Wi-Fi",
      icon: <Wifi className="w-6 h-6" />,
      description: "Specialized, managed Wi-Fi solutions for educational institutions. We provide reliable, high-density, and secure connectivity for students and staff across entire campuses.",
      features: [
        "High-density access points for large student populations",
        "Unified threat management and content filtering",
        "Seamless roaming across different campus buildings"
      ]
    },
    {
      id: "cyber",
      title: "Cyber-security",
      icon: <Shield className="w-6 h-6" />,
      description: "Protecting corporate networks and sensitive data from modern threats through comprehensive security protocols, services, and advanced traffic management strategies.",
      features: [
        "Next-generation firewall (NGFW) deployment",
        "Comprehensive vulnerability assessments",
        "24/7 network monitoring and response"
      ]
    },
    {
      id: "iot",
      title: "WB-IOT (Wireless Broadband IoT)",
      icon: <Cloud className="w-6 h-6" />,
      description: "Tailored solutions for Internet of Things (IoT) applications, enabling robust communication and high-speed data exchange between connected devices and sensors.",
      features: [
        "Low-latency connections for real-time sensor data",
        "Scalable infrastructure for thousands of devices",
        "End-to-end encryption for IoT communications"
      ]
    }
  ];

  const handleToggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-3xl">
            <div className="absolute -left-6 md:-left-8 top-1 w-1 h-12 bg-blue-500"></div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              Connectivity <span className="text-blue-500">Services</span>
            </h1>
            <p className="text-sm font-medium text-slate-300 leading-relaxed uppercase tracking-widest max-w-2xl">
              Partnering with leading ISPs to deliver enterprise-grade network solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} id={service.id} className="bg-white p-8 border border-slate-200 rounded-sm hover:border-blue-700 transition-colors group flex flex-col scroll-mt-24">
                <div className="w-12 h-12 bg-slate-50 text-blue-700 border border-slate-100 flex items-center justify-center mb-6 rounded-sm group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button 
                    onClick={() => handleToggleExpand(index)}
                    className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors"
                  >
                    {expandedIndex === index ? 'Show Less' : 'Learn More'}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedIndex === index && (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                            <div className="w-1.5 h-1.5 mt-1.5 bg-blue-500 shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-700 border border-blue-600 rounded-sm p-8 md:p-12 text-center max-w-4xl mx-auto text-white">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">Need the hardware to match the network?</h2>
            <p className="text-blue-100 text-sm mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              Our service doesn't stop at the connection. We specialize in deploying the essential routing, switching, and firewall hardware to make your network operational.
            </p>
            <Link
              to="/hardware"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Hardware Deployment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
