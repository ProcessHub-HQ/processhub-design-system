import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactNode;
}

export function Menu({
  label,
  className = "",
  "aria-label": ariaLabel,
  children,
  ...props
}: MenuProps) {
  return (
    <div
      {...props}
      role="menu"
      aria-label={label ?? ariaLabel}
      className={["ph-menu", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}

export interface MenuItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  icon?: ReactNode;
  shortcut?: string;
  danger?: boolean;
  onSelect?: () => void | Promise<void>;
  children: ReactNode;
}

export function MenuItem({
  icon,
  shortcut,
  danger = false,
  onSelect,
  className = "",
  onClick,
  type = "button",
  disabled,
  children,
  ...props
}: MenuItemProps) {
  return (
    <button
      {...props}
      type={type}
      role="menuitem"
      disabled={disabled}
      className={[
        "ph-menu__item",
        danger ? "ph-menu__item--danger" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) void onSelect?.();
      }}
    >
      {icon && <span className="ph-menu__icon">{icon}</span>}
      <span className="ph-menu__label">{children}</span>
      {shortcut && <span className="ph-menu__shortcut">{shortcut}</span>}
    </button>
  );
}

export type MenuSeparatorProps = HTMLAttributes<HTMLDivElement>;

export function MenuSeparator({
  className = "",
  ...props
}: MenuSeparatorProps) {
  return (
    <div
      {...props}
      role="separator"
      className={["ph-menu__separator", className].filter(Boolean).join(" ")}
    />
  );
}

export interface MenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function MenuLabel({
  className = "",
  children,
  ...props
}: MenuLabelProps) {
  return (
    <div
      {...props}
      className={["ph-menu__heading", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
