import { ErrorSerializerOptions } from '../interfaces/error-serializer.interface';
import { ErrorDocument } from '../interfaces/json-api.interface';
import { SingleOrArray } from '../types/global.types';
/**
 * The {@linkcode ErrorSerializer} class is used to serialize errors.
 *
 * Example:
 * ```typescript
 * [[include:error-serializer.example.ts]]
 * ```
 */
export default class ErrorSerializer<ErrorType> {
    /**
     * Default options. Can be edited to change default options globally.
     */
    static defaultOptions: {
        version: string;
        attributes: {
            id: string;
            status: string;
            code: string;
            title: string;
            detail: string;
            source: {
                pointer: string;
                parameter: undefined;
            };
        };
        metaizers: {};
        linkers: {};
    };
    /**
     * The set of options for the serializer.
     */
    private options;
    /**
     * Creates a {@linkcode Serializer}.
     *
     * @param collectionName The name of the collection of objects.
     * @param options Options for the serializer.
     */
    constructor(options?: Partial<ErrorSerializerOptions<ErrorType>>);
    /**
     * The actual serialization function.
     *
     * @param errors Errors to serialize.
     * @param options Options to use at runtime.
     */
    serialize(errors: SingleOrArray<ErrorType>, options?: Partial<ErrorSerializerOptions<ErrorType>>): ErrorDocument;
}
//# sourceMappingURL=error-serializer.d.ts.map