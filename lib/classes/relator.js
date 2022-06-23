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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var relationship_model_1 = __importDefault(require("../models/relationship.model"));
var merge_1 = __importDefault(require("../utils/merge"));
/**
 * The {@linkcode Relator} class is used to generate top-level [included data](https://jsonapi.org/format/#document-top-level)
 * as well as resource-level [relationships](https://jsonapi.org/format/#document-resource-object-relationships).
 *
 * Example:
 * ```typescript
 * [[include:relator.example.ts]]
 * ```
 */
var Relator = /** @class */ (function () {
    /**
     * Creates a {@linkcode Relator}.
     *
     * @param fetch Fetches related data from primary data.
     * @param serializer The `Serializer` to use for related data.
     * @param options Options for the relator.
     */
    function Relator(fetch, serializer, options) {
        if (options === void 0) { options = {}; }
        // Setting default options
        this.relatedName = options.relatedName || serializer.collectionName;
        this.options = merge_1["default"]({}, Relator.defaultOptions, options);
        this.getRelatedData = fetch;
        this.getRelatedResource = serializer.createResource.bind(serializer);
        this.getRelatedIdentifier = serializer.createIdentifier.bind(serializer);
        this.getRelatedRelators = serializer.getRelators.bind(serializer);
    }
    /** @internal Gets related links from primary data and related data */
    Relator.prototype.getRelatedLinks = function (data, relatedData) {
        var links;
        if (this.options.linkers.relationship) {
            links = __assign(__assign({}, links), { self: this.options.linkers.relationship.link(data, relatedData) });
        }
        if (this.options.linkers.related) {
            links = __assign(__assign({}, links), { related: this.options.linkers.related.link(data, relatedData) });
        }
        return links;
    };
    /** @internal Gets related meta from primary data and related data */
    Relator.prototype.getRelatedMeta = function (data, relatedData) {
        var meta;
        if (this.options.metaizer) {
            meta = this.options.metaizer.metaize(data, relatedData);
        }
        return meta;
    };
    /** @internal Creates a {@linkcode Relationship}. */
    Relator.prototype.getRelationship = function (data, relatedDataCache) {
        return __awaiter(this, void 0, void 0, function () {
            var relationshipOptions, relatedData, links, meta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        relationshipOptions = {};
                        return [4 /*yield*/, this.getRelatedData(data)];
                    case 1:
                        relatedData = _a.sent();
                        if (relatedData && relatedDataCache) {
                            relatedDataCache.push.apply(relatedDataCache, __spreadArray([], __read((Array.isArray(relatedData) ? relatedData : [relatedData]))));
                        }
                        links = this.getRelatedLinks(data, relatedData);
                        if (links)
                            relationshipOptions.links = links;
                        // Construct related resources.
                        if (relatedData !== undefined) {
                            if (relatedData === null) {
                                relationshipOptions.data = null;
                            }
                            else {
                                relationshipOptions.data = Array.isArray(relatedData)
                                    ? relatedData.map(function (data) { return _this.getRelatedIdentifier(data); })
                                    : this.getRelatedIdentifier(relatedData);
                            }
                        }
                        meta = this.getRelatedMeta(data, relatedData);
                        if (meta)
                            relationshipOptions.meta = meta;
                        return [2 /*return*/, new relationship_model_1["default"](relationshipOptions)];
                }
            });
        });
    };
    /**
     * Default options. Can be edited to change default options globally.
     */
    Relator.defaultOptions = {
        linkers: {}
    };
    return Relator;
}());
exports["default"] = Relator;
//# sourceMappingURL=relator.js.map