type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  U extends any[] = [],
  F extends boolean = false
> = T extends [infer K, ...infer R]
  ? U['length'] extends End
    ? Fill<R, N, Start, End, [...U, K], false>
    : U['length'] extends Start
    ? Fill<R, N, Start, End, [...U, N], true>
    : F extends true
    ? Fill<R, N, Start, End, [...U, N], true>
    : Fill<R, N, Start, End, [...U, K], false>
  : U
