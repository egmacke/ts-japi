"use strict";
exports.__esModule = true;
exports.isPlainObject = void 0;
var is_object_1 = require("./is-object");
function isPlainObject(o) {
    if (!is_object_1.isObject(o))
        return false;
    // If constructor was modified
    if (typeof o.constructor !== 'function')
        return false;
    // If prototype was modified
    if (!is_object_1.isObject(o.constructor.prototype))
        return false;
    // eslint-disable-next-line no-prototype-builtins
    if (!o.constructor.prototype.hasOwnProperty('isPrototypeOf'))
        return false;
    return true;
}
exports.isPlainObject = isPlainObject;
//# sourceMappingURL=is-plain-object.js.map