import { useId, type SVGProps } from "react";

interface LogoMarkProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export function LogoMark({ className = "", ...props }: LogoMarkProps) {
  const clipId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
      className={["ph-logo__mark", className].filter(Boolean).join(" ")}
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M398 0H114C51.0395 0 0 51.0395 0 114V398C0 460.96 51.0395 512 114 512H398C460.96 512 512 460.96 512 398V114C512 51.0395 460.96 0 398 0Z"
          fill="#4779D1"
        />
        <path
          d="M308.978 146H135.022C126.173 146 119 153.163 119 162C119 170.837 126.173 178 135.022 178H308.978C317.827 178 325 170.837 325 162C325 153.163 317.827 146 308.978 146Z"
          fill="white"
        />
        <path
          d="M377.017 212H134.983C126.156 212 119 219.387 119 228.5C119 237.613 126.156 245 134.983 245H377.017C385.844 245 393 237.613 393 228.5C393 219.387 385.844 212 377.017 212Z"
          fill="white"
        />
        <path
          opacity="0.45"
          d="M263 278H135C126.163 278 119 285.163 119 294C119 302.837 126.163 310 135 310H263C271.837 310 279 302.837 279 294C279 285.163 271.837 278 263 278Z"
          fill="white"
        />
        <path d="M291 256L389 310.5L291 365V256Z" fill="white" />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

interface LogoProps {
  size?: "md" | "lg";
  href?: string;
  className?: string;
}

export function Logo({ size = "md", href = "/", className = "" }: LogoProps) {
  return (
    <a
      href={href}
      className={["ph-logo", size === "lg" ? "ph-logo--lg" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      <LogoMark />
      <span>ProcessHub</span>
    </a>
  );
}
