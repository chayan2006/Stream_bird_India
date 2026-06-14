import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Solutions', 
      path: '/connectivity',
      subItems: [
        { name: 'Internet Leased Lines', path: '/connectivity#ill' },
        { name: 'MPLS', path: '/connectivity#mpls' },
        { name: 'SIP Trunking', path: '/connectivity#sip' },
        { name: 'Campus Wi-Fi', path: '/connectivity#wifi' },
      ]
    },
    { name: 'Hardware', path: '/hardware' },
    { name: 'Government', path: '/government' },
    { name: 'Experience', path: '/experience' },
    { name: 'Portal', path: '/portal' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="h-16 border-b border-slate-200 bg-white sticky top-0 z-50 shrink-0 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Stream Bird India" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
              <span className="font-bold text-lg md:text-xl tracking-tight text-blue-900 uppercase whitespace-nowrap">
                Stream Bird India
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-blue-700'
                      : 'text-slate-500 hover:text-blue-900'
                  } transition-colors px-1 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-1`}
                >
                  {link.name}
                  {link.subItems && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />}
                </Link>

                {link.subItems && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white border border-slate-200 shadow-xl rounded-sm w-48 py-2">
                      {link.subItems.map(subItem => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            if (subItem.path.includes('#')) {
                              setTimeout(() => {
                                const id = subItem.path.split('#')[1];
                                const element = document.getElementById(id);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }, 100);
                            }
                          }}
                          className="block px-4 py-2 text-[10px] font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-700 uppercase tracking-widest"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-blue-700 text-white hover:bg-blue-800 px-5 py-2 rounded-sm text-xs font-bold uppercase transition-colors"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    isActive(link.path)
                      ? 'bg-slate-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  } block px-3 py-3 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-between`}
                >
                  {link.name}
                </Link>
                {link.subItems && (
                  <div className="pl-6 flex flex-col space-y-1 pb-2">
                    {link.subItems.map(subItem => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={() => {
                          setIsOpen(false);
                          if (subItem.path.includes('#')) {
                            setTimeout(() => {
                              const id = subItem.path.split('#')[1];
                              const element = document.getElementById(id);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, 100);
                          }
                        }}
                        className="block px-3 py-2 rounded-sm text-[10px] font-bold text-slate-500 hover:bg-slate-50 hover:text-blue-700 uppercase tracking-widest"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-blue-700 text-white hover:bg-blue-800 px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
