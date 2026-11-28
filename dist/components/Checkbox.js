import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useImperativeHandle, useRef, } from "react";
export const Checkbox = forwardRef(function Checkbox({ label, description, indeterminate = false, className = "", ...props }, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);
    useEffect(() => {
        if (inputRef.current)
            inputRef.current.indeterminate = indeterminate;
    }, [indeterminate]);
    return (_jsxs("label", { className: ["ph-checkbox", className].filter(Boolean).join(" "), children: [_jsx("input", { ...props, ref: inputRef, type: "checkbox", className: "ph-checkbox__input" }), _jsxs("span", { className: "ph-checkbox__text", children: [_jsx("span", { className: "ph-checkbox__label", children: label }), description && (_jsx("span", { className: "ph-checkbox__description", children: description }))] })] }));
});
