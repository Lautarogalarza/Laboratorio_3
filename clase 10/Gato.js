"use strict";
var Mascotas;
(function (Mascotas) {
    var Gato = /** @class */ (function () {
        function Gato(nombre) {
            if (nombre == undefined) {
                this.nombre = "Gato";
            }
            else {
                this.nombre = nombre;
            }
        }
        Gato.prototype.hacerRuido = function () {
            console.log(this.nombre + " Dice Miau!");
        };
        return Gato;
    }());
    Mascotas.Gato = Gato;
})(Mascotas || (Mascotas = {}));
