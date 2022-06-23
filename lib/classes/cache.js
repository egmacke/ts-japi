"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
var Cache = /** @class */ (function () {
    /**
     * Creates a {@linkcode Cache}
     *
     * @param limit The maximum amount of documents that can be stored before erasure.
     */
    function Cache(options) {
        if (options === void 0) { options = {}; }
        /** @internal The storage for the cache */
        this.storage = [];
        /**
         * The maximum amount of documents that can be storage before erasure.
         */
        this.limit = Cache.defaultLimit;
        /**
         * The method to use in determining data equality
         */
        this.resolver = Object.is;
        if (options.limit)
            this.limit = options.limit;
        if (options.resolver)
            this.resolver = options.resolver;
    }
    /** @internal Gets a document in the cache */
    Cache.prototype.get = function (data, options) {
        var _this = this;
        var document = this.storage.find(function (_a) {
            var _b = __read(_a, 2), storedData = _b[0], storedOptions = _b[1];
            return _this.resolver(storedData, data) && Object.is(storedOptions, options);
        });
        if (document)
            return document[2];
        else
            return false;
    };
    /** @internal Sets a document in the cache */
    Cache.prototype.set = function (data, document, options) {
        if (this.storage.length > this.limit) {
            this.storage.shift();
        }
        this.storage.push([data, options, document]);
        return document;
    };
    /**
     * The default max for document storage
     */
    Cache.defaultLimit = 10;
    return Cache;
}());
exports["default"] = Cache;
//# sourceMappingURL=cache.js.map