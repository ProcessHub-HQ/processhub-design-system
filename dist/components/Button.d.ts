import type { ButtonHTMLAttributes, ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "new" | "icon";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    block?: boolean;
}
export declare function Button({ variant, size, icon, block, className, children, type, ...props }: ButtonProps): import("react").JSX.Element;
export {};
