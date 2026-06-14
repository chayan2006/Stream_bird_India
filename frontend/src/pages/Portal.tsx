import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout, getAccessToken } from '../lib/auth';
import { LogOut, Users, Loader2, X, Phone, Mail, Building, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Contact {
  resourceName: string;
  names?: { displayName: string }[];
  emailAddresses?: { value: string; formattedType?: string; type?: string }[];
  phoneNumbers?: { value: string; formattedType?: string; type?: string }[];
  organizations?: { name?: string; title?: string }[];
}

export default function Portal() {
  const [needsAuth, setNeedsAuth] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoadingContacts, setIsLoadingContacts] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setNeedsAuth(false);
        setUser(user);
        setToken(token);
        fetchContacts(token);
      },
      () => {
        setNeedsAuth(true);
        setUser(null);
        setToken(null);
        setContacts([]);
        setSelectedContact(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setToken(result.accessToken);
        setUser(result.user);
        setNeedsAuth(false);
        fetchContacts(result.accessToken);
      }
    } catch (err: any) {
      console.error('Login failed:', err);
      setError('Failed to sign in. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const fetchContacts = async (accessToken: string) => {
    setIsLoadingContacts(true);
    setError(null);
    try {
      // Use standard Google Contacts API (People API)
      const res = await fetch('https://people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses,phoneNumbers,organizations', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch contacts: ${res.statusText}`);
      }
      const data = await res.json();
      setContacts(data.connections || []);
    } catch (err: any) {
      console.error('Failed to fetch contacts:', err);
      setError('Failed to load contacts. Please ensure you granted permission.');
    } finally {
      setIsLoadingContacts(false);
    }
  };

  const exportToCSV = () => {
    if (contacts.length === 0) return;

    const headers = ['Name', 'Email 1', 'Phone 1', 'Organization', 'Job Title'];
    const rows = contacts.map(contact => {
      const name = contact.names?.[0]?.displayName || '';
      const email = contact.emailAddresses?.[0]?.value || '';
      const phone = contact.phoneNumbers?.[0]?.value || '';
      const orgName = contact.organizations?.[0]?.name || '';
      const orgTitle = contact.organizations?.[0]?.title || '';

      // Wrap values in quotes to handle commas within fields
      return `"${name.replace(/"/g, '""')}","${email.replace(/"/g, '""')}","${phone.replace(/"/g, '""')}","${orgName.replace(/"/g, '""')}","${orgTitle.replace(/"/g, '""')}"`;
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', 'google_contacts.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (needsAuth) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-slate-50 px-4">
        <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-200 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-2 uppercase">Client Portal</h1>
          <p className="text-slate-600 font-medium text-sm mb-8">
            Sign in with Google to access your contacts and client information.
          </p>
          
          <button 
            onClick={handleLogin} 
            disabled={isLoggingIn}
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-3 rounded-sm font-semibold transition-colors relative"
          >
            {isLoggingIn ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                Sign in with Google
              </>
            )}
          </button>
          
          {error && <p className="mt-4 text-red-600 text-sm font-medium">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-6 rounded-sm shadow-sm border border-slate-200">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">My Contacts</h1>
            <p className="text-slate-500 text-sm font-medium">Logged in as {user?.email}</p>
          </div>
          <div className="flex items-center gap-4">
            {contacts.length > 0 && !isLoadingContacts && (
              <button 
                onClick={exportToCSV}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-700 text-sm font-bold uppercase tracking-wider transition-colors"
                title="Export contacts to CSV"
              >
                <Download className="w-4 h-4" /> Export
              </button>
            )}
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-slate-600 hover:text-red-700 text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Sign Out <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-sm mb-6 font-medium text-sm">
            {error}
          </div>
        )}

        <div className="bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden">
          {isLoadingContacts ? (
            <ul className="divide-y divide-slate-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-pulse">
                    <div className="space-y-3 w-full max-w-sm">
                      <div className="h-4 bg-slate-200 rounded-sm w-3/4"></div>
                      <div className="h-3 bg-slate-100 rounded-sm w-1/2"></div>
                    </div>
                    <div className="h-6 bg-slate-100 rounded-full w-28 shrink-0"></div>
                  </div>
                </li>
              ))}
            </ul>
          ) : contacts.length > 0 ? (
            <ul className="divide-y divide-slate-100">
              {contacts.map((contact, index) => (
                <li 
                  key={contact.resourceName || index} 
                  onClick={() => setSelectedContact(contact)}
                  className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group-hover:pl-1 transition-all duration-300">
                    <div>
                      <p className="font-bold text-slate-900">
                        {contact.names?.[0]?.displayName || 'Unnamed Contact'}
                      </p>
                      <p className="text-sm text-slate-500 font-medium">
                        {contact.emailAddresses?.[0]?.value || 'No email address'}
                      </p>
                    </div>
                    {contact.phoneNumbers && (
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                        {contact.phoneNumbers[0].value}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-16 text-center text-slate-500">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="font-medium">No contacts found in your Google Account.</p>
            </div>
          )}
        </div>

      </div>

      <AnimatePresence>
        {selectedContact && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedContact(null)}
              className="fixed inset-0 bg-slate-900/40 z-40 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-white rounded-sm shadow-xl w-full max-w-lg pointer-events-auto border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
              >
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                    {selectedContact.names?.[0]?.displayName || 'Unnamed Contact'}
                  </h2>
                  <button 
                    onClick={() => setSelectedContact(null)}
                    className="text-slate-400 hover:text-slate-700 transition-colors bg-white hover:bg-slate-100 rounded-sm p-1.5 border border-slate-200 hover:border-slate-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto">
                  {selectedContact.organizations && selectedContact.organizations.length > 0 && (
                    <div className="mb-6 pb-6 border-b border-slate-100">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Organization</h3>
                      <div className="space-y-3">
                        {selectedContact.organizations.map((org, idx) => (
                          <div key={idx} className="flex gap-3 items-center">
                            <div className="w-8 h-8 rounded-sm bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                                <Building className="w-4 h-4 text-blue-700" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">{org.name || 'Company'}</p>
                              {org.title && <p className="text-sm font-medium text-slate-500">{org.title}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Phone Numbers</h3>
                    {selectedContact.phoneNumbers && selectedContact.phoneNumbers.length > 0 ? (
                      <div className="space-y-3">
                        {selectedContact.phoneNumbers.map((phone, idx) => (
                          <div key={idx} className="flex items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-100 rounded-sm">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <Phone className="w-4 h-4 text-blue-700" />
                              </div>
                              <p className="font-semibold text-slate-900">{phone.value}</p>
                            </div>
                            {(phone.formattedType || phone.type) && (
                              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-white px-2 py-1 border border-slate-200 rounded-sm">
                                {phone.formattedType || phone.type}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500 italic">No phone numbers associated.</p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Email Addresses</h3>
                    {selectedContact.emailAddresses && selectedContact.emailAddresses.length > 0 ? (
                      <div className="space-y-3">
                        {selectedContact.emailAddresses.map((email, idx) => (
                          <div key={idx} className="flex items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-100 rounded-sm">
                            <div className="flex items-center gap-3 overflow-hidden min-w-0">
                              <div className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <Mail className="w-4 h-4 text-blue-700" />
                              </div>
                              <p className="font-semibold text-slate-900 truncate">{email.value}</p>
                            </div>
                            {(email.formattedType || email.type) && (
                              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-white px-2 py-1 border border-slate-200 rounded-sm shrink-0">
                                {email.formattedType || email.type}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500 italic">No email addresses associated.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
