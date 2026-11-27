import { type ReactNode, useEffect } from "react";

interface ModalProps {
  titleId: string;
  className: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ titleId, className, onClose, children }: ModalProps) {
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
