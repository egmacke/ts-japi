"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.Serializer = exports.ErrorSerializer = exports.JapiError = exports.Relator = exports.Paginator = exports.Metaizer = exports.Linker = exports.Cache = void 0;
var cache_1 = require("./classes/cache");
__createBinding(exports, cache_1, "default", "Cache");
var linker_1 = require("./classes/linker");
__createBinding(exports, linker_1, "default", "Linker");
var metaizer_1 = require("./classes/metaizer");
__createBinding(exports, metaizer_1, "default", "Metaizer");
var paginator_1 = require("./classes/paginator");
__createBinding(exports, paginator_1, "default", "Paginator");
var relator_1 = require("./classes/relator");
__createBinding(exports, relator_1, "default", "Relator");
var error_model_1 = require("./models/error.model");
__createBinding(exports, error_model_1, "default", "JapiError");
var error_serializer_1 = require("./classes/error-serializer");
__createBinding(exports, error_serializer_1, "default", "ErrorSerializer");
var serializer_1 = require("./classes/serializer");
__createBinding(exports, serializer_1, "default", "Serializer");
__exportStar(require("./interfaces/cache.interface"), exports);
__exportStar(require("./interfaces/error-serializer.interface"), exports);
__exportStar(require("./interfaces/error.interface"), exports);
__exportStar(require("./interfaces/json-api.interface"), exports);
__exportStar(require("./interfaces/linker.interface"), exports);
__exportStar(require("./interfaces/paginator.interface"), exports);
__exportStar(require("./interfaces/relator.interface"), exports);
__exportStar(require("./interfaces/serializer.interface"), exports);
__exportStar(require("./types/global.types"), exports);
__exportStar(require("./utils/is-error-document"), exports);
__exportStar(require("./utils/is-plain-object"), exports);
__exportStar(require("./utils/is-object"), exports);
//# sourceMappingURL=index.js.map