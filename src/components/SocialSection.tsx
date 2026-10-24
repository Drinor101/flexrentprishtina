import { ArrowUpRight, Instagram } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, instagramPosts } from '../data/instagram';
import { stagger } from '../lib/motion';

function SocialSection() {
  const { t } = useLanguage();

  return (
    <section id="social" className="relative overflow-hidden bg-ink-soft py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(201,162,75,0.06),transparent_55%)]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl scroll-reveal">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/handle mb-6 inline-flex items-center gap-3 text-gold-light"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-gold/10 group-hover/handle:bg-gold group-hover/handle:text-ink">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium tracking-wide">{INSTAGRAM_HANDLE}</span>
            </a>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl lg:text-5xl">
              {t.social.title}
            </h2>
            <p className="text-base font-light leading-relaxed text-bone/60 sm:text-lg">{t.social.subtitle}</p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold scroll-reveal group self-start px-7 py-3.5 text-sm sm:text-base lg:self-auto"
            style={stagger(150)}
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            <span>{t.social.follow}</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Photo grid: the first post is featured at double size */}
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {instagramPosts.map((post, index) => (
            <li
              key={post.id}
              className={`scroll-reveal ${index === 0 ? 'col-span-2 md:row-span-2' : ''}`}
              data-reveal="scale"
              style={stagger(index === 0 ? 0 : 80 + (index % 4) * 90)}
            >
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.social.openPost}: ${post.alt}`}
                className="group relative block aspect-square overflow-hidden rounded-xl border border-white/10 bg-ink hover:border-gold/50"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  width={index === 0 ? 1000 : 640}
                  height={index === 0 ? 1000 : 640}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

                <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-bone backdrop-blur-md transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </span>

                <span className="pointer-events-none absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between text-xs font-semibold tracking-wide text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:text-sm">
                  {t.social.openPost}
                  <ArrowUpRight className="h-4 w-4 text-gold-light" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SocialSection;
