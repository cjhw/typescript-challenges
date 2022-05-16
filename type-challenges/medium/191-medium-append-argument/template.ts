type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer P
) => infer B
  ? (...args: [...P, A]) => B
  : never
