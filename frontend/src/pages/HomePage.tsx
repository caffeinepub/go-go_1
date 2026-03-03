import { Link } from '@tanstack/react-router';
import { useGetComicStrips } from '../hooks/useQueries';
import { Zap, BookOpen, Star, ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export function HomePage() {
  const { data: comics, isLoading } = useGetComicStrips();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'oklch(0.12 0.02 30)' }}>
        {/* Halftone background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, oklch(0.88 0.18 90 / 0.15) 2px, transparent 2px)',
            backgroundSize: '14px 14px',
          }}
        />

        {/* Action lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-conic-gradient(
              from 0deg at 50% 50%,
              oklch(0.88 0.18 90) 0deg 1.5deg,
              transparent 1.5deg 5deg
            )`,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
          {/* Logo image or text */}
          <div className="flex justify-center mb-6">
            <img
              src="/assets/generated/gogo-logo.dim_600x200.png"
              alt="GO GO!"
              className="max-w-xs md:max-w-md w-full"
              onError={(e) => {
                // Fallback to text if image fails
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Fallback title (always visible as backup) */}
          <div className="mb-4">
            <h1
              className="font-bangers text-7xl md:text-9xl text-comic-yellow"
              style={{
                letterSpacing: '0.08em',
                textShadow: '6px 6px 0px oklch(0.52 0.22 25), 10px 10px 0px oklch(0.12 0.02 30 / 0.5)',
                WebkitTextStroke: '3px oklch(0.88 0.18 90)',
              }}
            >
              GO GO!
            </h1>
          </div>

          {/* Tagline */}
          <div className="flex justify-center mb-8">
            <div
              className="bg-comic-red px-6 py-2 inline-block"
              style={{
                border: '3px solid oklch(0.88 0.18 90)',
                boxShadow: '5px 5px 0px oklch(0.88 0.18 90 / 0.4)',
                transform: 'rotate(-1deg)',
              }}
            >
              <p
                className="font-bangers text-comic-yellow text-xl md:text-2xl tracking-widest"
                style={{ letterSpacing: '0.1em' }}
              >
                ⚡ COMIC STRIPS FOR TEENS & ADULTS ⚡
              </p>
            </div>
          </div>

          {/* Sub tagline */}
          <p className="font-comic text-comic-yellow/80 text-lg mb-10 max-w-xl mx-auto">
            Bold. Funny. Outrageous. Dive into our collection of PG-13 comic strips that'll make you laugh out loud!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 font-bangers text-2xl text-comic-ink bg-comic-yellow px-8 py-4 uppercase tracking-wider transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{
                border: '4px solid oklch(0.88 0.18 90)',
                boxShadow: '6px 6px 0px oklch(0.88 0.18 90)',
                letterSpacing: '0.08em',
              }}
            >
              <BookOpen size={24} />
              READ COMICS
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex justify-center gap-8 mt-12">
            {[
              { icon: '📚', label: 'Comics', value: isLoading ? '...' : String(comics?.length ?? 0) },
              { icon: '⚡', label: 'Rating', value: 'PG-13' },
              { icon: '😂', label: 'Laughs', value: '∞' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div
                  className="font-bangers text-2xl text-comic-yellow"
                  style={{ textShadow: '2px 2px 0px oklch(0.52 0.22 25)' }}
                >
                  {stat.value}
                </div>
                <div className="font-comic text-comic-yellow/60 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero banner image */}
      <div
        className="relative overflow-hidden"
        style={{ borderTop: '4px solid oklch(0.12 0.02 30)', borderBottom: '4px solid oklch(0.12 0.02 30)' }}
      >
        <img
          src="/assets/generated/hero-banner.dim_1200x400.png"
          alt="GO GO! Comics Banner"
          className="w-full object-cover max-h-48 md:max-h-64"
          onError={(e) => {
            (e.target as HTMLImageElement).parentElement!.style.display = 'none';
          }}
        />
      </div>

      {/* Featured Comics Section */}
      <section className="py-12 md:py-16 halftone-bg">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-10">
            <div className="inline-block relative">
              <h2
                className="font-bangers text-5xl md:text-6xl text-comic-ink"
                style={{
                  letterSpacing: '0.05em',
                  textShadow: '4px 4px 0px oklch(0.52 0.22 25)',
                }}
              >
                FEATURED COMICS
              </h2>
              <div
                className="absolute -bottom-2 left-0 right-0 h-2 bg-comic-red"
                style={{ border: '1px solid oklch(0.12 0.02 30)' }}
              />
            </div>
            <p className="font-comic text-muted-foreground mt-4 text-lg">
              Start reading our latest and greatest strips!
            </p>
          </div>

          {/* Comics preview */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ border: '4px solid oklch(0.12 0.02 30)', boxShadow: '8px 8px 0px oklch(0.12 0.02 30)' }}>
                  <Skeleton className="h-52 w-full" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : comics && comics.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              {/* Show first comic as featured */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div
                  className="relative"
                  style={{
                    border: '4px solid oklch(0.12 0.02 30)',
                    boxShadow: '8px 8px 0px oklch(0.12 0.02 30)',
                  }}
                >
                  <img
                    src="/assets/generated/comic-cover-legends.dim_400x300.png"
                    alt={comics[0].title}
                    className="w-full object-cover"
                    style={{ maxHeight: '280px' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div
                    className="absolute top-3 left-3 bg-comic-red px-3 py-1 font-bangers text-comic-yellow text-sm"
                    style={{ border: '2px solid oklch(0.12 0.02 30)' }}
                  >
                    ⭐ FEATURED
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="oklch(0.88 0.18 90)" stroke="oklch(0.12 0.02 30)" strokeWidth={2} />
                    ))}
                  </div>
                  <h3
                    className="font-bangers text-4xl text-comic-ink mb-3"
                    style={{ letterSpacing: '0.03em', textShadow: '3px 3px 0px oklch(0.88 0.18 90)' }}
                  >
                    {comics[0].title}
                  </h3>
                  <p className="font-comic text-muted-foreground mb-4 text-base leading-relaxed">
                    {comics[0].description}
                  </p>
                  <div className="flex gap-2 mb-5">
                    <span
                      className="font-bangers text-sm text-comic-white bg-comic-red px-3 py-1"
                      style={{ border: '2px solid oklch(0.12 0.02 30)' }}
                    >
                      PG-13
                    </span>
                    <span
                      className="font-bangers text-sm text-comic-ink bg-comic-yellow px-3 py-1"
                      style={{ border: '2px solid oklch(0.12 0.02 30)' }}
                    >
                      ISSUE #1
                    </span>
                  </div>
                  <Link
                    to="/reader/$slideId"
                    params={{ slideId: comics[0].slideId }}
                    className="inline-flex items-center gap-2 font-bangers text-xl text-comic-white bg-comic-red px-6 py-3 uppercase tracking-wider transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    style={{
                      border: '3px solid oklch(0.12 0.02 30)',
                      boxShadow: '5px 5px 0px oklch(0.12 0.02 30)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    <BookOpen size={20} />
                    READ NOW!
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/catalog"
                  className="inline-flex items-center gap-2 font-bangers text-xl text-comic-ink bg-comic-yellow px-6 py-3 uppercase tracking-wider transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  style={{
                    border: '3px solid oklch(0.12 0.02 30)',
                    boxShadow: '5px 5px 0px oklch(0.12 0.02 30)',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Zap size={20} />
                  VIEW ALL COMICS
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-bangers text-3xl text-muted-foreground">No comics yet... stay tuned!</p>
            </div>
          )}
        </div>
      </section>

      {/* About section */}
      <section
        className="py-12 bg-comic-ink relative overflow-hidden"
        style={{ borderTop: '4px solid oklch(0.88 0.18 90)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, oklch(0.88 0.18 90) 1.5px, transparent 1.5px)',
            backgroundSize: '12px 12px',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2
            className="font-bangers text-4xl md:text-5xl text-comic-yellow mb-6"
            style={{ letterSpacing: '0.05em', textShadow: '3px 3px 0px oklch(0.52 0.22 25)' }}
          >
            WHAT IS GO GO!?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { emoji: '💥', title: 'BOLD HUMOR', desc: 'Outrageous comedy that pushes the limits of PG-13 fun!' },
              { emoji: '🎨', title: 'COMIC ART', desc: 'Vibrant, expressive art that leaps off the page!' },
              { emoji: '⚡', title: 'NEW STRIPS', desc: 'Fresh comic strips added regularly to keep you laughing!' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-comic-white p-6 text-left"
                style={{
                  border: '3px solid oklch(0.88 0.18 90)',
                  boxShadow: '5px 5px 0px oklch(0.88 0.18 90 / 0.4)',
                }}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3
                  className="font-bangers text-2xl text-comic-ink mb-2"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {item.title}
                </h3>
                <p className="font-comic text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
