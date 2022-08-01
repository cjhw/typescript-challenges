type Shift<T extends unknown[]> = T extends [infer Rest, ...infer Other]
  ? [...Other]
  : never
