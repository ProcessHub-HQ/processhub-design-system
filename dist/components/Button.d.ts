import type { ButtonHTMLAttributes, ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "new" | "icon";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    block?: boolean;
}
export declare function buttonClassName({ variant, size, block, className, }: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    block?: boolean;
    className?: string;
}): string;
export declare function Button({ variant, size, icon, block, className, children, type, ...props }: ButtonProps): import("react").JSX.Element;
export {};
