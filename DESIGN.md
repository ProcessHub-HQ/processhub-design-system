# ProcessHub design language

Apple Human Interface Guidelines for macOS, adapted to a compact, dark desktop
utility. The product UI follows this document; the marketing site keeps its own
larger type scale.

## Principles

- **Clarity.** State and the next action are readable before decoration.
- **Deference.** Chrome recedes; the services and their status carry the screen.
- **Depth.** Layering comes from surface, border, and shadow — never from a new
  color or a gradient.
- **Density with legibility.** This is an 800 × 500 utility window. Compact is
  allowed; unreadable is not.

## Type

System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
Monospace is reserved for process data: PIDs, ports, logs, commands.

| Role | Size | Line | Weight |
| --- | --- | --- | --- |
| Caption | 11px | 13px | 400–600 |
| Caption strong | 12px | 15px | 590–600 |
| Body | 13px | 18px | 400–600 |
| Subheadline | 15px | 20px | 400–600 |
| Headline | 17px | 22px | 600–650 |
| Title 3 | 20px | 25px | 650 |
| Title 2 | 22px | 28px | 650 |
| Title 1 | 28px | 34px | 700 |
| Large title | 34px | 41px | 700 |

Never set product text below 11px. Use `--ph-text-caption` as the floor. Avoid
fractional sizes and one-off scales; pick the nearest role.

## Spacing

8pt grid with half steps: 2, 4, 8, 12, 16, 20, 24, 32, 40.

- Window content margin: 20px.
- Group separation: 16px.
- Related control separation: 8px.
- Inline icon-to-label: 6px.

More space above a section heading than below it. Cards and rows share the same
gutter so grids stay aligned.

## Controls

| Size | Height | Label |
| --- | --- | --- |
| Extra small | 22px | 11px |
| Small | 28px | 12px |
| Regular | 34px | 13px |
| Large | 44px | 15px |

Buttons use a 6px radius, semibold labels, and four visible states: default,
hover, pressed, focus. Disabled is a 50% reduction, not a new color.

Text fields are 28px tall with 13px text and a 6px radius. Labels are 12px;
hints are 11px. Inputs and text areas share the same border, radius, and focus
ring.

Hit targets are at least 24 × 24px. Icon-only controls always carry an
`aria-label` and a tooltip.

## Color

Use semantic tokens only. The palette is fixed; do not introduce a second accent
or decorative hues.

- Accent: primary actions, selection, focus, active navigation.
- Status: `status-running`, `status-warning`, `status-danger`, `status-idle`.
- Surfaces: canvas, bar, surface, raised, field.
- Text: text, secondary, quiet, muted, faint. `faint` is the floor for metadata,
  never for body copy.

Status is never carried by color alone: pair it with a dot, label, or icon.

## Radii

| Token | Value | Use |
| --- | --- | --- |
| `--ph-radius-control` | 6px | Buttons, icon buttons, inputs |
| `--ph-radius-field` | 6px | Text fields, selects, textareas |
| `--ph-radius-card` | 10px | Service cards, small panels |
| `--ph-radius-panel` | 12px | Dialogs, popovers |
| `--ph-radius-pill` | 999px | Badges only |

Do not invent intermediate radii (7, 11, 13, 15). If a surface needs a different
corner, the surface is probably the wrong size.

## Motion

- Fast: 120ms for color, border, and opacity.
- Base: 180ms for reveal and layout.
- Easing: `cubic-bezier(0.2, 0, 0, 1)`.
- Motion conveys state only. No entrance choreography.
- `prefers-reduced-motion` disables animation and smooth scrolling.

## Window chrome

- 52px toolbar with native macOS traffic lights; the title is centered and the
  toolbar is the drag region.
- 26px status bar.
- 20px page gutter.
- Overlays use a scrim, a 12px panel radius, and the dialog shadow.

## Interaction

- Click a service to open details.
- Hover reveals secondary affordances; primary actions stay visible.
- Right-click and `Shift+F10` open the same context menu.
- Enter activates the focused control. Escape closes overlays.
- Focus is a 3px accent ring with a 2px offset, visible for keyboard users only.

## Accessibility

- Body and placeholder text ≥ 4.5:1; large text ≥ 3:1.
- Every control has default, hover, pressed, focus, disabled, and loading states.
- Status is announced in text, not only by color.
- No motion or sound is the only signal for a state change.
- Tab order follows reading order; overlays trap focus and restore it on close.
