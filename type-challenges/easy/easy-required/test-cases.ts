import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface RequiredUser {
  name: string
  age: number
  address: string
}

type cases = [Expect<Equal<myRequired<User>, RequiredUser>>]
