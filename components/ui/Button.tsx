import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "link-arrow" | "brass";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 tracking-subtle select-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 uppercase tracking-editorial",
    md: "text-sm px-6 py-3 tracking-subtle",
    lg: "text-base px-8 py-4 tracking-subtle",
  };

  const variantStyles = {
    primary:
      "bg-charcoal-800 text-ivory-50 hover:bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-900 shadow-sm",
    secondary:
      "bg-ivory-100 text-charcoal-800 hover:bg-ivory-200 border border-ivory-300",
    brass:
      "bg-brass text-charcoal-900 hover:bg-brass-dark hover:text-ivory-50 border border-brass transition-colors shadow-sm",
    outline:
      "bg-transparent text-charcoal-800 hover:bg-charcoal-800 hover:text-ivory-50 border border-charcoal-800/40 hover:border-charcoal-800",
    "link-arrow":
      "bg-transparent text-charcoal-800 hover:text-brass p-0 border-b border-charcoal-800/30 hover:border-brass pb-1 group",
  };

  const combinedClasses = `${baseStyles} ${
    variant !== "link-arrow" ? sizeStyles[size] : "text-sm uppercase tracking-editorial"
  } ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {variant === "link-arrow" && (
        <ArrowRight
          className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
