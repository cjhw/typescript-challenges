type StringToUnion<T extends string> = T extends `${infer R}${infer S}`
  ? R | StringToUnion<S>
  : never
