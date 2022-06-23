import { LinkerOptions } from '../interfaces/linker.interface';
import Link from '../models/link.model';
import { VariadicFunction } from '../types/global.types';
/**
 * The {@linkcode Linker} class is used to construct a [link](https://jsonapi.org/format/#document-links).
 *
 * Example:
 * ```typescript
 * [[include:linker.example.ts]]
 * ```
 */
export default class Linker<Dependencies extends any[]> {
    /** @internal Generates a {@linkcode Link}. */
    link: VariadicFunction<Dependencies, Link>;
    /**
     * Creates a {@linkcode Linker}.
     *
     * @param link A {@linkcode LinkFunction} used to generate a string URI from its arguments.
     * @param options Options for the linker.
     */
    constructor(link: VariadicFunction<Dependencies, string>, options?: LinkerOptions<Dependencies>);
}
//# sourceMappingURL=linker.d.ts.map