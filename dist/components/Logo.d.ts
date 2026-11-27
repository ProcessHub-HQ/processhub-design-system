import { type SVGProps } from "react";
interface LogoMarkProps extends SVGProps<SVGSVGElement> {
    className?: string;
}
export declare function LogoMark({ className, ...props }: LogoMarkProps): import("react").JSX.Element;
interface LogoProps {
    size?: "md" | "lg";
    href?: string;
    className?: string;
}
export declare function Logo({ size, href, className }: LogoProps): import("react").JSX.Element;
export {};
