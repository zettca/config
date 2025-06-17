# @zettca/config

**Configuration files** for web-based React projects.
See included configuration in [Usage](#usage)

## Installation

```sh
npm i -D @zettca/config
```

## Usage

### Prettier

```sh
npm i -D prettier@3 @ianvs/prettier-plugin-sort-imports
```

Add this your your `package.json`:

```json
{
  "prettier": "@zettca/config/prettier"
}
```

### TSConfig

```sh
npm i -D typescript@5
```

Add this to your `tsconfig.json`:

```json
{
  "extends": "@zettca/config/tsconfig"
}
```

### TSReset

```sh
npm i -D @total-typescript/ts-reset
```

```ts
import "@zettca/config/reset.d.ts";
```

### Oxlint

```sh
npm i -D oxlint
```

Add this to your `.oxlintrc.json`:

```json
{
  "extends": ["@zettca/config/oxlint/strict.json"]
}
```
