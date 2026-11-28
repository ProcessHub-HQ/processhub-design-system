import type { ButtonHTMLAttributes } from "react";
export type IconButtonSize = "xs" | "sm" | "md";
export type IconButtonVariant = "ghost" | "secondary" | "danger";
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size?: IconButtonSize;
    variant?: IconButtonVariant;
    pressed?: boolean;
    active?: boolean;
}
export declare function IconButton({ label, size, variant, pressed, active, className, title, type, children, ...props }: IconButtonProps): import("react").JSX.Element;
