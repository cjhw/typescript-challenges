type FlipArguments<T extends (...args: any) => any> = T extends (
  ...args: infer R
) => infer S
  ? (...args: Reverse<R>) => S
  : T
