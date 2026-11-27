import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
export function Modal({ titleId, className, onClose, children }) {
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape")
                onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose]);
    return (_jsx("div", { className: "ph-dialog-scrim", children: _jsx("section", { className: className, role: "dialog", "aria-modal": "true", "aria-labelledby": titleId, children: children }) }));
}
