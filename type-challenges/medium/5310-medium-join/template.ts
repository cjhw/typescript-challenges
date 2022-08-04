type Join<T extends string[], U extends string | number> = T extends [
  infer F,
  ...infer R
]
  ? F extends string
    ? R extends string[]
      ? R extends []
        ? F
        : `${F}${U}${Join<R, U>}`
      : never
    : never
  : ''
