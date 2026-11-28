import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Menu({ label, className = "", "aria-label": ariaLabel, children, ...props }) {
    return (_jsx("div", { ...props, role: "menu", "aria-label": label ?? ariaLabel, className: ["ph-menu", className].filter(Boolean).join(" "), children: children }));
}
export function MenuItem({ icon, shortcut, danger = false, onSelect, className = "", onClick, type = "button", disabled, children, ...props }) {
    return (_jsxs("button", { ...props, type: type, role: "menuitem", disabled: disabled, className: [
            "ph-menu__item",
            danger ? "ph-menu__item--danger" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "), onClick: (event) => {
            onClick?.(event);
            if (!event.defaultPrevented)
                void onSelect?.();
        }, children: [icon && _jsx("span", { className: "ph-menu__icon", children: icon }), _jsx("span", { className: "ph-menu__label", children: children }), shortcut && _jsx("span", { className: "ph-menu__shortcut", children: shortcut })] }));
}
export function MenuSeparator({ className = "", ...props }) {
    return (_jsx("div", { ...props, role: "separator", className: ["ph-menu__separator", className].filter(Boolean).join(" ") }));
}
export function MenuLabel({ className = "", children, ...props }) {
    return (_jsx("div", { ...props, className: ["ph-menu__heading", className].filter(Boolean).join(" "), children: children }));
}
