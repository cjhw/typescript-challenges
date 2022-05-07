type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface TODO {
  a: string
  b: string
}

type P = keyof TODO // a|b
