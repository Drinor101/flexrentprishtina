import { useState } from 'react';
import { Mail, Phone, User, Calendar, MessageSquare, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateFrom: '',
    dateTo: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Formspree Configuration
  // Formspree endpoint - form submissions will be sent to this URL
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzqwqyq';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          dateFrom: formData.dateFrom,
          dateTo: formData.dateTo,
          message: formData.message,
          _subject: `New Rental Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', dateFrom: '', dateTo: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A0A0A] mb-6 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#0A0A0A]/70 max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-100 scroll-reveal">
            {/* Success Message */}
            {status === 'success' && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-medium">{t.contact.success}</p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-red-800 font-medium">{errorMessage || 'Failed to send message. Please try again.'}</p>
              </div>
            )}

            <div className="relative">
              <User className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#0A0A0A]/50" />
              <input
                type="text"
                name="name"
                required
                placeholder={t.contact.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E5BD7] focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] placeholder-[#0A0A0A]/50 hover:border-[#0A2A66]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#0A0A0A]/50" />
              <input
                type="email"
                name="email"
                required
                placeholder={t.contact.emailLabel}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E5BD7] focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] placeholder-[#0A0A0A]/50 hover:border-[#0A2A66]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#0A0A0A]/50" />
              <input
                type="tel"
                name="phone"
                required
                placeholder={t.contact.phoneLabel}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E5BD7] focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] placeholder-[#0A0A0A]/50 hover:border-[#0A2A66]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Date From */}
            <div className="relative">
              <Calendar className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#0A0A0A]/50" />
              <input
                type="date"
                name="dateFrom"
                required
                value={formData.dateFrom}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E5BD7] focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] hover:border-[#0A2A66]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label className="absolute -top-2 left-14 bg-white px-2 text-xs text-[#0A0A0A]/70 font-medium">
                {t.contact.dateFrom}
              </label>
            </div>

            {/* Date To */}
            <div className="relative">
              <Calendar className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#0A0A0A]/50" />
              <input
                type="date"
                name="dateTo"
                required
                value={formData.dateTo}
                min={formData.dateFrom || new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E5BD7] focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] hover:border-[#0A2A66]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label className="absolute -top-2 left-14 bg-white px-2 text-xs text-[#0A0A0A]/70 font-medium">
                {t.contact.dateTo}
              </label>
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-5 top-6 w-6 h-6 text-[#0A0A0A]/50" />
              <textarea
                name="message"
                required
                placeholder={t.contact.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E5BD7] focus:border-[#1E5BD7] outline-none transition-all duration-300 resize-none text-[#0A0A0A] placeholder-[#0A0A0A]/50 hover:border-[#0A2A66]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-[#0A2A66] to-[#12408C] hover:from-[#12408C] hover:to-[#1E5BD7] text-white font-bold py-5 sm:py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#1E5BD7]/30 text-lg group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="flex items-center justify-center gap-2">
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    {t.contact.submit}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
