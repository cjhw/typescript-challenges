type ReplaceKeys<U, T, Y> = {
  [k in keyof U]: k extends T ? (k extends keyof Y ? Y[k] : never) : U[k]
}
