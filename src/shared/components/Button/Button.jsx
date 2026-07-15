"use client";

const sizes = {
  sm: "px-3 py-[9px] text-sm",
  md: "px-4 py-[14px] text-base",
};

const variants = {
  default: "bg-offwhite border-offwhite text-charcoal",
  white: "bg-white border-white text-charcoal",
  dark: "bg-[rgba(26,26,29,1)] border-[rgba(248,239,239,0.1)] text-[rgba(248,239,239,1)]",
  light: "bg-[rgba(248,239,239,1)] border-[rgba(248,239,239,1)] text-[rgba(16,16,16,1)]",
};

export default function Button({
  children,
  onClick,
  size = "md",
  arrow = false,
  variant = "default",
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-[10px] rounded-lg border font-[family-name:var(--font-geist)] font-medium cursor-pointer transition-opacity hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M6.19316 5.03671C5.93553 4.79947 5.93563 4.4148 6.19338 4.17767C6.45093 3.94073 6.86826 3.94078 7.12573 4.1778L11.7415 8.42677C11.8234 8.50173 11.8884 8.59087 11.9328 8.68905C11.9772 8.78723 12 8.89253 12 8.99887C12 9.10522 11.9772 9.21051 11.9328 9.30869C11.8884 9.40688 11.8234 9.49602 11.7415 9.57097L7.12569 13.8222C6.8683 14.0593 6.45093 14.0593 6.19352 13.8222C5.93613 13.5852 5.93611 13.2009 6.19347 12.9639L10.4972 9.00009L6.19316 5.03671Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
