import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
let openModalCount = 0;
export function Modal({ titleId, className, onClose, children }) {
    useEffect(() => {
        openModalCount += 1;
        document.documentElement.classList.add("ph-modal-open");
        return () => {
            openModalCount = Math.max(0, openModalCount - 1);
            if (openModalCount === 0) {
                document.documentElement.classList.remove("ph-modal-open");
            }
        };
    }, []);
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
