"use strict";
var Mascotas;
(function (Mascotas) {
    //var miPerro:Perro = new Perro();//instancia de un objeto
    //miPerro.nombre= "shorty";
    function saludar() {
        alert("HOLU");
    }
    Mascotas.saludar = saludar;
    function hablar() {
        var shorty = new Mascotas.Perro("el mas lindo", "shorty");
        var miPerro = new Mascotas.Perro("sin raza");
        var peque = new Mascotas.Gato("peque");
        var miGato = new Mascotas.Gato();
        var Animal = new Mascotas.Perro("sin raza"); //es valido, hay que castear para usar cosas nativs del perro
        var animales = new Array(); //definicion de array tipado
        animales.push(shorty);
        animales.push(peque);
        animales.push(miPerro);
        animales.push(miGato);
        /*animales.forEach(element => {
            
        });*/
        for (var _i = 0, animales_1 = animales; _i < animales_1.length; _i++) {
            var iterator = animales_1[_i];
            if (iterator instanceof Mascotas.Perro) //solo muesre si es de tipo perro
             {
                console.log("es perro");
                var perrito = iterator; //casteo el animal a perro    
                perrito.hacerRuido();
            }
            else {
                console.log("es gato");
            }
        }
    }
    Mascotas.hablar = hablar;
})(Mascotas || (Mascotas = {}));
