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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var resource_identifier_model_1 = __importDefault(require("../models/resource-identifier.model"));
var resource_model_1 = __importDefault(require("../models/resource.model"));
var merge_1 = __importDefault(require("../utils/merge"));
var serializer_utils_1 = require("../utils/serializer.utils");
var cache_1 = __importDefault(require("./cache"));
/**
 * The {@linkcode Serializer} class is the main class used to serializer data
 * (you can use the {@linkcode ErrorSerializer} class to serialize errors).
 *
 * Example:
 * ```typescript
 * [[include:serializer.example.ts]]
 * ```
 */
var Serializer = /** @class */ (function () {
    /**
     * Creates a {@linkcode Serializer}.
     *
     * @param collectionName The name of the collection of objects.
     * @param options Options for the serializer.
     */
    function Serializer(collectionName, options) {
        if (options === void 0) { options = {}; }
        /**
         * Caching
         */
        this.cache = new cache_1["default"]();
        // Setting default options.
        this.options = merge_1["default"]({}, Serializer.defaultOptions, options);
        this.helpers = new serializer_utils_1.Helpers(this.options);
        if (this.options.cache && this.options.cache instanceof cache_1["default"]) {
            this.cache = this.options.cache;
        }
        // Setting type name.
        this.collectionName = collectionName;
    }
    /**
     * Gets the {@linkcode Relator}s associated with this serializer
     */
    Serializer.prototype.getRelators = function () {
        return this.helpers.relators;
    };
    /**
     * Sets the {@linkcode Relator}s associated with this serializer
     */
    Serializer.prototype.setRelators = function (relators) {
        this.options.relators = relators;
        this.helpers = new serializer_utils_1.Helpers(this.options);
    };
    /** @internal Generates a `ResourceIdentifier`. */
    Serializer.prototype.createIdentifier = function (data, options) {
        // Get options
        if (options === undefined)
            options = this.options;
        var identifierOptions = {};
        if (options.metaizers.resource) {
            identifierOptions.meta = options.metaizers.resource.metaize(data);
        }
        return new resource_identifier_model_1["default"](data[options.idKey], this.collectionName, identifierOptions);
    };
    /** @internal Generates a `Resource`. */
    Serializer.prototype.createResource = function (data, options, helpers, relatorDataCache) {
        return __awaiter(this, void 0, void 0, function () {
            var resourceOptions, id, type, relationships_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Get options
                        if (options === undefined || helpers === undefined) {
                            options = this.options;
                            helpers = this.helpers;
                        }
                        resourceOptions = {};
                        id = data[options.idKey];
                        type = this.collectionName;
                        // Get attributes
                        resourceOptions.attributes = helpers.projectAttributes(data);
                        if (!helpers.relators) return [3 /*break*/, 2];
                        relationships_1 = {};
                        return [4 /*yield*/, Promise.all(Object.entries(helpers.relators).map(function (_a) {
                                var _b = __read(_a, 2), name = _b[0], relator = _b[1];
                                return __awaiter(_this, void 0, void 0, function () {
                                    var relatedDataCache, _c, _d;
                                    return __generator(this, function (_e) {
                                        switch (_e.label) {
                                            case 0:
                                                if (relatorDataCache) {
                                                    relatedDataCache = relatorDataCache.get(relator) || [];
                                                    relatorDataCache.set(relator, relatedDataCache);
                                                }
                                                _c = relationships_1;
                                                _d = name;
                                                return [4 /*yield*/, relator.getRelationship(data, relatedDataCache)];
                                            case 1:
                                                _c[_d] = _e.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }))];
                    case 1:
                        _a.sent();
                        resourceOptions.relationships = relationships_1;
                        _a.label = 2;
                    case 2:
                        // Handling links
                        if (options.linkers.resource) {
                            resourceOptions.links = { self: options.linkers.resource.link(data) };
                        }
                        if (options.metaizers.resource) {
                            resourceOptions.meta = options.metaizers.resource.metaize(data);
                        }
                        return [2 /*return*/, new resource_model_1["default"](id, type, resourceOptions)];
                }
            });
        });
    };
    /**
     * The actual serialization function.
     *
     * @param data Data to serialize.
     * @param options Options to use at runtime.
     */
    Serializer.prototype.serialize = function (data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var o, h, cache, storedDocument, document, relatorDataCache, keys, wasSingle, dto, createIdentifier, createResource, relators, relator_1, relatedData, links, meta, pagination, _a, _b, _c, _d, _e;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        o = this.options;
                        h = this.helpers;
                        if (options !== undefined) {
                            o = merge_1["default"]({}, o, options);
                            h = new serializer_utils_1.Helpers(o);
                        }
                        cache = o.cache instanceof cache_1["default"] ? o.cache : this.cache;
                        if (o.cache) {
                            storedDocument = cache.get(data, options);
                            if (storedDocument) {
                                return [2 /*return*/, storedDocument];
                            }
                        }
                        document = {};
                        // Document versioning
                        if (o.version) {
                            document.jsonapi = __assign(__assign({}, document.jsonapi), { version: o.version });
                        }
                        if (o.metaizers.jsonapi) {
                            document.jsonapi = __assign(__assign({}, document.jsonapi), { meta: o.metaizers.jsonapi.metaize() });
                        }
                        relatorDataCache = new Map();
                        keys = [];
                        wasSingle = false;
                        if (!o.onlyRelationship) return [3 /*break*/, 2];
                        // Validate options.
                        if (h.relators === undefined) {
                            throw new TypeError("\"relators\" must be defined when using \"onlyRelationship\"");
                        }
                        if (!data || Array.isArray(data)) {
                            throw new TypeError("Cannot serialize multiple primary datum using \"onlyRelationship\"");
                        }
                        relator_1 = h.relators[o.onlyRelationship];
                        if (relator_1 === undefined) {
                            throw new TypeError("\"onlyRelationship\" is not the name of any collection name among the relators listed in \"relators\"");
                        }
                        return [4 /*yield*/, relator_1.getRelatedData(data)];
                    case 1:
                        relatedData = _f.sent();
                        links = relator_1.getRelatedLinks(data, relatedData);
                        if (links)
                            document.links = links;
                        meta = relator_1.getRelatedMeta(data, relatedData);
                        if (meta)
                            document.meta = meta;
                        createIdentifier = function (datum) { return relator_1.getRelatedIdentifier(datum); };
                        createResource = function (datum) { return __awaiter(_this, void 0, void 0, function () {
                            var resource;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, relator_1.getRelatedResource(datum)];
                                    case 1:
                                        resource = _a.sent();
                                        keys.push(resource.getKey());
                                        return [2 /*return*/, resource];
                                }
                            });
                        }); };
                        relators = relator_1.getRelatedRelators();
                        dto = relatedData;
                        return [3 /*break*/, 3];
                    case 2:
                        // Handle meta
                        if (o.metaizers.document) {
                            document.meta = o.metaizers.document.metaize(data);
                        }
                        // Handle links
                        if (o.linkers.document) {
                            document.links = __assign(__assign({}, document.links), { self: o.linkers.document.link(data) });
                        }
                        // Handle pagination links
                        if (o.linkers.paginator) {
                            pagination = o.linkers.paginator.paginate(data);
                            if (pagination) {
                                document.links = __assign(__assign({}, document.links), pagination);
                            }
                        }
                        createIdentifier = function (datum) { return _this.createIdentifier(datum, o); };
                        createResource = function (datum) { return __awaiter(_this, void 0, void 0, function () {
                            var resource;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.createResource(datum, o, h, relatorDataCache)];
                                    case 1:
                                        resource = _a.sent();
                                        keys.push(resource.getKey());
                                        return [2 /*return*/, resource];
                                }
                            });
                        }); };
                        relators = h.relators;
                        dto = data;
                        _f.label = 3;
                    case 3:
                        if (dto === undefined) {
                            return [2 /*return*/, cache.set(data, document, options)];
                        }
                        if (o.nullData || dto === null) {
                            document.data = null;
                            return [2 /*return*/, cache.set(data, document, options)];
                        }
                        // Handle `onlyIdentifier` option
                        if (o.onlyIdentifier) {
                            document.data = Array.isArray(dto) ? dto.map(createIdentifier) : createIdentifier(dto);
                            return [2 /*return*/, cache.set(data, document, options)];
                        }
                        if (!Array.isArray(dto)) {
                            wasSingle = true;
                            dto = [dto];
                        }
                        if (!o.asIncluded) return [3 /*break*/, 5];
                        document.data = dto.map(createIdentifier);
                        _a = document;
                        return [4 /*yield*/, Promise.all(dto.map(createResource))];
                    case 4:
                        _a.included = _f.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        _b = document;
                        return [4 /*yield*/, Promise.all(dto.map(createResource))];
                    case 6:
                        _b.data = _f.sent();
                        _f.label = 7;
                    case 7:
                        if (!(relators && o.depth > 0)) return [3 /*break*/, 9];
                        _c = document;
                        _e = (_d = (document.included || [])).concat;
                        return [4 /*yield*/, serializer_utils_1.recurseRelators(dto, relators, o.depth, keys, relatorDataCache)];
                    case 8:
                        _c.included = _e.apply(_d, [_f.sent()]);
                        _f.label = 9;
                    case 9:
                        if (wasSingle) {
                            document.data = document.data[0];
                        }
                        return [2 /*return*/, cache.set(data, document, options)];
                }
            });
        });
    };
    /**
     * Default options. Can be edited to change default options globally.
     */
    Serializer.defaultOptions = {
        idKey: 'id',
        version: '1.0',
        onlyIdentifier: false,
        nullData: false,
        asIncluded: false,
        onlyRelationship: false,
        cache: false,
        depth: 0,
        projection: null,
        linkers: {},
        metaizers: {}
    };
    return Serializer;
}());
exports["default"] = Serializer;
//# sourceMappingURL=serializer.js.map