import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    children: ReactNode;
}
export declare function Menu({ label, className, "aria-label": ariaLabel, children, ...props }: MenuProps): import("react").JSX.Element;
export interface MenuItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
    icon?: ReactNode;
    shortcut?: string;
    danger?: boolean;
    onSelect?: () => void | Promise<void>;
    children: ReactNode;
}
export declare function MenuItem({ icon, shortcut, danger, onSelect, className, onClick, type, disabled, children, ...props }: MenuItemProps): import("react").JSX.Element;
export type MenuSeparatorProps = HTMLAttributes<HTMLDivElement>;
export declare function MenuSeparator({ className, ...props }: MenuSeparatorProps): import("react").JSX.Element;
export interface MenuLabelProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export declare function MenuLabel({ className, children, ...props }: MenuLabelProps): import("react").JSX.Element;
