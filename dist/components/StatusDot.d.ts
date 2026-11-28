import type { HTMLAttributes, ReactNode } from "react";
export type StatusDotStatus = "idle" | "running" | "warning" | "danger";
export interface StatusDotProps extends HTMLAttributes<HTMLSpanElement> {
    status?: StatusDotStatus;
    label?: ReactNode;
}
export declare function StatusDot({ status, label, className, "aria-label": ariaLabel, ...props }: StatusDotProps): import("react").JSX.Element;
