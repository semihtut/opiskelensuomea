import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

/**
 * The one action primitive (docs/DESIGN-SYSTEM.md §4). `Button` renders a real
 * <button>; `ButtonLink` renders a Next <Link> with identical styling — so every
 * call-to-action shares one set of paddings/variants instead of ad-hoc copies.
 *
 * - primary   = filled terracotta (the page's main action)
 * - secondary = terracotta outline (alternative action)
 * - ghost     = quiet text action (teal --primary), e.g. inline "back" controls
 */
type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:opacity-90",
  secondary: "border border-accent text-accent hover:bg-accent hover:text-bg",
  ghost: "text-primary hover:bg-bg",
};

const SIZES: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5",
};

function buttonClass(variant: Variant, size: Size, className?: string): string {
  return [
    "inline-flex items-center justify-center gap-2 rounded-chip font-semibold no-underline transition",
    VARIANTS[variant],
    SIZES[size],
    className ?? "",
  ]
    .join(" ")
    .trim();
}

interface SharedProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

type ButtonLinkProps = SharedProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  >;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}
