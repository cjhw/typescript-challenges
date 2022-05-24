type PercentageParser<
  A extends string,
  U extends [string, string, string] = ['', '', '']
> = A extends `${infer T}${infer R}`
  ? T extends '+' | '-'
    ? PercentageParser<R, [T, U[1], U[2]]>
    : T extends '%'
    ? PercentageParser<R, [U[0], U[1], T]>
    : PercentageParser<R, [U[0], `${U[1]}${T}`, U[2]]>
  : U
