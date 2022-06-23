import { SerializerOptions } from '../interfaces/serializer.interface';
import { DataDocument } from '../interfaces/json-api.interface';
import { SingleOrArray, nullish } from '../types/global.types';
import { CacheOptions } from '../interfaces/cache.interface';
export default class Cache<PrimaryType> {
    /**
     * The default max for document storage
     */
    static defaultLimit: number;
    /** @internal The storage for the cache */
    private storage;
    /**
     * The maximum amount of documents that can be storage before erasure.
     */
    private limit;
    /**
     * The method to use in determining data equality
     */
    private resolver;
    /**
     * Creates a {@linkcode Cache}
     *
     * @param limit The maximum amount of documents that can be stored before erasure.
     */
    constructor(options?: Partial<CacheOptions<PrimaryType>>);
    /** @internal Gets a document in the cache */
    get(data: SingleOrArray<PrimaryType> | nullish, options?: Partial<SerializerOptions<PrimaryType>>): false | Partial<DataDocument<PrimaryType>>;
    /** @internal Sets a document in the cache */
    set(data: SingleOrArray<PrimaryType> | nullish, document: Partial<DataDocument<PrimaryType>>, options?: Partial<SerializerOptions<PrimaryType>>): Partial<DataDocument<PrimaryType>>;
}
//# sourceMappingURL=cache.d.ts.map