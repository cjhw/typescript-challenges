type UnionToIntersection<U> = (U extends any ? (p: U) => any : never) extends (
  p: infer R
) => any
  ? R
  : never

//上面的括号不能去掉
type ui = UnionToIntersection<(() => 'foo') | ((i: 42) => true)>

type dsf<U> = U extends any ? (p: U) => any : never

type as = dsf<(() => 'foo') | ((i: 42) => true)>

type fg<U> = as extends (p: infer R) => any ? R : never

type dfk = fg<as>
