import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useImperativeHandle, useRef, useState, } from "react";
function SearchIcon() {
    return (_jsxs("svg", { className: "ph-search-field__icon", width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", focusable: "false", children: [_jsx("circle", { cx: "6.75", cy: "6.75", r: "4.75", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "m10.5 10.5 3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }));
}
function ClearIcon() {
    return (_jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", "aria-hidden": "true", focusable: "false", children: _jsx("path", { d: "M1.5 1.5 8.5 8.5M8.5 1.5 1.5 8.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }));
}
export const SearchField = forwardRef(function SearchField({ label, size = "sm", onEscape, onClear, value, defaultValue, onChange, onKeyDown, className = "", id, disabled, ...props }, ref) {
    const inputRef = useRef(null);
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const isControlled = value !== undefined;
    const [uncontrolledHasValue, setUncontrolledHasValue] = useState(Boolean(defaultValue));
    const hasValue = isControlled
        ? String(value).length > 0
        : uncontrolledHasValue;
    useImperativeHandle(ref, () => inputRef.current);
    function handleChange(event) {
        setUncontrolledHasValue(event.currentTarget.value.length > 0);
        onChange?.(event);
    }
    function handleKeyDown(event) {
        onKeyDown?.(event);
        if (event.defaultPrevented)
            return;
        if (event.key === "Escape")
            onEscape?.();
    }
    function clear() {
        const input = inputRef.current;
        if (!input)
            return;
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
        setter?.call(input, "");
        input.dispatchEvent(new Event("input", { bubbles: true }));
        setUncontrolledHasValue(false);
        onClear?.();
        input.focus();
    }
    return (_jsxs("div", { role: "search", className: [
            "ph-search-field",
            size === "md" ? "ph-search-field--md" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "), children: [_jsx("label", { className: "visually-hidden", htmlFor: fieldId, children: label }), _jsx(SearchIcon, {}), _jsx("input", { ...props, ref: inputRef, id: fieldId, type: "search", value: value, defaultValue: defaultValue, disabled: disabled, onChange: handleChange, onKeyDown: handleKeyDown }), hasValue && !disabled && (_jsx("button", { type: "button", className: "ph-search-field__clear", "aria-label": "Clear search", onClick: clear, children: _jsx(ClearIcon, {}) }))] }));
});
