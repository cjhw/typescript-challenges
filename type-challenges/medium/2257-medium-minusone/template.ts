type MinusOne<
  T extends number,
  Result extends number[] = []
> = T extends Result['length']
  ? Result extends [infer F, ...infer R]
    ? R['length']
    : 0
  : MinusOne<T, [...Result, T]>

type q = MinusOne<100>
