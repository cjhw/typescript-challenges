type Spread<C extends string, S extends string> =
  | `${C}${S}`
  | (S extends `${infer F}${infer R}` ? `${F}${Spread<C, R>}` : C)

type AllCombinations<S extends string> = S extends `${infer F}${infer R}`
  ? AllCombinations<R> | Spread<F, AllCombinations<R>>
  : ''

type dd = AllCombinations<'ABC'>

type ff = Spread<'A', '' | 'B'>
