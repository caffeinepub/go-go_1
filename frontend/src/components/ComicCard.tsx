import { useNavigate } from '@tanstack/react-router';
import type { ComicStrip } from '../backend';
import { BookOpen, Star } from 'lucide-react';

interface ComicCardProps {
  comic: ComicStrip;
  index: number;
  coverImage?: string;
}

const PANEL_COLORS = [
  { bg: 'oklch(0.88 0.18 90)', accent: 'oklch(0.52 0.22 25)' },
  { bg: 'oklch(0.52 0.22 25)', accent: 'oklch(0.88 0.18 90)' },
  { bg: 'oklch(0.55 0.2 250)', accent: 'oklch(0.88 0.18 90)' },
  { bg: 'oklch(0.65 0.18 145)', accent: 'oklch(0.12 0.02 30)' },
];

export function ComicCard({ comic, index, coverImage }: ComicCardProps) {
  const navigate = useNavigate();
  const colors = PANEL_COLORS[index % PANEL_COLORS.length];

  const handleRead = () => {
    navigate({ to: '/reader/$slideId', params: { slideId: comic.slideId } });
  };

  return (
    <div
      className="comic-card-hover cursor-pointer group"
      style={{
        border: '4px solid oklch(0.12 0.02 30)',
        boxShadow: '8px 8px 0px oklch(0.12 0.02 30)',
        background: 'oklch(1 0 0)',
      }}
      onClick={handleRead}
    >
      {/* Cover image area */}
      <div
        className="relative overflow-hidden"
        style={{
          background: colors.bg,
          borderBottom: '3px solid oklch(0.12 0.02 30)',
          height: '220px',
        }}
      >
        {/* Halftone overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, oklch(0.12 0.02 30 / 0.1) 1.5px, transparent 1.5px)',
            backgroundSize: '10px 10px',
          }}
        />

        {/* Action lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 6px,
              oklch(0.12 0.02 30 / 0.3) 6px,
              oklch(0.12 0.02 30 / 0.3) 7px
            )`,
          }}
        />

        {coverImage ? (
          <img
            src={coverImage}
            alt={comic.title}
            className="w-full h-full object-cover relative z-10"
          />
        ) : (
          /* Placeholder cover art */
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
            <div
              className="bg-comic-white p-3 mb-3"
              style={{ border: '3px solid oklch(0.12 0.02 30)' }}
            >
              <BookOpen
                size={48}
                style={{ color: colors.accent }}
                strokeWidth={2.5}
              />
            </div>
            <div
              className="bg-comic-white px-3 py-1 text-center"
              style={{ border: '2px solid oklch(0.12 0.02 30)' }}
            >
              <span
                className="font-bangers text-comic-ink text-sm"
                style={{ letterSpacing: '0.05em' }}
              >
                COMIC STRIP
              </span>
            </div>
          </div>
        )}

        {/* Issue number badge */}
        <div
          className="absolute top-3 right-3 z-20 font-bangers text-sm px-2 py-0.5"
          style={{
            background: colors.accent,
            border: '2px solid oklch(0.12 0.02 30)',
            color: index % 2 === 0 ? 'oklch(0.12 0.02 30)' : 'oklch(1 0 0)',
          }}
        >
          #{index + 1}
        </div>

        {/* Stars */}
        <div className="absolute top-3 left-3 z-20 flex gap-0.5">
          {[...Array(3)].map((_, i) => (
            <Star
              key={i}
              size={12}
              fill="oklch(0.88 0.18 90)"
              stroke="oklch(0.12 0.02 30)"
              strokeWidth={2}
            />
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Title */}
        <h3
          className="font-bangers text-xl text-comic-ink mb-1 leading-tight"
          style={{ letterSpacing: '0.03em' }}
        >
          {comic.title}
        </h3>

        {/* Description */}
        {comic.description && (
          <p className="font-comic text-muted-foreground text-sm mb-3 line-clamp-2">
            {comic.description}
          </p>
        )}

        {/* PG-13 tag */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="font-bangers text-xs text-comic-white bg-comic-red px-2 py-0.5"
            style={{ border: '1.5px solid oklch(0.12 0.02 30)' }}
          >
            PG-13
          </span>
          <span
            className="font-comic text-xs text-comic-ink bg-comic-yellow px-2 py-0.5"
            style={{ border: '1.5px solid oklch(0.12 0.02 30)' }}
          >
            Comic Strip
          </span>
        </div>

        {/* Read button */}
        <button
          className="w-full font-bangers text-xl text-comic-white bg-comic-red py-2.5 uppercase tracking-wider transition-all group-hover:bg-comic-ink"
          style={{
            border: '3px solid oklch(0.12 0.02 30)',
            boxShadow: '4px 4px 0px oklch(0.12 0.02 30)',
            letterSpacing: '0.08em',
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleRead();
          }}
        >
          📖 READ NOW!
        </button>
      </div>
    </div>
  );
}
