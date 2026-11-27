import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Input({ label, hint, ...props }) {
    return (_jsxs("label", { className: "ph-field", children: [_jsxs("span", { children: [label, hint && _jsx("small", { children: hint })] }), _jsx("input", { ...props })] }));
}
export function Textarea({ label, hint, ...props }) {
    return (_jsxs("label", { className: "ph-field", children: [_jsxs("span", { children: [label, hint && _jsx("small", { children: hint })] }), _jsx("textarea", { ...props })] }));
}
