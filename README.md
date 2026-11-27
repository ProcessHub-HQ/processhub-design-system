# @processhub/design-system

ProcessHub design system: React components, design tokens, and global CSS.

## Install

Install directly from GitHub (a committed `dist/` build ships with the tag):

```json
{
  "dependencies": {
    "@processhub/design-system": "github:ProcessHub-HQ/processhub-design-system#v0.2.0"
  }
}
```

Then install:

```sh
pnpm install
```

`react` and `react-dom` `^19.1.0` are peer dependencies and must be installed by the consuming app.

## Styles

Import the CSS once at your app entry point, in this order:

```ts
import "@processhub/design-system/tokens.css";
import "@processhub/design-system/base.css";
import "@processhub/design-system/components.css";
```

`tokens.css` defines the `--ph-*` custom properties, `base.css` applies element resets and page typography, and `components.css` styles the components below.

## Theming

Tokens are scoped to the `data-theme` attribute on any ancestor element (`<html>` works best):

```html
<html data-theme="light">
  ...
</html>
```

```html
<html data-theme="dark">
  ...
</html>
```

Light is also the fallback when no attribute is set. To follow the OS preference, set the attribute from your own script or state.

## Components

```tsx
import {
  Badge,
  Button,
  Container,
  Input,
  Logo,
  LogoMark,
  Modal,
  Section,
  Textarea,
} from "@processhub/design-system";
```

- `Button` — `variant`: `primary` | `secondary` | `ghost` | `danger` | `new` | `icon`; `size`: `xs` | `sm` | `md` | `lg`; plus `icon`, `block`, and native button props.
- `Badge` — `variant`: `neutral` | `accent` | `success` | `warning` | `danger`; `size`: `sm` | `md`.
- `Input` / `Textarea` — native field props plus `label` and optional `hint`.
- `Modal` — renders a dialog scrim; requires `titleId`, `className`, and `onClose` (Escape closes).
- `Container` — page width wrapper; `narrow` for tighter content.
- `Section` — vertical spacing wrapper; `tight` for reduced spacing.
- `Logo` — linked ProcessHub wordmark with the inline mark; `size`: `md` | `lg`.
- `LogoMark` — the ProcessHub icon as inline SVG, safe to use anywhere (no asset URL resolution).

The raw SVG also ships at `@processhub/design-system/assets/icon.svg`.

## Design language

The product UI follows the Apple HIG-aligned language in [DESIGN.md](DESIGN.md):
an 11px minimum caption size, 13px body, 28/34px controls, a 6px control radius,
an 8pt spacing grid, and complete hover, pressed, focus, and disabled states.

The legacy `--ph-text-*` marketing scale stays available for the site.

## Local development

```sh
pnpm install
pnpm typecheck
pnpm build
```

`pnpm build` compiles TypeScript from `src/` into `dist/` and copies `tokens.css`, `base.css`, and `components.css` alongside it. The `dist/` directory is committed so the package can be consumed as a GitHub dependency without a build step; re-run `pnpm build` and commit the result after changing source.

## License

The ProcessHub design system is licensed under the [GNU Affero General Public License v3.0 or later](LICENSE).
