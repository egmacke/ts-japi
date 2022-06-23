"use strict";
exports.__esModule = true;
var is_object_1 = require("../utils/is-object");
var JapiError = /** @class */ (function () {
    function JapiError(options) {
        if (options === void 0) { options = {}; }
        if (options.id)
            this.id = options.id;
        if (options.status)
            this.status = options.status.toString();
        if (options.code)
            this.code = options.code;
        if (options.title)
            this.title = options.title;
        if (options.detail)
            this.detail = options.detail;
        if (options.source)
            this.source = options.source;
        Error.captureStackTrace(this, Error);
    }
    /**
     * Tests whether `error` has similar attributes to a JapiError
     *
     * @param error An unknown object
     */
    JapiError.isLikeJapiError = function (error) {
        if (!is_object_1.isObject(error))
            return false;
        return (['id', 'status', 'code', 'title', 'detail', 'source', 'links', 'meta'].some(function (attrName) { return attrName in error; }) &&
            [
                ['id', 'status', 'code', 'title', 'detail'].every(function (attrName) { return !(attrName in error) || typeof error[attrName] === 'string'; }),
                ['source', 'links', 'meta'].every(function (attrName) { return !(attrName in error) || is_object_1.isObject(error[attrName]); }),
            ].every(function (v) { return v; }));
    };
    return JapiError;
}());
exports["default"] = JapiError;
//# sourceMappingURL=error.model.js.map