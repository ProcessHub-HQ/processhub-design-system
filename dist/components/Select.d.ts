import { type SelectHTMLAttributes } from "react";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    hint?: string;
    error?: string;
}
export declare function Select({ label, hint, error, className, id, children, "aria-describedby": ariaDescribedBy, ...props }: SelectProps): import("react").JSX.Element;
