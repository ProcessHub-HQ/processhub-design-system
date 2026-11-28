import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
export function Select({ label, hint, error, className = "", id, children, "aria-describedby": ariaDescribedBy, ...props }) {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const hintId = hint ? `${fieldId}-hint` : undefined;
    const errorId = error ? `${fieldId}-error` : undefined;
    const describedBy = [ariaDescribedBy, hintId, errorId].filter(Boolean).join(" ") || undefined;
    return (_jsxs("label", { className: [
            "ph-field",
            "ph-field--select",
            error ? "ph-field--error" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "), children: [_jsxs("span", { children: [label, hint && _jsx("small", { id: hintId, children: hint })] }), _jsx("select", { ...props, id: fieldId, "aria-invalid": error ? true : undefined, "aria-describedby": describedBy, children: children }), error && (_jsx("span", { className: "ph-field__error", id: errorId, children: error }))] }));
}
