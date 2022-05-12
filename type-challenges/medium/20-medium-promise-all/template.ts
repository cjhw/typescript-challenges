declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)

type b = [1, 2, 3]

type a<b> = Promise<{
  [K in keyof b]: b[K] extends Promise<infer R> ? R : b[K]
}>

type y = a<[1, 2, 3]>

type c<T extends any[]> = [...T]
