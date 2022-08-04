type Zip<T extends unknown[], P extends unknown[], O extends unknown[] = []> = [
  T,
  P
] extends [[infer A, ...infer R1], [infer B, ...infer R2]]
  ? 0 extends R1['length'] | R2['length']
    ? [...O, [A, B]]
    : Zip<R1, R2, [...O, [A, B]]>
  : []
