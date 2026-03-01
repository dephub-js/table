/**
 * A single table cell.
 * Can contain a string or a number.
 */
export type TableCell = number | string;

/**
 * Output format identifier.
 *
 * - `'text'`      – plain text table
 * - `'html'`      – `<table>` markup
 * - `'json'`      – JSON string
 * - `'csv'`       – comma-separated values
 * - `'markdown'`  – GitHub-flavored markdown table
 * - `'custom'`    – user-defined format
 * - `'builder'`   – raw `string[][]` (default)
 */
export type TableKind =
  | 'builder'
  | 'csv'
  | 'custom'
  | 'html'
  | 'json'
  | 'markdown'
  | 'text';

/**
 * A single row of the table.
 * Each cell belongs to a specific column.
 */
export type TableRow = TableCell[];
