# @akashpoudelnp/design-system

ProcessHub design system: React components, design tokens, and global CSS.

## Install

Install directly from GitHub (a committed `dist/` build ships with the tag):

```json
{
  "dependencies": {
    "@akashpoudelnp/design-system": "github:akashpoudelnp/processhub-design-system#v0.1.0"
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
import "@akashpoudelnp/design-system/tokens.css";
import "@akashpoudelnp/design-system/base.css";
import "@akashpoudelnp/design-system/components.css";
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
} from "@akashpoudelnp/design-system";
```

- `Button` — `variant`: `primary` | `secondary` | `ghost` | `danger` | `new` | `icon`; `size`: `xs` | `sm` | `md` | `lg`; plus `icon`, `block`, and native button props.
- `Badge` — `variant`: `neutral` | `accent` | `success` | `warning` | `danger`; `size`: `sm` | `md`.
- `Input` / `Textarea` — native field props plus `label` and optional `hint`.
- `Modal` — renders a dialog scrim; requires `titleId`, `className`, and `onClose` (Escape closes).
- `Container` — page width wrapper; `narrow` for tighter content.
- `Section` — vertical spacing wrapper; `tight` for reduced spacing.
- `Logo` — linked ProcessHub wordmark with the inline mark; `size`: `md` | `lg`.
- `LogoMark` — the ProcessHub icon as inline SVG, safe to use anywhere (no asset URL resolution).

The raw SVG also ships at `@akashpoudelnp/design-system/assets/icon.svg`.

## Local development

```sh
pnpm install
pnpm typecheck
pnpm build
```

`pnpm build` compiles TypeScript from `src/` into `dist/` and copies `tokens.css`, `base.css`, and `components.css` alongside it. The `dist/` directory is committed so the package can be consumed as a GitHub dependency without a build step; re-run `pnpm build` and commit the result after changing source.
