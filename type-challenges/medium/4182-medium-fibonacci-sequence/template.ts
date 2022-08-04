// 斐波那契数列

type Fibonacci<
  T extends number,
  I1 extends unknown[] = [1],
  I2 extends unknown[] = [1],
  C extends unknown[] = [1]
> = C['length'] extends T
  ? I1['length']
  : Fibonacci<T, I2, [...I1, ...I2], [...C, 1]>
