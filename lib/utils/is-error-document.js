"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.isErrorDocument = void 0;
var is_plain_object_1 = require("./is-plain-object");
var error_model_1 = __importDefault(require("../models/error.model"));
/**
 * Detects an `ErrorDocument` like object
 *
 * @param document An unknown object
 */
function isErrorDocument(document) {
    return (is_plain_object_1.isPlainObject(document) &&
        Array.isArray(document.errors) &&
        ('jsonapi' in document ||
            document.errors.every(function (error) {
                return error instanceof error_model_1["default"] ? true : error_model_1["default"].isLikeJapiError(error);
            })));
}
exports.isErrorDocument = isErrorDocument;
//# sourceMappingURL=is-error-document.js.map