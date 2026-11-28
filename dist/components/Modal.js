import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
let openModalCount = 0;
let bodyLockCount = 0;
let previousBodyOverflow = "";
const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
].join(",");
export function Modal({ titleId, descriptionId, className, onClose, children, }) {
    const panelRef = useRef(null);
    const restoreFocusRef = useRef(null);
    useEffect(() => {
        const active = document.activeElement;
        restoreFocusRef.current =
            active instanceof HTMLElement && !panelRef.current?.contains(active)
                ? active
                : null;
        openModalCount += 1;
        document.documentElement.classList.add("ph-modal-open");
        if (bodyLockCount === 0) {
            previousBodyOverflow = document.body.style.overflow;
        }
        bodyLockCount += 1;
        document.body.style.overflow = "hidden";
        const panel = panelRef.current;
        if (panel) {
            const preferred = panel.querySelector("[data-autofocus], [autofocus]");
            const first = preferred ?? panel.querySelector(focusableSelector);
            (first ?? panel).focus();
        }
        return () => {
            openModalCount = Math.max(0, openModalCount - 1);
            if (openModalCount === 0) {
                document.documentElement.classList.remove("ph-modal-open");
            }
            bodyLockCount = Math.max(0, bodyLockCount - 1);
            if (bodyLockCount === 0) {
                document.body.style.overflow = previousBodyOverflow;
            }
            restoreFocusRef.current?.focus();
        };
    }, []);
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
                return;
            }
            if (event.key !== "Tab")
                return;
            const panel = panelRef.current;
            if (!panel)
                return;
            const focusable = Array.from(panel.querySelectorAll(focusableSelector)).filter((element) => element.getClientRects().length > 0);
            if (focusable.length === 0) {
                event.preventDefault();
                panel.focus();
                return;
            }
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const current = document.activeElement;
            const inside = current instanceof HTMLElement &&
                current !== panel &&
                panel.contains(current);
            if (event.shiftKey) {
                if (!inside || current === first) {
                    event.preventDefault();
                    last.focus();
                }
            }
            else if (!inside || current === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onClose]);
    return (_jsx("div", { className: "ph-dialog-scrim", children: _jsx("section", { ref: panelRef, className: className, role: "dialog", "aria-modal": "true", "aria-labelledby": titleId, "aria-describedby": descriptionId, tabIndex: -1, children: children }) }));
}
