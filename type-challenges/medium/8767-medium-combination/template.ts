type Combination<T extends string[], U = T[number], A = U> = U extends string
  ? `${U} ${Combination<T, Exclude<A, U>>}` | U
  : never
