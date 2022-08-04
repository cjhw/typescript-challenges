type Trunc<T extends number | string> = `${T}` extends `${infer N}.${string}`
  ? N
  : `${T}`
