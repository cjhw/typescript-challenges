type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer R}${From}${infer B}`
  ? From extends ''
    ? S
    : `${R}${To}${B}`
  : S
