type Tail<T extends unknown[]> = T extends [...infer Rest, infer Tail]
  ? Tail
  : never
