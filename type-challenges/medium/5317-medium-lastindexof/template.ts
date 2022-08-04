type LastIndexOf<T, U> = T extends [...infer R, infer F]
  ? (<V>() => V extends F ? 1 : 0) extends <V>() => V extends U ? 1 : 0
    ? R['length']
    : LastIndexOf<R, U>
  : -1
