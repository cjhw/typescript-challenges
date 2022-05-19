type Mixin<O, O1> = { [T in keyof (O & O1)]: (O & O1)[T] }

type Diff<O, O1> = Omit<Mixin<O, O1>, keyof (O | O1)>

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type d = Mixin<Foo, Bar>

type s = keyof (Foo | Bar)
