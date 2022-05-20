type isFalse<T> = T extends Record<string, never> | [] | 0 | '' | false
  ? true
  : false

type AnyOf<T extends readonly any[]> = isFalse<T[number]> extends true
  ? false
  : true

type f = Record<string, never>
