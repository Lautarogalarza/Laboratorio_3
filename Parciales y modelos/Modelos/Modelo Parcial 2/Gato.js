"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pets;
(function (Pets) {
    var Gato = /** @class */ (function (_super) {
        __extends(Gato, _super);
        function Gato(nombre, vidas) {
            var _this = _super.call(this, nombre) || this;
            _this.cantVidas = 9;
            _this.cantVidas = vidas;
            return _this;
        }
        return Gato;
    }(Pets.Mascota));
    Pets.Gato = Gato;
})(Pets || (Pets = {}));
