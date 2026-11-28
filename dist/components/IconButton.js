import { jsx as _jsx } from "react/jsx-runtime";
const sizeClass = {
    xs: "ph-icon-button--xs",
    sm: "ph-icon-button--sm",
    md: "ph-icon-button--md",
};
const variantClass = {
    ghost: "ph-icon-button--ghost",
    secondary: "ph-icon-button--secondary",
    danger: "ph-icon-button--danger",
};
export function IconButton({ label, size = "sm", variant = "ghost", pressed, active = false, className = "", title, type = "button", children, ...props }) {
    return (_jsx("button", { ...props, type: type, "aria-label": label, "aria-pressed": pressed, title: title ?? label, className: [
            "ph-icon-button",
            variantClass[variant],
            sizeClass[size],
            active ? "ph-icon-button--active" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "), children: children }));
}
