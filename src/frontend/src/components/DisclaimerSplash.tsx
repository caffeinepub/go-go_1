import { useState } from "react";

interface DisclaimerSplashProps {
  onAcknowledge: () => void;
}

export function DisclaimerSplash({ onAcknowledge }: DisclaimerSplashProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onAcknowledge();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "oklch(0.12 0.02 30)",
      }}
    >
      {/* Halftone background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.88 0.18 90) 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Action lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-conic-gradient(
            from 0deg at 50% 50%,
            oklch(0.88 0.18 90) 0deg 2deg,
            transparent 2deg 6deg
          )`,
        }}
      />

      <div className="relative z-10 max-w-lg w-full mx-4 animate-pop-in">
        {/* Outer frame */}
        <div
          className="bg-comic-yellow p-2"
          style={{
            border: "5px solid oklch(0.88 0.18 90)",
            boxShadow:
              "0 0 0 3px oklch(0.12 0.02 30), 10px 10px 0px oklch(0.52 0.22 25)",
          }}
        >
          {/* Inner panel */}
          <div
            className="bg-comic-white p-8 text-center"
            style={{ border: "3px solid oklch(0.12 0.02 30)" }}
          >
            {/* Rating badge */}
            <div className="flex justify-center mb-4">
              <div
                className="bg-comic-red text-comic-white font-bangers text-5xl w-24 h-24 flex items-center justify-center"
                style={{
                  border: "4px solid oklch(0.12 0.02 30)",
                  boxShadow: "4px 4px 0px oklch(0.12 0.02 30)",
                  borderRadius: "4px",
                }}
              >
                PG
                <span className="text-2xl align-super">13</span>
              </div>
            </div>

            {/* Title */}
            <h2
              className="font-bangers text-4xl text-comic-ink mb-2 text-shadow-comic"
              style={{ letterSpacing: "0.05em" }}
            >
              CONTENT WARNING!
            </h2>

            {/* Zigzag divider */}
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-1 bg-comic-ink" />
              <span className="font-bangers text-comic-red text-xl">★ ★ ★</span>
              <div className="flex-1 h-1 bg-comic-ink" />
            </div>

            {/* Warning text */}
            <div
              className="bg-comic-yellow p-4 mb-6 text-left"
              style={{ border: "2px solid oklch(0.12 0.02 30)" }}
            >
              <p className="font-comic font-bold text-comic-ink text-base leading-relaxed mb-2">
                ⚡ This website contains comic strips rated{" "}
                <strong>PG-13</strong>.
              </p>
              <p className="font-comic text-comic-ink text-sm leading-relaxed mb-2">
                Content may include:
              </p>
              <ul className="font-comic text-comic-ink text-sm space-y-1 ml-4">
                <li>💥 Crude humor and adult themes</li>
                <li>🔥 Mild language and suggestive content</li>
                <li>😂 Mature comedy situations</li>
              </ul>
              <p className="font-comic font-bold text-comic-ink text-sm mt-3">
                Intended for audiences <strong>13 years and older.</strong>
              </p>
            </div>

            {/* Enter button */}
            <button
              type="button"
              onClick={handleEnter}
              className="font-bangers text-2xl text-comic-white bg-comic-red px-10 py-4 uppercase tracking-widest comic-card-hover"
              style={{
                border: "4px solid oklch(0.12 0.02 30)",
                boxShadow: "6px 6px 0px oklch(0.12 0.02 30)",
                letterSpacing: "0.1em",
              }}
            >
              I UNDERSTAND — LET'S GO! 💥
            </button>

            <p className="font-comic text-muted-foreground text-xs mt-4">
              By entering, you confirm you are 13+ years old and agree to view
              PG-13 content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
