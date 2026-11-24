export function BodyguardLogo({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <div
      className={`relative ${className} flex items-center justify-center p-0.5 transition-transform duration-200 group-hover:scale-105 flex-shrink-0`}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]"
      >
        {/* Subtle cyan glow backdrop rim */}
        <path
          d="M 72 24 L 30 40 L 40 118 L 100 182 L 160 118 L 170 40 L 128 24"
          stroke="#06b6d4"
          strokeWidth="12"
          strokeOpacity="0.35"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* --- Crisp White Shield Base --- */}
        <path
          d="M 100 14 L 32 40 L 42 116 L 100 180 L 158 116 L 168 40 Z"
          fill="#ffffff"
        />

        {/* --- Outer Black Shield Outline --- */}
        <path
          d="M 72 26 L 32 40 L 42 116 L 100 180 L 158 116 L 168 40 L 128 26"
          stroke="#000000"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* ========================================================
            PERSON WITH BIG BROAD SHOULDERS
           ======================================================== */}

        {/* --- Black Suit Jacket (Broad, imposing muscular shoulders) --- */}
        <path
          d="M 48 90 C 60 84 72 82 82 86 L 100 134 L 118 86 C 128 82 140 84 152 90 C 152 108 144 126 138 140 L 124 156 C 114 160 106 162 100 162 C 94 162 86 160 76 156 L 62 140 C 56 126 48 108 48 90 Z"
          fill="#000000"
        />

        {/* --- Crisp White Shirt Collar & V-Neck --- */}
        <polygon points="82,86 100,134 118,86" fill="#ffffff" />

        {/* --- Solid Black Necktie --- */}
        <polygon points="95,90 105,90 106,98 94,98" fill="#000000" />
        <polygon points="94,98 106,98 108,128 100,138 92,128" fill="#000000" />

        {/* --- Big Oval Head (breaking out top of shield) --- */}
        <path
          d="M 76 46 C 76 16 124 16 124 46 C 124 66 118 80 100 80 C 82 80 76 66 76 46 Z"
          fill="#ffffff"
        />
        <path
          d="M 76 46 C 76 16 124 16 124 46"
          stroke="#000000"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* --- Bold Black Sunglasses --- */}
        {/* Left lens */}
        <path
          d="M 81 54 C 81 51 83 49.5 86 49.5 L 94 49.5 C 97 49.5 98 51 98 54 L 98 56 C 98 59.5 95 62 92 62 L 86 62 C 83 62 81 59.5 81 56 Z"
          fill="#000000"
        />
        {/* Right lens */}
        <path
          d="M 102 54 C 102 51 103 49.5 106 49.5 L 114 49.5 C 117 49.5 119 51 119 54 L 119 56 C 119 59.5 117 62 114 62 L 108 62 C 105 62 102 59.5 102 56 Z"
          fill="#000000"
        />
        {/* Bridge */}
        <rect x="97" y="53" width="6" height="3" fill="#000000" />

        {/* --- Confident Jawline Smile Curve --- */}
        <path
          d="M 85 71 C 90 88 110 88 115 71"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function SpotagoLogo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center flex-shrink-0 overflow-hidden rounded-xl shadow-md bg-slate-900 border border-slate-700/60`}>
      <img
        src="/spotago-icon.jpg"
        alt="Spotago Emblem"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
