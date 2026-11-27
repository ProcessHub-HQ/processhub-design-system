import { type ReactNode } from "react";
interface ModalProps {
    titleId: string;
    className: string;
    onClose: () => void;
    children: ReactNode;
}
export declare function Modal({ titleId, className, onClose, children }: ModalProps): import("react").JSX.Element;
export {};
