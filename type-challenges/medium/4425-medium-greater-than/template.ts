type GreaterThan<
  T extends number,
  U extends number,
  Arr extends []
> = Arr['length'] extends T
  ? Arr['length'] extends U
    ? false
    : false
  : Arr['length'] extends U
  ? true
  : GreaterThan<T, U, [...Arr]>
