"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var is_plain_object_1 = require("./is-plain-object");
/**
 * Deep merge two objects over their enumerable properties.
 *
 * @param target The object to merge into
 * @param source The objects to use for merging
 */
function merge(target) {
    var e_1, _a, _b, _c;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    if (is_plain_object_1.isPlainObject(target) && is_plain_object_1.isPlainObject(source)) {
        try {
            for (var _d = __values(Object.keys(source)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var key = _e.value;
                if (is_plain_object_1.isPlainObject(source[key])) {
                    if (!target[key])
                        Object.assign(target, (_b = {}, _b[key] = {}, _b));
                    merge(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_c = {}, _c[key] = source[key], _c));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return merge.apply(void 0, __spreadArray([target], __read(sources)));
}
exports["default"] = merge;
//# sourceMappingURL=merge.js.map