import React from "react";

interface LatticeDividerProps {
  className?: string;
  variant?: "simple" | "ornate" | "subtle";
}

export const LatticeDivider: React.FC<LatticeDividerProps> = ({
  className = "",
  variant = "simple",
}) => {
  if (variant === "subtle") {
    return (
      <div className={`w-full flex items-center justify-center py-6 ${className}`}>
        <div className="h-[1px] bg-brass/25 w-24"></div>
        <div className="w-1.5 h-1.5 rotate-45 border border-brass/50 mx-3"></div>
        <div className="h-[1px] bg-brass/25 w-24"></div>
      </div>
    );
  }

  if (variant === "ornate") {
    return (
      <div className={`w-full flex items-center justify-center py-8 ${className}`}>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brass/30 to-brass/40 flex-1 max-w-xs"></div>
        <div className="flex items-center space-x-2 px-4">
          <div className="w-1 h-1 rotate-45 bg-brass/60"></div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-brass stroke-[1.25]"
          >
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
          <div className="w-1 h-1 rotate-45 bg-brass/60"></div>
        </div>
        <div className="h-[1px] bg-gradient-to-l from-transparent via-brass/30 to-brass/40 flex-1 max-w-xs"></div>
      </div>
    );
  }

  return (
    <div className={`w-full flex items-center justify-center py-6 ${className}`}>
      <div className="h-[1px] bg-charcoal-800/10 flex-1 max-w-sm"></div>
      <div className="flex items-center space-x-1.5 px-4 text-brass">
        <div className="w-1.5 h-1.5 rotate-45 border border-brass/60"></div>
        <div className="w-2 h-2 rotate-45 bg-brass/40 border border-brass"></div>
        <div className="w-1.5 h-1.5 rotate-45 border border-brass/60"></div>
      </div>
      <div className="h-[1px] bg-charcoal-800/10 flex-1 max-w-sm"></div>
    </div>
  );
};
