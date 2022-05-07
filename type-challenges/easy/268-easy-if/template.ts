type If<C extends boolean, T, F> = C extends true ? T : F

// 严格模式和非严格模式下抽象类型之间的可分配性
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html
