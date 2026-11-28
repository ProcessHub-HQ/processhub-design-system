import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
interface FieldProps {
    label: string;
    hint?: string;
    error?: string;
}
type InputProps = FieldProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare function Input({ label, hint, error, className, id, "aria-describedby": ariaDescribedBy, ...props }: InputProps): import("react").JSX.Element;
export declare function Textarea({ label, hint, error, className, id, "aria-describedby": ariaDescribedBy, ...props }: TextareaProps): import("react").JSX.Element;
export {};
