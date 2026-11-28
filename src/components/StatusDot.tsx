import type { HTMLAttributes, ReactNode } from "react";

export type StatusDotStatus = "idle" | "running" | "warning" | "danger";

const defaultLabels: Record<StatusDotStatus, string> = {
  idle: "Idle",
  running: "Running",
  warning: "Warning",
  danger: "Danger",
};

export interface StatusDotProps extends HTMLAttributes<HTMLSpanElement> {
  status?: StatusDotStatus;
  label?: ReactNode;
}

export function StatusDot({
  status = "idle",
  label,
  className = "",
  "aria-label": ariaLabel,
  ...props
}: StatusDotProps) {
  const dotClass = [
    "ph-status-dot",
    status === "idle" ? "" : `ph-status-dot--${status}`,
  ]
    .filter(Boolean)
    .join(" ");

  if (label) {
    return (
      <span
        {...props}
        className={["ph-status", className].filter(Boolean).join(" ")}
      >
        <span className={dotClass} aria-hidden="true" />
        <span className="ph-status__label">{label}</span>
      </span>
    );
  }

  return (
    <span
      {...props}
      role="img"
      aria-label={ariaLabel ?? defaultLabels[status]}
      className={[dotClass, className].filter(Boolean).join(" ")}
    />
  );
}
