"use strict";
exports.__esModule = true;
var ResourceIdentifier = /** @class */ (function () {
    function ResourceIdentifier(id, type, options) {
        this.type = type;
        this.id = id;
        if (options.meta)
            this.meta = options.meta;
    }
    ResourceIdentifier.prototype.getKey = function () {
        return "[" + this.type + ":" + this.id + "]";
    };
    return ResourceIdentifier;
}());
exports["default"] = ResourceIdentifier;
//# sourceMappingURL=resource-identifier.model.js.map