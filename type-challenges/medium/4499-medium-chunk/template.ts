type Chunk<
  T extends any[],
  N extends number,
  U extends any[] = []
> = T extends [infer K, ...infer R]
  ? U['length'] extends N
    ? [U, ...Chunk<R, N, [K]>]
    : Chunk<R, N, [...U, K]>
  : U extends []
  ? []
  : [U]
