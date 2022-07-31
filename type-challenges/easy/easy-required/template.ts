type myRequired<K> = {
  [P in keyof K]-?: K[P]
}
