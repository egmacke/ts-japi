import { Dictionary, UnionToIntersection } from '../types/global.types';
/**
 * Deep merge two objects over their enumerable properties.
 *
 * @param target The object to merge into
 * @param source The objects to use for merging
 */
export default function merge<T extends Dictionary<any>, U extends Dictionary<any>[]>(target: T, ...sources: U): T & UnionToIntersection<U[number]>;
//# sourceMappingURL=merge.d.ts.map