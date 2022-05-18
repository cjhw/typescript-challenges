type Merge<F extends {}, S extends {}> = {
  [T in keyof F | keyof S]: T extends keyof S
    ? S[T]
    : T extends keyof F
    ? F[T]
    : never
}
