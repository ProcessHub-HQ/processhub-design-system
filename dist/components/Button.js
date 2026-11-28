import { jsxs as _jsxs } from "react/jsx-runtime";
const variantClass = {
    primary: "ph-button--primary",
    secondary: "ph-button--secondary",
    ghost: "ph-button--ghost",
    danger: "ph-button--danger",
    new: "ph-button--new",
    icon: "ph-button--icon",
};
const sizeClass = {
    xs: "ph-button--xs",
    sm: "ph-button--sm",
    md: "ph-button--md",
    lg: "ph-button--lg",
};
export function buttonClassName({ variant = "secondary", size = "md", block = false, className = "", }) {
    return [
        "ph-button",
        variantClass[variant],
        sizeClass[size],
        block ? "ph-button--block" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");
}
export function Button({ variant = "secondary", size = "md", icon, block = false, className = "", children, type = "button", ...props }) {
    return (_jsxs("button", { ...props, type: type, className: buttonClassName({ variant, size, block, className }), children: [icon, children] }));
}
