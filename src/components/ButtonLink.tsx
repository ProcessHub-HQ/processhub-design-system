import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  buttonClassName,
  type ButtonSize,
  type ButtonVariant,
} from "./Button.js";

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  block?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  variant = "secondary",
  size = "md",
  icon,
  block = false,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      className={buttonClassName({ variant, size, block, className })}
    >
      {icon}
      {children}
    </a>
  );
}
