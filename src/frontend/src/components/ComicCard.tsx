import { useNavigate } from "@tanstack/react-router";
import { BookOpen, Star } from "lucide-react";
import type { ComicStrip } from "../backend";

interface ComicCardProps {
  comic: ComicStrip;
  index: number;
  coverImage?: string;
  isNew?: boolean;
}

const PANEL_COLORS = [
  { bg: "oklch(0.88 0.18 90)", accent: "oklch(0.52 0.22 25)" },
  { bg: "oklch(0.52 0.22 25)", accent: "oklch(0.88 0.18 90)" },
  { bg: "oklch(0.55 0.2 250)", accent: "oklch(0.88 0.18 90)" },
  { bg: "oklch(0.65 0.18 145)", accent: "oklch(0.12 0.02 30)" },
];

export function ComicCard({ comic, index, coverImage, isNew }: ComicCardProps) {
  const navigate = useNavigate();
  const colors = PANEL_COLORS[index % PANEL_COLORS.length];

  const handleRead = () => {
    navigate({ to: "/reader/$slideId", params: { slideId: comic.slideId } });
  };

  return (
    <article
      data-ocid={`comic_card.item.${index + 1}`}
      className="comic-card-hover cursor-pointer group relative"
      style={{
        border: isNew
          ? "4px solid oklch(0.65 0.25 35)"
          : "4px solid oklch(0.12 0.02 30)",
        boxShadow: isNew
          ? "8px 8px 0px oklch(0.65 0.25 35), 0 0 0 2px oklch(0.88 0.18 90)"
          : "8px 8px 0px oklch(0.12 0.02 30)",
        background: "oklch(1 0 0)",
      }}
      onClick={handleRead}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleRead();
      }}
    >
      {/* Cover image area */}
      <div
        className="relative overflow-hidden"
        style={{
          background: colors.bg,
          borderBottom: "3px solid oklch(0.12 0.02 30)",
          height: "220px",
        }}
      >
        {/* Halftone overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.12 0.02 30 / 0.1) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
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
              style={{ border: "3px solid oklch(0.12 0.02 30)" }}
            >
              <BookOpen
                size={48}
                style={{ color: colors.accent }}
                strokeWidth={2.5}
              />
            </div>
            <div
              className="bg-comic-white px-3 py-1 text-center"
              style={{ border: "2px solid oklch(0.12 0.02 30)" }}
            >
              <span
                className="font-bangers text-comic-ink text-sm"
                style={{ letterSpacing: "0.05em" }}
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
            border: "2px solid oklch(0.12 0.02 30)",
            color: index % 2 === 0 ? "oklch(0.12 0.02 30)" : "oklch(1 0 0)",
          }}
        >
          #{index + 1}
        </div>

        {/* Stars (hidden when isNew to make room for NEW TODAY badge) */}
        {!isNew && (
          <div className="absolute top-3 left-3 z-20 flex gap-0.5">
            {["s1", "s2", "s3"].map((id) => (
              <Star
                key={id}
                size={12}
                fill="oklch(0.88 0.18 90)"
                stroke="oklch(0.12 0.02 30)"
                strokeWidth={2}
              />
            ))}
          </div>
        )}

        {/* NEW TODAY! ribbon badge */}
        {isNew && (
          <div
            className="absolute top-0 left-0 z-30 overflow-hidden"
            style={{ width: "110px", height: "110px" }}
          >
            {/* Diagonal ribbon */}
            <div
              className="absolute font-bangers text-center"
              style={{
                background: "oklch(0.65 0.25 35)",
                color: "oklch(0.88 0.18 90)",
                border: "2px solid oklch(0.12 0.02 30)",
                fontSize: "13px",
                letterSpacing: "0.05em",
                lineHeight: 1.2,
                padding: "5px 0",
                width: "148px",
                top: "24px",
                left: "-32px",
                transform: "rotate(-45deg)",
                boxShadow: "0 3px 0 oklch(0.12 0.02 30)",
                textShadow: "1px 1px 0 oklch(0.12 0.02 30)",
              }}
            >
              ⭐ NEW TODAY!
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Title */}
        <h3
          className="font-bangers text-xl text-comic-ink mb-1 leading-tight"
          style={{ letterSpacing: "0.03em" }}
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
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className="font-bangers text-xs text-comic-white bg-comic-red px-2 py-0.5"
            style={{ border: "1.5px solid oklch(0.12 0.02 30)" }}
          >
            PG-13
          </span>
          <span
            className="font-comic text-xs text-comic-ink bg-comic-yellow px-2 py-0.5"
            style={{ border: "1.5px solid oklch(0.12 0.02 30)" }}
          >
            Comic Strip
          </span>
          {isNew && (
            <span
              className="font-bangers text-xs text-comic-white px-2 py-0.5 animate-pulse"
              style={{
                background: "oklch(0.65 0.25 35)",
                border: "1.5px solid oklch(0.12 0.02 30)",
                letterSpacing: "0.04em",
              }}
            >
              🔥 HOT NEW RELEASE
            </span>
          )}
        </div>

        {/* Read button */}
        <button
          type="button"
          data-ocid={`comic_card.read_button.${index + 1}`}
          className="w-full font-bangers text-xl text-comic-white py-2.5 uppercase tracking-wider transition-all"
          style={{
            background: isNew ? "oklch(0.65 0.25 35)" : "oklch(0.5 0.22 25)",
            border: "3px solid oklch(0.12 0.02 30)",
            boxShadow: "4px 4px 0px oklch(0.12 0.02 30)",
            letterSpacing: "0.08em",
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleRead();
          }}
        >
          {isNew ? "🔥 READ NEW RELEASE!" : "📖 READ NOW!"}
        </button>
      </div>
    </article>
  );
}
