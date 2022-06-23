"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var resource_identifier_model_1 = __importDefault(require("./resource-identifier.model"));
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource(id, type, options) {
        var _this = _super.call(this, id, type, options) || this;
        if (options.attributes)
            _this.attributes = options.attributes;
        if (options.relationships)
            _this.relationships = options.relationships;
        if (options.links)
            _this.links = options.links;
        return _this;
    }
    return Resource;
}(resource_identifier_model_1["default"]));
exports["default"] = Resource;
//# sourceMappingURL=resource.model.js.map