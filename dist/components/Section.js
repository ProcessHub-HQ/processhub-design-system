import { jsx as _jsx } from "react/jsx-runtime";
export function Section({ tight = false, className = "", children, ...props }) {
    return (_jsx("section", { ...props, className: ["ph-section", tight ? "ph-section--tight" : "", className]
            .filter(Boolean)
            .join(" "), children: children }));
}
