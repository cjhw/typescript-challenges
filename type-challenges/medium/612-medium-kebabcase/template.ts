// your answers
type KebabCase<S, F extends string = ''> = S extends `${infer L}${infer R}`
  ? L extends Lowercase<L>
    ? `${KebabCase<R, `${F}${L}`>}`
    : F extends ''
    ? `${KebabCase<R, `${F}${Lowercase<L>}`>}`
    : `${KebabCase<R, `${F}-${Lowercase<L>}`>}`
  : F
