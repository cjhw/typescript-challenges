type RemoveIndexSignature<T> = {
  [key in keyof T as key extends `${infer R}` ? R : never]: T[key]
}

type df = {
  [key: number]: 'jjj'
  for(): void
  lll: 'kkk'
}

type gh = { [key in keyof df as key extends `${infer R}` ? R : never]: 'jjj' }
type hh = Expand<keyof gh>
