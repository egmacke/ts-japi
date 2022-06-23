"use strict";
exports.__esModule = true;
var Relationship = /** @class */ (function () {
    function Relationship(options) {
        // data can be explicitly set to null for empty to-one relationships
        if (typeof options.data !== 'undefined')
            this.data = options.data;
        if (options.links)
            this.links = options.links;
        if (options.meta)
            this.meta = options.meta;
        if (typeof options.data === 'undefined' && !this.links && !this.meta) {
            throw new Error('Relationships must contain at least a link, data, or meta. See https://jsonapi.org/format/#document-resource-object-relationships for more information.');
        }
    }
    return Relationship;
}());
exports["default"] = Relationship;
//# sourceMappingURL=relationship.model.js.map