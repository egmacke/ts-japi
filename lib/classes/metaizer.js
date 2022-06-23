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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var meta_model_1 = __importDefault(require("../models/meta.model"));
/**
 * The {@linkcode Metaizer} class is used to construct [meta information](https://jsonapi.org/format/#document-meta).
 *
 * Example:
 * ```typescript
 * [[include:metaizer.example.ts]]
 * ```
 */
var Metaizer = /** @class */ (function () {
    /**
     * Creates a {@linkcode Metaizer}.
     *
     * @param metaize A function to generate [meta information](https://jsonapi.org/format/#document-meta)
     * from its arguments.
     */
    function Metaizer(metaize) {
        this.metaize = function () {
            var datas = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                datas[_i] = arguments[_i];
            }
            return new meta_model_1["default"](metaize.apply(void 0, __spreadArray([], __read(datas))));
        };
    }
    return Metaizer;
}());
exports["default"] = Metaizer;
//# sourceMappingURL=metaizer.js.map