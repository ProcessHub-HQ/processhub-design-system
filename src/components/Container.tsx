import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
  children: ReactNode;
}

export function Container({
  narrow = false,
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={[
        "ph-container",
        narrow ? "ph-container--narrow" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
