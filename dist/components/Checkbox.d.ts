import { type InputHTMLAttributes, type ReactNode } from "react";
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: ReactNode;
    description?: ReactNode;
    indeterminate?: boolean;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
