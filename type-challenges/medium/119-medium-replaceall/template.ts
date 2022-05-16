type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer R}${From}${infer T}`
  ? `${ReplaceAll<R, From, To>}${To}${ReplaceAll<T, From, To>}`
  : S
