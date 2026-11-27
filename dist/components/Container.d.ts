import type { HTMLAttributes, ReactNode } from "react";
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    narrow?: boolean;
    children: ReactNode;
}
export declare function Container({ narrow, className, children, ...props }: ContainerProps): import("react").JSX.Element;
export {};
