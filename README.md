# @dephub/table 📊

> Tiny table builder for any format — text, HTML, CSV, Markdown, JSON, or custom outputs.

[![NPM version](https://img.shields.io/npm/v/@dephub/table.svg?style=flat)](https://npmjs.org/package/@dephub/table)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 🧱 Build tables row-by-row using a fluent API
- 📜 Output to **text**, **HTML**, **CSV**, **JSON**, or **Markdown**
- 🧩 Extend with **custom builders** via callback functions
- 💥 Type-safe errors and validation through `TableError`
- 🪶 Lightweight, dependency-free, and works in **Node.js** or
  **browser ESM**

---

## Installation 📦

- npm: `npm install @dephub/table`
- pnpm: `pnpm add @dephub/table`
- yarn: `yarn add @dephub/table`
- bun: `bun add @dephub/table`

## Usage 🎯

### Basic Builder

```ts
import { Builder } from '@dephub/table';

const table = new Builder()
  .add('Name', 'Age')
  .add('Alice', 30)
  .add('Bob', 25)
  .build();

console.log(table);
// [["Name","Age"],["Alice",30],["Bob",25]]
```

---

### CSV Output

```ts
import { Csv } from '@dephub/table';

const csv = new Csv().add('Name', 'Age').add('Alice', 30).build();

console.log(csv);
// "Name","Age"\n"Alice","30"
```

---

### HTML Output

```ts
import { Html } from '@dephub/table';

const html = new Html().add('Product', 'Price').add('Apple', 1.99).build();

console.log(html);
// "<table><tr><td>Product</td><td>Price</td></tr><tr><td>Apple</td><td>1.99</td></tr></table>"
```

---

### Markdown Output

```ts
import { Markdown } from '@dephub/table';

const md = new Markdown().add('Name', 'Age').add('Lila', 3).build();

console.log(md);
/*
| Name | Age |
| ---- | --- |
| Lila | 3   |
*/
```

---

### Custom Output

```ts
import { Custom } from '@dephub/table';

const xml = new Custom(
  (rows) =>
    `<root>${rows.map((r) => `<row>${r.join('')}</row>`).join('')}</root>`,
  'data.xml',
)
  .add('Name', 'Age')
  .add('Zoe', 21)
  .build();

console.log(xml);
// "<root><row>NameAge</row><row>Zoe21</row></root>"
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R. — [estarlincito.com](https://estarlincito.com)
