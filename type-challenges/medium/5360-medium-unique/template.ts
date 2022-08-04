type Unique<T extends unknown[], Set extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? IndexOf<Set, F> extends -1
    ? Unique<R, [...Set, F]>
    : Unique<R, Set>
  : Set
