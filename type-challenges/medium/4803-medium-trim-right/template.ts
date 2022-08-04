type DeleteChar = ' ' | '\n' | '\t'

type TrimRight<S extends string> = S extends `${infer R}${DeleteChar}`
  ? TrimRight<R>
  : S
