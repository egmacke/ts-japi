"use strict";
exports.__esModule = true;
var url_1 = require("url");
var Link = /** @class */ (function () {
    function Link(href, meta) {
        this.toJSON = this.toString.bind(this);
        this.url = new url_1.URL(href);
        this.meta = meta;
    }
    Link.prototype.toString = function () {
        return this.meta ? { href: this.url.href, meta: this.meta } : this.url.href;
    };
    return Link;
}());
exports["default"] = Link;
//# sourceMappingURL=link.model.js.map