import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const defaultLabels = {
    idle: "Idle",
    running: "Running",
    warning: "Warning",
    danger: "Danger",
};
export function StatusDot({ status = "idle", label, className = "", "aria-label": ariaLabel, ...props }) {
    const dotClass = [
        "ph-status-dot",
        status === "idle" ? "" : `ph-status-dot--${status}`,
    ]
        .filter(Boolean)
        .join(" ");
    if (label) {
        return (_jsxs("span", { ...props, className: ["ph-status", className].filter(Boolean).join(" "), children: [_jsx("span", { className: dotClass, "aria-hidden": "true" }), _jsx("span", { className: "ph-status__label", children: label })] }));
    }
    return (_jsx("span", { ...props, role: "img", "aria-label": ariaLabel ?? defaultLabels[status], className: [dotClass, className].filter(Boolean).join(" ") }));
}
