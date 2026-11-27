import { jsx as _jsx } from "react/jsx-runtime";
export function Container({ narrow = false, className = "", children, ...props }) {
    return (_jsx("div", { ...props, className: [
            "ph-container",
            narrow ? "ph-container--narrow" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "), children: children }));
}
