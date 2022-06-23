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
var link_model_1 = __importDefault(require("../models/link.model"));
/**
 * The {@linkcode Linker} class is used to construct a [link](https://jsonapi.org/format/#document-links).
 *
 * Example:
 * ```typescript
 * [[include:linker.example.ts]]
 * ```
 */
var Linker = /** @class */ (function () {
    /**
     * Creates a {@linkcode Linker}.
     *
     * @param link A {@linkcode LinkFunction} used to generate a string URI from its arguments.
     * @param options Options for the linker.
     */
    function Linker(link, options) {
        if (options === void 0) { options = {}; }
        this.link = function () {
            var _a;
            var datas = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                datas[_i] = arguments[_i];
            }
            return options.metaizer
                ? new link_model_1["default"](link.apply(void 0, __spreadArray([], __read(datas))), (_a = options.metaizer).metaize.apply(_a, __spreadArray([], __read(datas))))
                : new link_model_1["default"](link.apply(void 0, __spreadArray([], __read(datas))));
        };
    }
    return Linker;
}());
exports["default"] = Linker;
//# sourceMappingURL=linker.js.map