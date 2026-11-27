import { jsx as _jsx } from "react/jsx-runtime";
const variantClass = {
    neutral: "",
    accent: "ph-badge--accent",
    success: "ph-badge--success",
    warning: "ph-badge--warning",
    danger: "ph-badge--danger",
};
const sizeClass = {
    sm: "ph-badge--sm",
    md: "",
};
export function Badge({ variant = "neutral", size = "md", className = "", children, ...props }) {
    return (_jsx("span", { ...props, className: ["ph-badge", variantClass[variant], sizeClass[size], className]
            .filter(Boolean)
            .join(" "), children: children }));
}
