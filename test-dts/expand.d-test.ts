type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

type ExpandRec<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRec<O[K]> }
    : never
  : T

// 1.keyof
type obj = {
  name: string
  age: string
}

type keyofTest = keyof obj
type r1 = Expand<keyofTest>

// 2.类型别名
type obj2 = {
  age: number
}
type cUnion = boolean | number

type unionCase = obj2 | string
type r2 = Expand<unionCase>

// 2.2嵌套
type obj3 = {
  // c: obj2
  c: cUnion
  name: string
}
type r3 = ExpandRec<obj3>
