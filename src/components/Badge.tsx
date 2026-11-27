import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "neutral"
  | "accent"
  | "success"
  | "warning"
  | "danger";
export type BadgeSize = "sm" | "md";

const variantClass: Record<BadgeVariant, string> = {
  neutral: "",
  accent: "ph-badge--accent",
  success: "ph-badge--success",
  warning: "ph-badge--warning",
  danger: "ph-badge--danger",
};

const sizeClass: Record<BadgeSize, string> = {
  sm: "ph-badge--sm",
  md: "",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: ReactNode;
}

export function Badge({
  variant = "neutral",
  size = "md",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={["ph-badge", variantClass[variant], sizeClass[size], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
