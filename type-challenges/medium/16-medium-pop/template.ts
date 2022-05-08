type Pop<T extends any[]> = T extends [...infer Rest, infer pop] ? Rest : never
