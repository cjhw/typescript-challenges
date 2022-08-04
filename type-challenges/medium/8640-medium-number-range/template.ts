type NumberRange<
  L extends number,
  H extends number,
  T extends unknown[] = [],
  Flag = T['length'] extends L ? true : false,
  R = never
> = Flag extends true
  ? T['length'] extends H
    ? R | H
    : NumberRange<L, H, [...T, 1], Flag, R | T['length']>
  : NumberRange<L, H, [...T, 1]>
