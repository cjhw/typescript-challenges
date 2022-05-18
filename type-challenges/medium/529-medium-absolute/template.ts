type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer V}`
  ? V
  : `${T}`
