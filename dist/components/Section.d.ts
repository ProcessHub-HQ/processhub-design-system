import type { HTMLAttributes, ReactNode } from "react";
interface SectionProps extends HTMLAttributes<HTMLElement> {
    tight?: boolean;
    children: ReactNode;
}
export declare function Section({ tight, className, children, ...props }: SectionProps): import("react").JSX.Element;
export {};
