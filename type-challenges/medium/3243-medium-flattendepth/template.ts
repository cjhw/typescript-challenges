// 拍平一次
type FlattenOnce<T extends unknown[]> = T extends [infer F, ...infer R]
  ? [...(F extends unknown[] ? F : [F]), ...FlattenOnce<R>]
  : []

// 判断是不是拍平的数组
type IsFlatten<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? false
    : IsFlatten<R>
  : true

type FlattenDepth<
  T extends unknown[],
  D extends number = 1,
  Reduce extends unknown[] = []
> = IsFlatten<T> extends true
  ? T
  : Reduce['length'] extends D
  ? T
  : FlattenDepth<FlattenOnce<T>, D, [unknown, ...Reduce]>
