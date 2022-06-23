import { Dictionary, nullish } from '..';
import { ErrorOptions } from '../interfaces/error.interface';
import Link from './link.model';
import Meta from './meta.model';
export default class JapiError {
    /**
     * Tests whether `error` has similar attributes to a JapiError
     *
     * @param error An unknown object
     */
    static isLikeJapiError(error: unknown): error is Partial<JapiError>;
    /** @internal */
    stack: string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     */
    id?: string;
    /**
     * The HTTP status code applicable to this problem, expressed as a string
     * value.
     */
    status?: string;
    /**
     * An application-specific error code, expressed as a string value.
     */
    code?: string;
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from
     * occurrence to occurrence of the problem, except for purposes of
     * localization.
     */
    title?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * Like title, this field’s value can be localized.
     */
    detail?: string;
    /**
     * An object containing references to the source of the error, optionally
     * including any of the following members.
     */
    source?: {
        /**
         * A JSON Pointer [RFC6901] to the associated entity in the request document
         * [e.g. `/data` for a primary data object, or `/data/attributes/title` for a
         * specific attribute].
         */
        pointer?: string;
        /**
         * A string indicating which URI query parameter caused the error.
         */
        parameter?: string;
    };
    /**
     * A links object
     */
    links?: Dictionary<Link | nullish>;
    /**
     * A meta object containing non-standard meta information about the error.
     */
    meta?: Meta;
    constructor(options?: ErrorOptions);
}
//# sourceMappingURL=error.model.d.ts.map