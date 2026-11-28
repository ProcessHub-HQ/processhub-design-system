import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
  description?: ReactNode;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      description,
      indeterminate = false,
      className = "",
      ...props
    },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    return (
      <label className={["ph-checkbox", className].filter(Boolean).join(" ")}>
        <input
          {...props}
          ref={inputRef}
          type="checkbox"
          className="ph-checkbox__input"
        />
        <span className="ph-checkbox__text">
          <span className="ph-checkbox__label">{label}</span>
          {description && (
            <span className="ph-checkbox__description">{description}</span>
          )}
        </span>
      </label>
    );
  },
);
