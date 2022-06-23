import { RelatorOptions } from '../interfaces/relator.interface';
import { SerializerOptions } from '../interfaces/serializer.interface';
import Link from '../models/link.model';
import Meta from '../models/meta.model';
import Relationship from '../models/relationship.model';
import ResourceIdentifier from '../models/resource-identifier.model';
import Resource from '../models/resource.model';
import { Dictionary, nullish } from '../types/global.types';
import { Helpers } from '../utils/serializer.utils';
import Serializer from './serializer';
/**
 * The {@linkcode Relator} class is used to generate top-level [included data](https://jsonapi.org/format/#document-top-level)
 * as well as resource-level [relationships](https://jsonapi.org/format/#document-resource-object-relationships).
 *
 * Example:
 * ```typescript
 * [[include:relator.example.ts]]
 * ```
 */
export default class Relator<PrimaryType, RelatedType extends Dictionary<any> = any> {
    /**
     * Default options. Can be edited to change default options globally.
     */
    static defaultOptions: {
        linkers: {};
    };
    /**
     * Options for relator.
     */
    private options;
    relatedName: string;
    /**
     * Creates a {@linkcode Relator}.
     *
     * @param fetch Fetches related data from primary data.
     * @param serializer The `Serializer` to use for related data.
     * @param options Options for the relator.
     */
    constructor(fetch: (data: PrimaryType) => Promise<RelatedType | RelatedType[] | nullish>, serializer: Serializer<RelatedType>, options?: Partial<RelatorOptions<PrimaryType, RelatedType>>);
    /** @internal Gets related data from primary data. */
    getRelatedData: (data: PrimaryType) => Promise<RelatedType | RelatedType[] | nullish>;
    /** @internal Gets related relators */
    getRelatedRelators: () => Record<string, Relator<RelatedType, any>> | undefined;
    /** @internal Creates related identifiers */
    getRelatedIdentifier: (data: RelatedType, options?: SerializerOptions<RelatedType> | undefined) => ResourceIdentifier;
    /** @internal Creates related resources */
    getRelatedResource: (data: RelatedType, options?: SerializerOptions<RelatedType>, helpers?: Helpers<RelatedType>, relatorDataCache?: Map<Relator<any>, Dictionary<any>[]>) => Promise<Resource<RelatedType>>;
    /** @internal Gets related links from primary data and related data */
    getRelatedLinks(data: PrimaryType, relatedData: RelatedType | RelatedType[] | nullish): Dictionary<nullish | Link> | undefined;
    /** @internal Gets related meta from primary data and related data */
    getRelatedMeta(data: PrimaryType, relatedData: RelatedType | RelatedType[] | nullish): Meta | undefined;
    /** @internal Creates a {@linkcode Relationship}. */
    getRelationship(data: PrimaryType, relatedDataCache?: Dictionary<any>[]): Promise<Relationship>;
}
//# sourceMappingURL=relator.d.ts.map