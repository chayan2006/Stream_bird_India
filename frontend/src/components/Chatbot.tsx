import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';

const apiKey = process.env.GEMINI_API_KEY || 'dummy_key_to_prevent_crash';
const ai = new GoogleGenAI({ apiKey });

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: 'Hi! How can I assist you with Stream Bird India today? I can answer questions about our connectivity services, hardware deployments, government solutions, or provide contact information.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userContent = input.trim();
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userContent,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Build conversation history
      const historyContent = messages
        .filter(msg => msg.id !== 'welcome')
        .map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }]
        }));

      const contents = [
        ...historyContent,
        {
          role: 'user',
          parts: [{ text: userContent }]
        }
      ];
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: `You are a helpful customer support chatbot for Stream Bird India, an IT infrastructure and networking company based in Mirzapur, Uttar Pradesh.
          
          About Stream Bird India:
          Established August 26th, 2024. MSME, GST Registered, GeM Portal Service Provider.
          Founder & Director: Mr. Akshat Jaiswal.
          
          Services:
          1. Internet Leased Lines (ILL): Dedicated internet for businesses.
          2. MPLS: Secure WAN technology.
          3. SIP Trunking & Cloud: Virtual voice lines (VoIP).
          4. Campus & College Wi-Fi: High-density secure Wi-Fi.
          5. Cyber-security: NGFW, load balancers, firewalls.
          6. WB-IOT: Wireless broadband IoT.
          
          Hardware: Installation of routers, core/edge switches, access points, IP security cameras.
          Hardware Warranty: Standard 1-year to 3-year OEM warranties on all deployed hardware. Stream Bird India also provides a 1-year free service/maintenance warranty on all installations.
          SLAs (Service Level Agreements): 99.5% uptime SLA for Internet Leased Lines (ILL). 24/7 network monitoring and rapid response times for mission-critical infrastructure.
          Government Solutions: Registered on GeM portal for paperless, cashless, transparent procurement for government entities.
          
          Contact: 
          Address: 1st Floor, Flat No. 61K, Purani Tehsil Ki Gali, Near Makka Khalifa Masjid, Pakki Sarai, Mirzapur, U.P. 231001.
          Phone: +91 73070 53754 / +91 70684 30277
          Email: Stream.bird24@outlook.com
          
          Keep your answers concise, friendly, and helpful. Format your responses plainly without excessive markdown. Guide users to contact the team if they need specific quotes or have complex needs.`,
        }
      });
      
      const textResponse = response.text || "I'm sorry, I couldn't process that.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: textResponse,
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: "Oops! Something went wrong. Please try asking again or contact us directly.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-slate-200 shadow-2xl rounded-sm w-[360px] h-[500px] mb-4 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-700 text-white p-4 flex items-center justify-between shadow-md relative z-10">
              <div className="flex flex-col">
                <span className="font-bold text-sm uppercase tracking-wide">Stream Bird Assistant</span>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Online</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-white p-1 hover:bg-blue-800 rounded-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start gap-2'}`}
                >
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[85%] p-3 rounded-sm text-sm font-medium leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-blue-700 text-white shadow-sm' 
                        : 'bg-white text-slate-800 border border-slate-200 shadow-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-700" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 border border-slate-300 rounded-sm px-3 py-2 text-sm outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 font-medium text-slate-900 placeholder:text-slate-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-700 hover:bg-blue-800 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors relative"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
