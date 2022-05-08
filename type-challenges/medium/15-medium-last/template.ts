type Last<T extends any[]> = T extends [...infer Rest, infer Tail]
  ? Tail
  : never
