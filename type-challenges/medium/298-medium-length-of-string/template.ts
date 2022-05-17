type LengthOfString<
  S extends string,
  A extends any[] = []
> = S extends `${infer L}${infer R}`
  ? LengthOfString<R, [...A, L]>
  : A['length']
