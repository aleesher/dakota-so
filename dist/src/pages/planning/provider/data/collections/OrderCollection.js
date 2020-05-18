"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = require("immer");
var OrderCollection = /** @class */ (function () {
    function OrderCollection(orders) {
        this[_a] = true;
        this[immer_1.immerable] = true;
        this.orders = orders;
    }
    OrderCollection.prototype.getLength = function () {
        return this.orders.length;
    };
    OrderCollection.prototype.all = function () {
        return this.orders;
    };
    OrderCollection.prototype.get = function (code) {
        return this.orders.find(function (o) { return o.code === code; });
    };
    OrderCollection.prototype.filtered = function (cb) {
        return this.orders.filter(cb);
    };
    OrderCollection.prototype.reverse = function () {
        this.orders.reverse();
    };
    OrderCollection.prototype.add = function (order) {
        this.orders.push(order);
    };
    OrderCollection.prototype.remove = function (code) {
        this.orders = this.orders.filter(function (o) { return o.code !== code; });
    };
    return OrderCollection;
}());
exports.default = OrderCollection;
_a = immer_1.immerable;
OrderCollection[immer_1.immerable] = true;
//# sourceMappingURL=OrderCollection.js.map