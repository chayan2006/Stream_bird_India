import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-full p-1 shadow-sm">
                <img src="/logo.png" alt="Stream Bird India" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight uppercase">
                Stream Bird India
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 font-medium italic">
              "Empowering digital transformation through a complete technology ecosystem."
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-[0.2em]">Services</h3>
            <ul className="space-y-3 text-xs text-slate-400 font-medium">
              <li><Link to="/connectivity" className="hover:text-blue-400 transition-colors">Connectivity Solutions</Link></li>
              <li><Link to="/hardware" className="hover:text-blue-400 transition-colors">Hardware Deployment</Link></li>
              <li><Link to="/government" className="hover:text-blue-400 transition-colors">Government IT (GeM)</Link></li>
              <li><Link to="/connectivity" className="hover:text-blue-400 transition-colors">Campus Wi-Fi</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-[0.2em]">Company</h3>
            <ul className="space-y-3 text-xs text-slate-400 font-medium">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-[0.2em]">Contact</h3>
            <ul className="space-y-4 text-xs font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  1st Floor, Flat No. 61K<br />
                  Purani Tehsil Ki Gali<br />
                  Mirzapur, UP 231001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-500 shrink-0" />
                <div className="flex flex-col text-slate-400 space-y-1">
                  <a href="tel:+917307053754" className="hover:text-blue-400">+91 73070 53754</a>
                  <a href="tel:+917068430277" className="hover:text-blue-400">+91 70684 30277</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                <a href="mailto:Stream.bird24@outlook.com" className="text-slate-400 hover:text-blue-400">
                  Stream.bird24@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Stream Bird India. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="border border-slate-700 px-3 py-1 rounded-sm text-[10px] uppercase tracking-wider">MSME Certified</span>
            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-sm text-[10px] uppercase tracking-wider font-bold">GeM Registered</span>
            <Link to="/admin" className="text-slate-600 hover:text-slate-400 ml-4 transition-colors">
              <Lock className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
