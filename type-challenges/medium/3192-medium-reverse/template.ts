type Reverse<T extends unknown[]> = T extends [infer Head, ...infer Rest]
  ? [...Reverse<Rest>, Head]
  : []

type as = Reverse<[1]>
