import { useId, type SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function Select({
  label,
  hint,
  error,
  className = "",
  id,
  children,
  "aria-describedby": ariaDescribedBy,
  ...props
}: SelectProps) {
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
        "ph-field--select",
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
      <select
        {...props}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      >
        {children}
      </select>
      {error && (
        <span className="ph-field__error" id={errorId}>
          {error}
        </span>
      )}
    </label>
  );
}
