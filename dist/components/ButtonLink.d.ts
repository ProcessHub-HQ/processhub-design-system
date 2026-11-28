import type { AnchorHTMLAttributes, ReactNode } from "react";
import { type ButtonSize, type ButtonVariant } from "./Button.js";
export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    block?: boolean;
    children: ReactNode;
}
export declare function ButtonLink({ variant, size, icon, block, className, children, ...props }: ButtonLinkProps): import("react").JSX.Element;
