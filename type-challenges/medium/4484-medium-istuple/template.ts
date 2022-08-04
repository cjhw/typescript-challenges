type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly [...unknown[]]
  ? T extends readonly [infer A, ...infer R]
    ? true
    : T['length'] extends 0
    ? true
    : false
  : false
