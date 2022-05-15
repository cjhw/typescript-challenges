type Trim<S extends string> = S extends
  | `${' ' | '\n' | '\t'}${infer R}`
  | `${infer R}${' ' | '\n' | '\t'}`
  ? Trim<R>
  : S
