type RequiredByKeys<T, K = keyof T> = KV<T & Required<Pick<T, K & keyof T>>>
