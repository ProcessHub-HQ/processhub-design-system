import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "new"
  | "icon";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  primary: "ph-button--primary",
  secondary: "ph-button--secondary",
  ghost: "ph-button--ghost",
  danger: "ph-button--danger",
  new: "ph-button--new",
  icon: "ph-button--icon",
};

const sizeClass: Record<ButtonSize, string> = {
  xs: "ph-button--xs",
  sm: "ph-button--sm",
  md: "ph-button--md",
  lg: "ph-button--lg",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  block?: boolean;
}

export function buttonClassName({
  variant = "secondary",
  size = "md",
  block = false,
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  className?: string;
}) {
  return [
    "ph-button",
    variantClass[variant],
    sizeClass[size],
    block ? "ph-button--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "secondary",
  size = "md",
  icon,
  block = false,
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={buttonClassName({ variant, size, block, className })}
    >
      {icon}
      {children}
    </button>
  );
}
