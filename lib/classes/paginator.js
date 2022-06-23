"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var link_model_1 = __importDefault(require("../models/link.model"));
/**
 * The {@linkcode Paginator} class is used to construct [pagination links](https://jsonapi.org/format/#fetching-pagination).
 *
 * Example:
 * ```typescript
 * [[include:paginator.example.ts]]
 * ```
 */
var Paginator = /** @class */ (function () {
    /**
     * Creates a {@linkcode Paginator}.
     *
     * @param paginate A function to generate pagination links from data.
     */
    function Paginator(paginate) {
        this.paginate = function (data) {
            var links = paginate(data);
            if (!links)
                return;
            return {
                first: typeof links.first === 'string' ? new link_model_1["default"](links.first) : links.first,
                last: typeof links.last === 'string' ? new link_model_1["default"](links.last) : links.last,
                prev: typeof links.prev === 'string' ? new link_model_1["default"](links.prev) : links.prev,
                next: typeof links.next === 'string' ? new link_model_1["default"](links.next) : links.next
            };
        };
    }
    return Paginator;
}());
exports["default"] = Paginator;
//# sourceMappingURL=paginator.js.map