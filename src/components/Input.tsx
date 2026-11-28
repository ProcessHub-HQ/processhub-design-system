import {
  useId,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

interface FieldProps {
  label: string;
  hint?: string;
  error?: string;
}

type InputProps = FieldProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Input({
  label,
  hint,
  error,
  className = "",
  id,
  "aria-describedby": ariaDescribedBy,
  ...props
}: InputProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy =
    [ariaDescribedBy, hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <label
      className={[
        "ph-field",
        error ? "ph-field--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>
        {label}
        {hint && <small id={hintId}>{hint}</small>}
      </span>
      <input
        {...props}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      {error && (
        <span className="ph-field__error" id={errorId}>
          {error}
        </span>
      )}
    </label>
  );
}

export function Textarea({
  label,
  hint,
  error,
  className = "",
  id,
  "aria-describedby": ariaDescribedBy,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy =
    [ariaDescribedBy, hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <label
      className={[
        "ph-field",
        error ? "ph-field--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>
        {label}
        {hint && <small id={hintId}>{hint}</small>}
      </span>
      <textarea
        {...props}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      {error && (
        <span className="ph-field__error" id={errorId}>
          {error}
        </span>
      )}
    </label>
  );
}
