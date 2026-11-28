import { type ReactNode, useEffect } from "react";

let openModalCount = 0;

interface ModalProps {
  titleId: string;
  className: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ titleId, className, onClose, children }: ModalProps) {
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
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="ph-dialog-scrim">
      <section
        className={className}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        {children}
      </section>
    </div>
  );
}
