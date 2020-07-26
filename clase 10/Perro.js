"use strict";
var Mascotas;
(function (Mascotas) {
    var Perro = /** @class */ (function () {
        function Perro(raza, nombre) {
            if (nombre == undefined) {
                this.nombre = "Perro";
            }
            else {
                this.nombre = nombre;
            }
            this.raza = raza;
        }
        Perro.prototype.hacerRuido = function () {
            console.log(this.nombre + " Dice Guau! " + this.raza);
        };
        return Perro;
    }());
    Mascotas.Perro = Perro;
})(Mascotas || (Mascotas = {}));
