/// <reference types="node" />
import { URL } from 'url';
import Meta from './meta.model';
export default class Link {
    url: URL;
    meta?: Meta;
    constructor(href: string, meta?: Meta);
    toJSON: () => string | {
        href: string;
        meta: Meta;
    };
    toString(): string | {
        href: string;
        meta: Meta;
    };
}
//# sourceMappingURL=link.model.d.ts.map