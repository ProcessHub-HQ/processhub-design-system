import { jsxs as _jsxs } from "react/jsx-runtime";
import { buttonClassName, } from "./Button.js";
export function ButtonLink({ variant = "secondary", size = "md", icon, block = false, className = "", children, ...props }) {
    return (_jsxs("a", { ...props, className: buttonClassName({ variant, size, block, className }), children: [icon, children] }));
}
