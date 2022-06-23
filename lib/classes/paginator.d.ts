import { PaginationOf } from '../interfaces/paginator.interface';
import Link from '../models/link.model';
import { SingleOrArray } from '../types/global.types';
/**
 * The {@linkcode Paginator} class is used to construct [pagination links](https://jsonapi.org/format/#fetching-pagination).
 *
 * Example:
 * ```typescript
 * [[include:paginator.example.ts]]
 * ```
 */
export default class Paginator<DataType> {
    /** @internal Generates pagination links. */
    paginate: (data: SingleOrArray<DataType>) => PaginationOf<Link> | void;
    /**
     * Creates a {@linkcode Paginator}.
     *
     * @param paginate A function to generate pagination links from data.
     */
    constructor(paginate: (data: SingleOrArray<DataType>) => PaginationOf<string> | void);
}
//# sourceMappingURL=paginator.d.ts.map