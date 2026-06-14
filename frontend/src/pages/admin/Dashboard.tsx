import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Database, Inbox, User, Phone, Mail, Building, Calendar, Tag } from 'lucide-react';
import { apiUrl } from '../../lib/api';

interface Message {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  interest: string;
  message: string;
  createdAt: string;
}

export default function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = sessionStorage.getItem('adminToken');
      
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const response = await fetch(apiUrl('/api/messages'), {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 401 || response.status === 403) {
          sessionStorage.removeItem('adminToken');
          navigate('/admin/login');
          return;
        }

        const data = await response.json();
        if (data.success) {
          setMessages(data.messages);
        } else {
          setError('Failed to load messages');
        }
      } catch (err) {
        setError('Connection error');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="text-blue-700 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
          <Database className="w-4 h-4 animate-pulse" /> Loading Database...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Top Navbar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-700 flex items-center justify-center rounded-sm">
              <Database className="w-4 h-4" />
            </div>
            <span className="font-black uppercase tracking-widest text-sm">Admin Control Panel</span>
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2 flex items-center gap-3">
              <Inbox className="w-8 h-8 text-blue-700" /> Inbox Requests
            </h1>
            <p className="text-sm font-medium text-slate-500">
              Total submissions: {messages.length}
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-600 rounded-sm text-sm font-bold">
            {error}
          </div>
        )}

        {messages.length === 0 && !error ? (
          <div className="bg-white border border-slate-200 p-16 rounded-sm text-center">
            <Inbox className="w-16 h-16 text-slate-200 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">No messages yet</h3>
          </div>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-black uppercase">
                      {msg.firstName[0]}{msg.lastName[0]}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{msg.firstName} {msg.lastName}</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3" /> 
                        {new Date(msg.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Tag className="w-3 h-3" /> {msg.interest}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm text-slate-400 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email</span>
                        <a href={`mailto:${msg.email}`} className="text-sm font-medium text-blue-600 hover:underline truncate block">
                          {msg.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm text-slate-400 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Phone</span>
                        <a href={`tel:${msg.phone}`} className="text-sm font-medium text-slate-700">
                          {msg.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm text-slate-400 shrink-0">
                        <Building className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Organization</span>
                        <span className="text-sm font-medium text-slate-700 truncate block">
                          {msg.organization || 'Not provided'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 border border-slate-100 p-5 rounded-sm">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Message Details</span>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
