type Impl<Fn> = Fn extends (...arg: infer Arg) => infer R
  ? Arg extends [infer F, ...infer Rest]
    ? (k: F) => Impl<(...arg: Rest) => R>
    : R
  : never

declare function Currying<Fn>(fn: Fn): Impl<Fn>
