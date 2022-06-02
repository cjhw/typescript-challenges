type DropChar<
  S extends string,
  C extends string
> = S extends `${infer R}${C}${infer T}` ? DropChar<`${R}${T}`, C> : S
