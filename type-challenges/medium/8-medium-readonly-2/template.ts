type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [R in K]: T[R]
} & { [P in Exclude<keyof T, K>]: T[P] }

// K extends keyof T = keyof T是给默认值

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

type A = MyReadonly2<Todo1, 'title' | 'description'>
