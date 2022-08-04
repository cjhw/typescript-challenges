type IndexOf<
  T extends unknown[],
  U extends unknown,
  Count extends 1[] = []
> = T extends [infer First, ...infer Rest]
  ? (<V>() => V extends First ? 1 : 0) extends <V>() => V extends U ? 1 : 0
    ? Count['length']
    : IndexOf<Rest, U, [...Count, 1]>
  : -1
