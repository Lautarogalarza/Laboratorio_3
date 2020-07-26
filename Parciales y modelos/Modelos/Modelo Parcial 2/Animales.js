"use strict";
var Pets;
(function (Pets) {
    window.addEventListener("load", function () {
        var _a, _b;
        (_a = document.getElementById("animales")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", verTipos);
        (_b = document.getElementById("buscador")) === null || _b === void 0 ? void 0 : _b.addEventListener("keyup", filtrarMascotas);
    });
    var mascotas = new Array();
    function filtrarMascotas() {
        var valor = document.getElementById("buscador").value;
        var filtrados = mascotas.filter(function (item) { return item.nombre.includes(valor); });
        agregarAnimal(filtrados);
    }
    Pets.filtrarMascotas = filtrarMascotas;
    function abrirGrilla() {
        document.getElementById("btnModificar").disabled = true;
        document.getElementById("btnModificar").className = "disabledMod";
        document.getElementById("btnEliminar").disabled = true;
        document.getElementById("btnEliminar").className = "disabledDel";
        document.getElementById("nombreAnimal").className = "sinError";
        document.getElementById("contGrilla").style.display = "block";
        var contAgregar = document.getElementById("contGrilla");
        contAgregar.classList.add("verForm");
    }
    Pets.abrirGrilla = abrirGrilla;
    function cerrarGrilla() {
        document.getElementById("nombreAnimal").className = "sinError";
        document.getElementById("contGrilla").style.display = "none";
        document.getElementById("btnGuardar").disabled = false;
        document.getElementById("btnGuardar").className = "botonGuardar";
        var contGrilla = document.getElementById("contGrilla");
        document.getElementById("contRaza").hidden = true;
        document.getElementById("contVidas").hidden = true;
        document.getElementById("contTipos").hidden = true;
        document.getElementById("nombreAnimal").value = "";
        document.getElementById("raza").value = "";
        document.getElementById("vidas").value = "";
        document.getElementById("animales").value = "";
        contGrilla.classList.remove("verForm");
    }
    Pets.cerrarGrilla = cerrarGrilla;
    function verTipos() {
        var tipoAnimal = document.getElementById("animales").value;
        switch (tipoAnimal) {
            case "Perro":
                document.getElementById("contRaza").hidden = false;
                document.getElementById("contVidas").hidden = true;
                document.getElementById("contTipos").hidden = true;
                break;
            case "Gato":
                document.getElementById("contVidas").hidden = false;
                document.getElementById("contRaza").hidden = true;
                document.getElementById("contTipos").hidden = true;
                break;
            case "Pajaro":
                document.getElementById("contTipos").hidden = false;
                document.getElementById("contVidas").hidden = true;
                document.getElementById("contRaza").hidden = true;
                break;
            default:
                break;
        }
    }
    Pets.verTipos = verTipos;
    function agregarAnimal(mascotas) {
        var nombre;
        var tipoAnimal = "";
        var detalle;
        var tCuerpo = document.getElementById("tCuerpo");
        while (tCuerpo.rows.length > 0) {
            tCuerpo.removeChild(tCuerpo.childNodes[0]);
        }
        for (var _i = 0, mascotas_1 = mascotas; _i < mascotas_1.length; _i++) {
            var item = mascotas_1[_i];
            nombre = item.nombre;
            if (item instanceof Pets.Perro) {
                tipoAnimal = "Perro";
                detalle = "Raza: " + item.raza;
            }
            else if (item instanceof Pets.Gato) {
                tipoAnimal = "Gato";
                detalle = "Cant Vidas: " + item.cantVidas;
            }
            else if (item instanceof Pets.Pajaro) {
                tipoAnimal = "Pajaro";
                if (item.tipo == Pets.TipoPajaro.loro) {
                    detalle = "Loro";
                }
                else {
                    detalle = "Rapiña";
                }
            }
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var nodoTexto = document.createTextNode(nombre);
            td1.appendChild(nodoTexto);
            tr.appendChild(td1);
            var td2 = document.createElement("td");
            var nodoTexto = document.createTextNode(tipoAnimal);
            td2.appendChild(nodoTexto);
            tr.appendChild(td2);
            var td3 = document.createElement("td");
            var nodoTexto = document.createTextNode(detalle);
            td3.appendChild(nodoTexto);
            tr.appendChild(td3);
            tr.addEventListener("dblclick", abrirNuevaGrilla);
            tCuerpo.appendChild(tr);
        }
    }
    function abrirNuevaGrilla(event) {
        document.getElementById("btnGuardar").disabled = true;
        document.getElementById("btnGuardar").className = "disabled";
        document.getElementById("btnModificar").disabled = false;
        document.getElementById("btnModificar").className = "botonModificar";
        document.getElementById("btnEliminar").disabled = false;
        document.getElementById("btnEliminar").className = "botonEliminar";
        var trClick = event.target.parentNode;
        var nombre = trClick.childNodes[0].innerHTML;
        var tipoAnimal = trClick.childNodes[1].innerHTML;
        var detalle = trClick.childNodes[2].innerHTML;
        var index = trClick.rowIndex;
        document.getElementById("nombreAnimal").value = nombre;
        document.getElementById("animales").value = tipoAnimal;
        if (tipoAnimal == "Perro") {
            document.getElementById("contRaza").hidden = false;
            document.getElementById("raza").value = detalle;
        }
        else if (tipoAnimal == "Gato") {
            document.getElementById("contVidas").hidden = false;
            var detalleGato = detalle.substring(12, detalle.length);
            var input = document.getElementById("vidas");
            input.value = detalleGato;
        }
        else if (tipoAnimal == "Pajaro") {
            document.getElementById("contTipos").hidden = false;
            document.getElementById("tipo").value = detalle;
        }
        document.getElementById("contGrilla").style.display = "block";
        var btnMod = document.getElementById("btnModificar");
        var btnDel = document.getElementById("btnEliminar");
        btnDel.onclick = function () {
            trClick.removeChild(trClick.childNodes[0]);
            trClick.removeChild(trClick.childNodes[0]);
            trClick.removeChild(trClick.childNodes[0]);
            mascotas.splice(index - 1, 1);
            cerrarGrilla();
        };
        btnMod.onclick = function () {
            var nuevoNombre = document.getElementById("nombreAnimal").value;
            var nuevoTipoAnimal = document.getElementById("animales").value;
            var nuevoDetalle;
            if (nuevoTipoAnimal == "Perro") {
                nuevoDetalle = "Raza: " + document.getElementById("raza").value;
                var nuevoDetallePerro = nuevoDetalle.substring(7, nuevoDetalle.length);
                mascotas[index - 1] = new Pets.Perro(nuevoNombre, nuevoDetallePerro);
            }
            else if (nuevoTipoAnimal == "Gato") {
                nuevoDetalle = "Cant Vidas: " + document.getElementById("vidas").value;
                var nuevoDetalleGato = nuevoDetalle.substring(12, nuevoDetalle.length);
                mascotas[index - 1] = new Pets.Gato(nuevoNombre, parseInt(nuevoDetalleGato));
            }
            else if (nuevoTipoAnimal == "Pajaro") {
                nuevoDetalle = document.getElementById("tipo").value;
                if (nuevoDetalle == "Loro") {
                    mascotas[index - 1] = new Pets.Pajaro(nuevoNombre, Pets.TipoPajaro.loro);
                }
                else {
                    mascotas[index - 1] = new Pets.Pajaro(nuevoNombre, Pets.TipoPajaro.rapinia);
                }
            }
            trClick.childNodes[0].innerHTML = nuevoNombre;
            trClick.childNodes[1].innerHTML = nuevoTipoAnimal;
            trClick.childNodes[2].innerHTML = nuevoDetalle;
            cerrarGrilla();
        };
    }
    function agregar() {
        document.getElementById("btnGuardar").disabled = false;
        document.getElementById("btnGuardar").className = "botonGuardar";
        var nombre = document.getElementById("nombreAnimal").value;
        var raza = document.getElementById("raza").value;
        var vidas = document.getElementById("vidas").value;
        var tipoPajaro = document.getElementById("tipo").value;
        var tipoAnimal = document.getElementById("animales").value;
        if (nombre == "") {
            document.getElementById("nombreAnimal").className = "error";
            alert("Nombre requerido");
            return;
        }
        else {
            if (tipoAnimal === "Perro") {
                if (raza == "") {
                    document.getElementById("raza").className = "error";
                    alert("Razas requeridas");
                    return;
                }
                else {
                    var perro = new Pets.Perro(nombre, raza);
                    mascotas.push(perro);
                }
            }
            else if (tipoAnimal === "Gato") {
                if (vidas == "") {
                    document.getElementById("vidas").className = "error";
                    alert("Vidas requeridas");
                    return;
                }
                else {
                    var gato = new Pets.Gato(nombre, parseInt(vidas));
                    mascotas.push(gato);
                }
            }
            else {
                if (tipoPajaro == "Loro") {
                    var pajaro = new Pets.Pajaro(nombre, Pets.TipoPajaro.loro);
                    mascotas.push(pajaro);
                }
                else {
                    var pajaro = new Pets.Pajaro(nombre, Pets.TipoPajaro.rapinia);
                    mascotas.push(pajaro);
                }
            }
            document.getElementById("nombreAnimal").className = "sinError";
            agregarAnimal(mascotas);
            cerrarGrilla();
        }
    }
    Pets.agregar = agregar;
})(Pets || (Pets = {}));
