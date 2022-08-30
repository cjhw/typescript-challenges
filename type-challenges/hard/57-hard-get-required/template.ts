type MyRequired<T> = { [key in keyof T]-?: T[key] }
type GetRequired<T> = {
  [key in keyof T as T[key] extends MyRequired<T>[key] ? key : never]: T[key]
}
