import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, Home, Zap } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-comic-cream">
      {/* Header */}
      <header
        className="bg-comic-ink relative overflow-hidden"
        style={{ borderBottom: "4px solid oklch(0.88 0.18 90)" }}
      >
        {/* Halftone pattern in header */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.88 0.18 90) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className="bg-comic-red px-4 py-1 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform"
                style={{
                  border: "3px solid oklch(0.88 0.18 90)",
                  boxShadow: "4px 4px 0px oklch(0.88 0.18 90)",
                }}
              >
                <span
                  className="font-bangers text-comic-yellow text-4xl md:text-5xl"
                  style={{
                    letterSpacing: "0.08em",
                    textShadow: "3px 3px 0px oklch(0.12 0.02 30)",
                  }}
                >
                  GO GO!
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-comic font-bold text-comic-yellow text-xs uppercase tracking-widest">
                Comic Strips
              </p>
              <p className="font-comic text-comic-yellow/70 text-xs">
                Rated PG-13
              </p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className={`flex items-center gap-1.5 font-bangers text-lg px-3 py-1.5 transition-all ${
                isHome
                  ? "bg-comic-yellow text-comic-ink"
                  : "text-comic-yellow hover:bg-comic-yellow/20"
              }`}
              style={
                isHome
                  ? {
                      border: "2px solid oklch(0.88 0.18 90)",
                      boxShadow: "3px 3px 0px oklch(0.88 0.18 90)",
                    }
                  : { border: "2px solid transparent" }
              }
            >
              <Home size={16} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/catalog"
              className={`flex items-center gap-1.5 font-bangers text-lg px-3 py-1.5 transition-all ${
                location.pathname === "/catalog" ||
                location.pathname.startsWith("/reader")
                  ? "bg-comic-yellow text-comic-ink"
                  : "text-comic-yellow hover:bg-comic-yellow/20"
              }`}
              style={
                location.pathname === "/catalog" ||
                location.pathname.startsWith("/reader")
                  ? {
                      border: "2px solid oklch(0.88 0.18 90)",
                      boxShadow: "3px 3px 0px oklch(0.88 0.18 90)",
                    }
                  : { border: "2px solid transparent" }
              }
            >
              <BookOpen size={16} />
              <span className="hidden sm:inline">Library</span>
            </Link>
          </nav>

          {/* PG-13 badge */}
          <div
            className="hidden md:flex items-center gap-1 bg-comic-red px-3 py-1"
            style={{ border: "2px solid oklch(0.88 0.18 90)" }}
          >
            <Zap size={14} className="text-comic-yellow" />
            <span className="font-bangers text-comic-yellow text-sm tracking-wider">
              PG-13
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer
        className="bg-comic-ink text-comic-yellow relative overflow-hidden"
        style={{ borderTop: "4px solid oklch(0.88 0.18 90)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.88 0.18 90) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p
                className="font-bangers text-3xl text-comic-yellow"
                style={{ textShadow: "2px 2px 0px oklch(0.52 0.22 25)" }}
              >
                GO GO!
              </p>
              <p className="font-comic text-comic-yellow/70 text-sm">
                Comic Strips for Teens & Adults · PG-13
              </p>
            </div>

            <div className="text-center">
              <p className="font-comic text-comic-yellow/60 text-xs">
                © {new Date().getFullYear()} GO GO! All rights reserved.
              </p>
              <p className="font-comic text-comic-yellow/50 text-xs mt-1">
                Built with <span className="text-comic-red">♥</span> using{" "}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                    typeof window !== "undefined"
                      ? window.location.hostname
                      : "gogo-comics",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-comic-yellow hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>

            <div className="flex gap-3">
              <div
                className="bg-comic-red px-3 py-1"
                style={{ border: "2px solid oklch(0.88 0.18 90)" }}
              >
                <span className="font-bangers text-comic-yellow text-sm">
                  PG-13
                </span>
              </div>
              <div
                className="bg-comic-yellow px-3 py-1"
                style={{ border: "2px solid oklch(0.88 0.18 90)" }}
              >
                <span className="font-bangers text-comic-ink text-sm">
                  COMICS
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
