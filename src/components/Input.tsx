import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FieldProps {
  label: string;
  hint?: string;
}

type InputProps = FieldProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Input({ label, hint, ...props }: InputProps) {
  return (
    <label className="ph-field">
      <span>
        {label}
        {hint && <small>{hint}</small>}
      </span>
      <input {...props} />
    </label>
  );
}

export function Textarea({ label, hint, ...props }: TextareaProps) {
  return (
    <label className="ph-field">
      <span>
        {label}
        {hint && <small>{hint}</small>}
      </span>
      <textarea {...props} />
    </label>
  );
}
