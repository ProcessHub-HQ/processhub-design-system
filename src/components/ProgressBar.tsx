import type { HTMLAttributes } from "react";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value?: number;
  max?: number;
}

export function ProgressBar({
  label,
  value,
  max = 100,
  className = "",
  ...props
}: ProgressBarProps) {
  const indeterminate = value === undefined;
  const safeMax = max > 0 ? max : 100;
  const safeValue = indeterminate
    ? undefined
    : Math.min(safeMax, Math.max(0, value));
  const percent = safeValue === undefined ? 0 : (safeValue / safeMax) * 100;

  return (
    <div
      {...props}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={safeValue}
      aria-valuetext={
        safeValue === undefined ? undefined : `${Math.round(percent)}%`
      }
      className={[
        "ph-progress",
        indeterminate ? "ph-progress--indeterminate" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="ph-progress__track">
        <span
          className="ph-progress__fill"
          style={indeterminate ? undefined : { width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
