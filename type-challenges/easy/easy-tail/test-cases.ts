import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Tail<[3, 2, 1]>, 1>>,
  Expect<Equal<Tail<[() => 123, { a: string }]>, { a: string }>>,
  Expect<Equal<Tail<[]>, never>>,
  Expect<Equal<Tail<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  Tail<'notArray'>,
  // @ts-expect-error
  Tail<{ 0: 'arrayLike' }>
]
