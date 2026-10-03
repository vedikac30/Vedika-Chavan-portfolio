import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<{ state: 'idle' | 'sending' | 'success' | 'error'; message: string }>({
    state: 'idle',
    message: ''
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const WEB3FORMS_ACCESS_KEY = "05bdac5f-1cdb-45c8-83f9-bbb1dfb08292";

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ state: 'error', message: 'Please fill in all mandatory fields.' });
      return;
    }

    setFormStatus({ state: 'sending', message: 'Sending message to Vedika...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          from_name: 'Vedika Portfolio Contact Form'
        })
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent directly to Vedika\'s inbox.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus({ state: 'idle', message: '' }), 6000);
      } else {
        setFormStatus({
          state: 'error',
          message: data.message || 'Error submitting message. Please email directly at chavanvedika3012@gmail.com'
        });
      }
    } catch (err) {
      setFormStatus({
        state: 'error',
        message: 'Network error. Please email directly at chavanvedika3012@gmail.com'
      });
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold">Let's Connect</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Get in Touch with Vedika
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether you are hiring for a Full Stack or Frontend role, interested in technical collaboration, or simply looking to connect, feel free to drop a message!
          </p>

          {/* Quick Copy Contact Tiles */}
          <div className="space-y-3 pt-2">
            {/* Email */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/70">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-indigo-400" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Email Address</span>
                  <span className="text-xs sm:text-sm font-medium text-white">{RESUME_DATA.email}</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(RESUME_DATA.email, 'email')}
                className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/70">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Phone / WhatsApp</span>
                  <span className="text-xs sm:text-sm font-medium text-white">{RESUME_DATA.phone}</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(RESUME_DATA.phone, 'phone')}
                className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy phone"
                aria-label="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/70">
              <MapPin className="w-4 h-4 text-rose-400" />
              <div>
                <span className="text-[11px] text-slate-400 block">Base Location</span>
                <span className="text-xs sm:text-sm font-medium text-white">{RESUME_DATA.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleFormSubmit} className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Send Direct Message</h3>

            {formStatus.state === 'success' && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{formStatus.message}</span>
              </div>
            )}

            {formStatus.state === 'error' && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs">
                {formStatus.message}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priyanshu Roy"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-600"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Email *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="priyanshu@example.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
              <input 
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Full Stack Opportunity / Technical Inquiries"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Message *</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Vedika, we came across your work in React and MERN stack and would love to talk..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-600 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus.state === 'sending'}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs tracking-wider uppercase shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2 active:scale-95 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{formStatus.state === 'sending' ? 'Dispatching Message...' : 'Submit Message'}</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
