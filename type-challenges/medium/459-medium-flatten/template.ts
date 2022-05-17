type Flatten<T> = T extends [infer R, ...infer L]
  ? R extends unknown[]
    ? [...Flatten<R>, ...Flatten<L>]
    : [Flatten<R>, ...Flatten<L>]
  : T
