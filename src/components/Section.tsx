import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tight?: boolean;
  children: ReactNode;
}

export function Section({
  tight = false,
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={["ph-section", tight ? "ph-section--tight" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
