import { useState } from 'react';
import { Mail, Phone, User, Calendar, MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.contact.success);
    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-100 scroll-reveal">
            <div className="relative">
              <User className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                required
                placeholder={t.contact.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="email"
                required
                placeholder={t.contact.emailLabel}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="tel"
                required
                placeholder={t.contact.phoneLabel}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 text-gray-900 hover:border-gray-300"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-5 top-6 w-6 h-6 text-gray-400" />
              <textarea
                required
                placeholder={t.contact.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full pl-14 pr-5 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 resize-none text-gray-900 placeholder-gray-400 hover:border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold py-5 sm:py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-400/30 text-lg group"
            >
              <span className="flex items-center justify-center gap-2">
                {t.contact.submit}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
