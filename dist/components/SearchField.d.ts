import { type InputHTMLAttributes } from "react";
export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    label: string;
    size?: "sm" | "md";
    onEscape?: () => void;
    onClear?: () => void;
}
export declare const SearchField: import("react").ForwardRefExoticComponent<SearchFieldProps & import("react").RefAttributes<HTMLInputElement>>;
