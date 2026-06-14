import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { apiUrl } from '../lib/api';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      interest: (form.elements.namedItem('serviceType') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          form.reset();
        }, 3000);
      } else {
        alert('Failed to send request. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto relative inline-block">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Contact & Consultation
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Ready to build a better infrastructure? Reach out to Stream Bird India to request a quote or schedule a technical consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-8">Registered Official Office</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 border border-slate-200 bg-white rounded-sm hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-blue-700 rounded-none flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wide">Address</h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        1st Floor, Flat No. 61K<br />
                        Purani Tehsil Ki Gali<br />
                        Near Makka Khalifa Masjid, Pakki Sarai<br />
                        Mirzapur, Uttar Pradesh, 231001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border border-slate-200 bg-white rounded-sm hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-blue-700 rounded-none flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wide">Phone</h3>
                      <div className="flex flex-col text-slate-600 text-sm font-medium space-y-1 mt-2">
                        <a href="tel:+917307053754" className="hover:text-blue-700 transition-colors">+91 73070 53754</a>
                        <a href="tel:+917068430277" className="hover:text-blue-700 transition-colors">+91 70684 30277</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border border-slate-200 bg-white rounded-sm hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-blue-700 rounded-none flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wide">Email</h3>
                      <a href="mailto:Stream.bird24@outlook.com" className="text-slate-600 hover:text-blue-700 text-sm font-medium transition-colors mt-2 block">
                        Stream.bird24@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Request a Quote Form */}
            <div className="bg-white p-8 md:p-10 rounded-sm border border-slate-200 h-fit">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Work Email</label>
                    <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Organization / Company</label>
                  <input type="text" id="organization" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" required />
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Primary Interest</label>
                  <select id="serviceType" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium">
                    <option>Connectivity Solutions (Leased Line, MPLS)</option>
                    <option>Hardware Installation & Configuration</option>
                    <option>Wi-Fi for Campus / College</option>
                    <option>Government IT Procurement / GeM</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Project Details</label>
                  <textarea id="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" placeholder="Tell us about your networking or IT infrastructure needs..." required></textarea>
                </div>

                <div className="pt-2">
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className={`w-full flex items-center justify-center gap-2 font-bold text-xs px-8 py-4 rounded-sm uppercase tracking-widest transition-colors overflow-hidden relative ${
                      isSuccess 
                        ? 'bg-green-600 outline-green-600 text-white' 
                        : isSubmitting 
                          ? 'bg-blue-800 text-blue-200 cursor-not-allowed'
                          : 'bg-blue-700 hover:bg-blue-800 text-white'
                    }`}
                    whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                  >
                    <AnimatePresence mode="wait">
                      {isSuccess ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2 absolute"
                        >
                          Request Sent <CheckCircle className="w-4 h-4" />
                        </motion.div>
                      ) : isSubmitting ? (
                        <motion.div
                          key="submitting"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2 absolute"
                        >
                          Sending... 
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <Send className="w-4 h-4 opacity-50" />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2 absolute"
                        >
                          Submit Request <Send className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Placeholder to keep button height proper since absolutely positioned items don't take space */}
                    <div className="opacity-0 flex items-center gap-2">
                       Submit Request <Send className="w-4 h-4" />
                    </div>
                  </motion.button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
