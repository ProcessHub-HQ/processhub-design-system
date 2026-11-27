import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
interface FieldProps {
    label: string;
    hint?: string;
}
type InputProps = FieldProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare function Input({ label, hint, ...props }: InputProps): import("react").JSX.Element;
export declare function Textarea({ label, hint, ...props }: TextareaProps): import("react").JSX.Element;
export {};
