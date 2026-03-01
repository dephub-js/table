import type { TableKind } from './types.js';

import { Builder } from './builder.js';

/**
 * Builder for CSV output.
 *
 * @example
 * ```ts
 * new Csv()
 *   .add('Name', 'Age')
 *   .add('Alice', 30)
 *   .build();
 * // "Name","Age"\n"Alice","30"
 * ```
 */
export class Csv extends Builder<string> {
  override readonly kind: TableKind = 'csv';

  override build(): string {
    return this.rows
      .map((row) =>
        row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(','),
      )
      .join('\n');
  }
}
