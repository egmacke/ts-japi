"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var error_model_1 = __importDefault(require("../models/error.model"));
var merge_1 = __importDefault(require("../utils/merge"));
/**
 * The {@linkcode ErrorSerializer} class is used to serialize errors.
 *
 * Example:
 * ```typescript
 * [[include:error-serializer.example.ts]]
 * ```
 */
var ErrorSerializer = /** @class */ (function () {
    /**
     * Creates a {@linkcode Serializer}.
     *
     * @param collectionName The name of the collection of objects.
     * @param options Options for the serializer.
     */
    function ErrorSerializer(options) {
        if (options === void 0) { options = {}; }
        // Setting default options.
        this.options = merge_1["default"]({}, ErrorSerializer.defaultOptions, options);
    }
    /**
     * The actual serialization function.
     *
     * @param errors Errors to serialize.
     * @param options Options to use at runtime.
     */
    ErrorSerializer.prototype.serialize = function (errors, options) {
        var e_1, _a, e_2, _b, e_3, _c, _d;
        // Get options.
        var o = this.options;
        if (options)
            o = merge_1["default"]({}, this.options, options);
        var attributes = o.attributes;
        var linkers = o.linkers;
        var metaizers = o.metaizers;
        var version = o.version;
        var document = { errors: [] };
        // Normalize error input
        if (!Array.isArray(errors)) {
            errors = [errors];
        }
        document.errors = errors.map(function (e) {
            if (e instanceof error_model_1["default"])
                return e;
            var eo = {};
            if (attributes.id && e[attributes.id]) {
                eo.id = String(e[attributes.id]);
            }
            if (attributes.status && e[attributes.status]) {
                eo.status = String(e[attributes.status]);
            }
            if (attributes.code && e[attributes.code]) {
                eo.code = String(e[attributes.code]);
            }
            if (attributes.title && e[attributes.title]) {
                eo.title = String(e[attributes.title]);
            }
            if (attributes.detail && e[attributes.detail]) {
                eo.detail = String(e[attributes.detail]);
            }
            if (attributes.source) {
                eo.source = {};
                if (attributes.source.pointer && e[attributes.source.pointer]) {
                    eo.source.pointer = String(e[attributes.source.pointer]);
                }
                if (attributes.source.parameter && e[attributes.source.parameter]) {
                    eo.source.parameter = String(e[attributes.source.parameter]);
                }
                if (Object.keys(eo.source).length === 0) {
                    delete eo.source;
                }
            }
            return new error_model_1["default"](eo);
        });
        // Constructing base document.
        if (version) {
            document.jsonapi = { version: version };
        }
        // Handling document metadata.
        if (metaizers.jsonapi) {
            document.jsonapi = __assign(__assign({}, document.jsonapi), { meta: metaizers.jsonapi.metaize() });
        }
        if (metaizers.document) {
            document.meta = metaizers.document.metaize(document.errors);
        }
        if (metaizers.error) {
            try {
                for (var _e = __values(document.errors), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var error = _f.value;
                    error.meta = metaizers.error.metaize(error);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e["return"])) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // Handling links.
        if (Object.keys(linkers).length > 0) {
            try {
                for (var _g = __values(Object.entries(linkers)), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var _j = __read(_h.value, 2), key = _j[0], linker = _j[1];
                    if (linker) {
                        try {
                            for (var _k = (e_3 = void 0, __values(document.errors)), _l = _k.next(); !_l.done; _l = _k.next()) {
                                var error = _l.value;
                                error.links = __assign(__assign({}, error.links), (_d = {}, _d[key] = linker.link(error), _d));
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_l && !_l.done && (_c = _k["return"])) _c.call(_k);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return document;
    };
    /**
     * Default options. Can be edited to change default options globally.
     */
    ErrorSerializer.defaultOptions = {
        version: '1.0',
        attributes: {
            id: 'id',
            status: 'code',
            code: 'name',
            title: 'reason',
            detail: 'message',
            source: {
                pointer: 'location',
                parameter: undefined
            }
        },
        metaizers: {},
        linkers: {}
    };
    return ErrorSerializer;
}());
exports["default"] = ErrorSerializer;
//# sourceMappingURL=error-serializer.js.map