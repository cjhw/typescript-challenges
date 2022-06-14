type KV<V> = {
  [P in keyof V]: V[P]
}

type PartialByKeys<T, K = keyof T> = KV<
  {
    [P in keyof T as P extends K ? P : never]?: T[P]
  } & { [P in keyof T as P extends K ? never : P]: T[P] }
>
