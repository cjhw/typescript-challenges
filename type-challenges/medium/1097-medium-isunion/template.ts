type IsUnion<T, S = T> = T extends S ? ([S] extends [T] ? false : true) : false
