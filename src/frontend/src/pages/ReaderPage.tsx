import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { useGetComicStrips } from "../hooks/useQueries";

export function ReaderPage() {
  const { slideId } = useParams({ from: "/reader/$slideId" });
  const { data: comics, isLoading } = useGetComicStrips();

  const comic = comics?.find((c) => c.slideId === slideId);
  const embedUrl = `https://docs.google.com/presentation/d/${slideId}/embed?start=false&loop=false&delayms=3000`;
  const viewUrl = `https://docs.google.com/presentation/d/${slideId}/view`;

  return (
    <div>
      {/* Reader header */}
      <div
        className="bg-comic-ink relative overflow-hidden py-6"
        style={{ borderBottom: "4px solid oklch(0.88 0.18 90)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.88 0.18 90) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          {/* Back link */}
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 font-bangers text-lg text-comic-yellow hover:text-comic-yellow/80 mb-4 transition-colors"
            style={{ letterSpacing: "0.05em" }}
          >
            <ArrowLeft size={20} />
            BACK TO LIBRARY
          </Link>

          {/* Comic title */}
          <div className="flex items-start gap-4">
            <div
              className="bg-comic-red p-2 hidden sm:block"
              style={{ border: "3px solid oklch(0.88 0.18 90)" }}
            >
              <BookOpen size={32} className="text-comic-yellow" />
            </div>
            <div>
              {isLoading ? (
                <Skeleton className="h-10 w-64 bg-comic-yellow/20" />
              ) : (
                <h1
                  className="font-bangers text-3xl md:text-5xl text-comic-yellow"
                  style={{
                    letterSpacing: "0.05em",
                    textShadow: "3px 3px 0px oklch(0.52 0.22 25)",
                  }}
                >
                  {comic?.title ?? "Comic Strip"}
                </h1>
              )}
              {comic?.description && (
                <p className="font-comic text-comic-yellow/70 text-sm mt-1">
                  {comic.description}
                </p>
              )}
              <div className="flex items-center gap-2 mt-2">
                <span
                  className="font-bangers text-xs text-comic-white bg-comic-red px-2 py-0.5"
                  style={{ border: "1.5px solid oklch(0.88 0.18 90)" }}
                >
                  PG-13
                </span>
                <a
                  href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-comic text-xs text-comic-yellow/60 hover:text-comic-yellow transition-colors"
                >
                  <ExternalLink size={12} />
                  Open in Google Slides
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embed area */}
      <div className="halftone-bg py-8">
        <div className="container mx-auto px-4">
          <div
            className="bg-comic-white overflow-hidden"
            style={{
              border: "4px solid oklch(0.12 0.02 30)",
              boxShadow: "8px 8px 0px oklch(0.12 0.02 30)",
            }}
          >
            {/* Embed toolbar */}
            <div
              className="bg-comic-yellow px-4 py-2 flex items-center justify-between"
              style={{ borderBottom: "3px solid oklch(0.12 0.02 30)" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full bg-comic-red"
                  style={{ border: "1.5px solid oklch(0.12 0.02 30)" }}
                />
                <div
                  className="w-3 h-3 rounded-full bg-comic-yellow"
                  style={{
                    border: "1.5px solid oklch(0.12 0.02 30)",
                    background: "oklch(0.7 0.15 90)",
                  }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    border: "1.5px solid oklch(0.12 0.02 30)",
                    background: "oklch(0.65 0.18 145)",
                  }}
                />
              </div>
              <span className="font-bangers text-comic-ink text-sm tracking-wider">
                📖 READING: {comic?.title ?? "Comic Strip"}
              </span>
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-comic text-xs text-comic-ink hover:text-comic-red transition-colors"
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">Full Screen</span>
              </a>
            </div>

            {/* Google Slides iframe */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                title={comic?.title ?? "Comic Strip"}
                allow="autoplay; fullscreen"
              />
            </div>
          </div>

          {/* Navigation hint */}
          <div className="mt-6 text-center">
            <div
              className="inline-block bg-comic-yellow px-6 py-3"
              style={{
                border: "3px solid oklch(0.12 0.02 30)",
                boxShadow: "4px 4px 0px oklch(0.12 0.02 30)",
              }}
            >
              <p className="font-comic font-bold text-comic-ink text-sm">
                💡 <strong>TIP:</strong> Use the arrow keys or click the arrows
                in the slides to navigate panels!
              </p>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-6 text-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 font-bangers text-xl text-comic-white bg-comic-red px-8 py-3 uppercase tracking-wider transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{
                border: "3px solid oklch(0.12 0.02 30)",
                boxShadow: "5px 5px 0px oklch(0.12 0.02 30)",
                letterSpacing: "0.08em",
              }}
            >
              <ArrowLeft size={20} />
              BACK TO LIBRARY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
