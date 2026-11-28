import {
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";

export interface SearchFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label: string;
  size?: "sm" | "md";
  onEscape?: () => void;
  onClear?: () => void;
}

function SearchIcon() {
  return (
    <svg
      className="ph-search-field__icon"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="6.75" cy="6.75" r="4.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m10.5 10.5 3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1.5 1.5 8.5 8.5M8.5 1.5 1.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField(
    {
      label,
      size = "sm",
      onEscape,
      onClear,
      value,
      defaultValue,
      onChange,
      onKeyDown,
      className = "",
      id,
      disabled,
      ...props
    },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const isControlled = value !== undefined;
    const [uncontrolledHasValue, setUncontrolledHasValue] = useState(
      Boolean(defaultValue),
    );
    const hasValue = isControlled
      ? String(value).length > 0
      : uncontrolledHasValue;

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setUncontrolledHasValue(event.currentTarget.value.length > 0);
      onChange?.(event);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;
      if (event.key === "Escape") onEscape?.();
    }

    function clear() {
      const input = inputRef.current;
      if (!input) return;
      const setter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        "value",
      )?.set;
      setter?.call(input, "");
      input.dispatchEvent(new Event("input", { bubbles: true }));
      setUncontrolledHasValue(false);
      onClear?.();
      input.focus();
    }

    return (
      <div
        role="search"
        className={[
          "ph-search-field",
          size === "md" ? "ph-search-field--md" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <label className="visually-hidden" htmlFor={fieldId}>
          {label}
        </label>
        <SearchIcon />
        <input
          {...props}
          ref={inputRef}
          id={fieldId}
          type="search"
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {hasValue && !disabled && (
          <button
            type="button"
            className="ph-search-field__clear"
            aria-label="Clear search"
            onClick={clear}
          >
            <ClearIcon />
          </button>
        )}
      </div>
    );
  },
);
