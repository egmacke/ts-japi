import { DataDocument } from '../interfaces/json-api.interface';
import { SerializerOptions } from '../interfaces/serializer.interface';
import ResourceIdentifier from '../models/resource-identifier.model';
import Resource from '../models/resource.model';
import { Dictionary, nullish, SingleOrArray } from '../types/global.types';
import { Helpers } from '../utils/serializer.utils';
import Cache from './cache';
import Relator from './relator';
/**
 * The {@linkcode Serializer} class is the main class used to serializer data
 * (you can use the {@linkcode ErrorSerializer} class to serialize errors).
 *
 * Example:
 * ```typescript
 * [[include:serializer.example.ts]]
 * ```
 */
export default class Serializer<PrimaryType extends Dictionary<any> = any> {
    /**
     * Default options. Can be edited to change default options globally.
     */
    static defaultOptions: {
        idKey: string;
        version: string;
        onlyIdentifier: boolean;
        nullData: boolean;
        asIncluded: boolean;
        onlyRelationship: boolean;
        cache: boolean;
        depth: number;
        projection: null;
        linkers: {};
        metaizers: {};
    };
    /**
     * The name to use for the type.
     */
    collectionName: string;
    /**
     * The set of options for the serializer.
     */
    private options;
    /**
     * The set of helper functions for the serializer
     */
    helpers: Helpers<PrimaryType>;
    /**
     * Caching
     */
    cache: Cache<PrimaryType>;
    /**
     * Creates a {@linkcode Serializer}.
     *
     * @param collectionName The name of the collection of objects.
     * @param options Options for the serializer.
     */
    constructor(collectionName: string, options?: Partial<SerializerOptions<PrimaryType>>);
    /**
     * Gets the {@linkcode Relator}s associated with this serializer
     */
    getRelators(): Record<string, Relator<PrimaryType, any>> | undefined;
    /**
     * Sets the {@linkcode Relator}s associated with this serializer
     */
    setRelators(relators: SerializerOptions<PrimaryType>['relators']): void;
    /** @internal Generates a `ResourceIdentifier`. */
    createIdentifier(data: PrimaryType, options?: SerializerOptions<PrimaryType>): ResourceIdentifier;
    /** @internal Generates a `Resource`. */
    createResource(data: PrimaryType, options?: SerializerOptions<PrimaryType>, helpers?: Helpers<PrimaryType>, relatorDataCache?: Map<Relator<any>, Dictionary<any>[]>): Promise<Resource<PrimaryType>>;
    /**
     * The actual serialization function.
     *
     * @param data Data to serialize.
     * @param options Options to use at runtime.
     */
    serialize(data: SingleOrArray<PrimaryType> | nullish, options?: Partial<SerializerOptions<PrimaryType>>): Promise<Partial<DataDocument<PrimaryType>>>;
}
//# sourceMappingURL=serializer.d.ts.map