type Without<T, U> = T extends [infer P, ...infer R]
  ? P extends T[number] & (U extends any[] ? U[number] : U)
    ? Without<R, U>
    : [P, ...Without<R, U>]
  : []
