type TransForm<T, R extends { mapFrom: any; mapTo: any }> = R extends any
  ? T extends R['mapFrom']
    ? R['mapTo']
    : never
  : never

type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [P in keyof T]: T[P] extends R['mapFrom'] ? TransForm<T[P], R> : T[P]
}
