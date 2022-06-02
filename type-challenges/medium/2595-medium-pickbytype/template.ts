type PickByType<T, U> = { [R in keyof T as T[R] extends U ? R : never]: T[R] }
