import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Zap } from "lucide-react";
import { ComicCard } from "../components/ComicCard";
import { useGetComicStrips } from "../hooks/useQueries";

const COVER_IMAGES: Record<string, string> = {
  "1lWnWT1t5nKmRcQhQdWLtfLf4ew7CCjRie_eVSU363a4":
    "/assets/generated/comic-cover-legends.dim_400x300.png",
  "peehead-butthead":
    "/assets/generated/comic-cover-peehead-butthead.dim_400x300.png",
};

export function CatalogPage() {
  const { data: comics, isLoading, isError } = useGetComicStrips();

  return (
    <div>
      {/* Page header */}
      <div
        className="bg-comic-ink relative overflow-hidden py-10 md:py-14"
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
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-3 mb-3">
            <BookOpen size={32} className="text-comic-yellow" />
            <h1
              className="font-bangers text-5xl md:text-6xl text-comic-yellow"
              style={{
                letterSpacing: "0.06em",
                textShadow: "4px 4px 0px oklch(0.52 0.22 25)",
              }}
            >
              COMIC LIBRARY
            </h1>
            <Zap size={32} className="text-comic-yellow" />
          </div>
          <p className="font-comic text-comic-yellow/70 text-lg">
            All comics rated PG-13 · For teens & adults
          </p>
        </div>
      </div>

      {/* Comics grid */}
      <div className="halftone-bg min-h-64 py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    border: "4px solid oklch(0.12 0.02 30)",
                    boxShadow: "8px 8px 0px oklch(0.12 0.02 30)",
                  }}
                >
                  <Skeleton className="h-52 w-full" />
                  <div className="p-4 space-y-2 bg-white">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-10 w-full mt-2" />
                  </div>
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-16">
              <div
                className="inline-block bg-comic-red text-comic-white font-bangers text-2xl px-8 py-4"
                style={{
                  border: "4px solid oklch(0.12 0.02 30)",
                  boxShadow: "6px 6px 0px oklch(0.12 0.02 30)",
                }}
              >
                💥 OOPS! Failed to load comics. Try again!
              </div>
            </div>
          ) : comics && comics.length > 0 ? (
            <>
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="bg-comic-yellow px-4 py-1 font-bangers text-comic-ink text-lg"
                  style={{ border: "2px solid oklch(0.12 0.02 30)" }}
                >
                  {comics.length} COMIC{comics.length !== 1 ? "S" : ""}{" "}
                  AVAILABLE
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {comics.map((comic, index) => (
                  <ComicCard
                    key={comic.slideId}
                    comic={comic}
                    index={index}
                    coverImage={COVER_IMAGES[comic.slideId]}
                    isNew={comic.slideId === "peehead-butthead"}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div
                className="inline-block bg-comic-yellow text-comic-ink font-bangers text-2xl px-8 py-4"
                style={{
                  border: "4px solid oklch(0.12 0.02 30)",
                  boxShadow: "6px 6px 0px oklch(0.12 0.02 30)",
                }}
              >
                📚 No comics yet — check back soon!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
