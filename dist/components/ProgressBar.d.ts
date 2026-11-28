import type { HTMLAttributes } from "react";
export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    value?: number;
    max?: number;
}
export declare function ProgressBar({ label, value, max, className, ...props }: ProgressBarProps): import("react").JSX.Element;
