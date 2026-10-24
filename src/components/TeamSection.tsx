import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { stagger } from '../lib/motion';

const TEAM_EMAIL = 'info@flexrentprishtina.com';

const members = [
  { name: 'Behar Abdullahu', initials: 'BA', phone: '+41 79 932 94 45', tel: '+41799329445' },
  { name: 'Donat Breznica', initials: 'DB', phone: '+383 45 343 430', tel: '+38345343430' },
];

function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Header */}
          <div className="lg:col-span-5">
            <h2 className="scroll-reveal font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl lg:text-5xl">
              {t.team.title}
            </h2>
            <span className="gold-rule scroll-reveal my-5 !mx-0 origin-left" data-reveal="line" style={stagger(100)}></span>
            <p className="scroll-reveal text-base font-light leading-relaxed text-bone/65 sm:text-lg" style={stagger(150)}>
              {t.team.subtitle}
            </p>
          </div>

          {/* Managers */}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
            {members.map((member, index) => (
              <li
                key={member.name}
                className="surface-card scroll-reveal flex flex-col gap-5 p-6 shadow-xl shadow-black/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10"
                data-reveal={index === 0 ? 'left' : 'right'}
                style={stagger(index * 120)}
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 font-display text-lg font-semibold text-gold-light"
                  >
                    {member.initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold text-bone">{member.name}</h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-gold/90">{t.team.role}</p>
                  </div>
                </div>

                <div className="space-y-2.5 border-t border-white/10 pt-4 text-sm sm:text-[15px]">
                  <a href={`tel:${member.tel}`} className="flex items-center gap-3 font-light text-bone/80 hover:text-gold-light">
                    <Phone className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                    <span className="tabular-nums">{member.phone}</span>
                  </a>
                  <a href={`mailto:${TEAM_EMAIL}`} className="flex items-center gap-3 font-light text-bone/80 hover:text-gold-light">
                    <Mail className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                    <span className="break-all">{TEAM_EMAIL}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
