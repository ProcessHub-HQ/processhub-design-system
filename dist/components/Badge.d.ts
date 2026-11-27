import type { HTMLAttributes, ReactNode } from "react";
export type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";
export type BadgeSize = "sm" | "md";
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    children: ReactNode;
}
export declare function Badge({ variant, size, className, children, ...props }: BadgeProps): import("react").JSX.Element;
export {};
