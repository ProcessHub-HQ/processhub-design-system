import type { ButtonHTMLAttributes } from "react";

export type IconButtonSize = "xs" | "sm" | "md";
export type IconButtonVariant = "ghost" | "secondary" | "danger";

const sizeClass: Record<IconButtonSize, string> = {
  xs: "ph-icon-button--xs",
  sm: "ph-icon-button--sm",
  md: "ph-icon-button--md",
};

const variantClass: Record<IconButtonVariant, string> = {
  ghost: "ph-icon-button--ghost",
  secondary: "ph-icon-button--secondary",
  danger: "ph-icon-button--danger",
};

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  pressed?: boolean;
  active?: boolean;
}

export function IconButton({
  label,
  size = "sm",
  variant = "ghost",
  pressed,
  active = false,
  className = "",
  title,
  type = "button",
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      type={type}
      aria-label={label}
      aria-pressed={pressed}
      title={title ?? label}
      className={[
        "ph-icon-button",
        variantClass[variant],
        sizeClass[size],
        active ? "ph-icon-button--active" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
