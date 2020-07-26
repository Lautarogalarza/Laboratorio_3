namespace Pets {

    window.addEventListener("load", function () {

        document.getElementById("animales")?.addEventListener("change", verTipos);
        document.getElementById("buscador")?.addEventListener("keyup", filtrarMascotas);


    });

    var mascotas: Array<Mascota> = new Array<Mascota>();

    export function filtrarMascotas() {
        var valor: string = (<HTMLInputElement>document.getElementById("buscador")).value;

        var filtrados: Array<Mascota> = mascotas.filter(item => item.nombre.includes(valor));

        agregarAnimal(filtrados);


    }

    export function abrirGrilla() {

        (<HTMLInputElement>document.getElementById("btnModificar")).disabled = true;
        (<HTMLInputElement>document.getElementById("btnModificar")).className = "disabledMod";

        (<HTMLInputElement>document.getElementById("btnEliminar")).disabled = true;
        (<HTMLInputElement>document.getElementById("btnEliminar")).className = "disabledDel";


        (<HTMLInputElement>document.getElementById("nombreAnimal")).className = "sinError";

        (<HTMLInputElement>document.getElementById("contGrilla")).style.display = "block";

        var contAgregar: any = <HTMLInputElement>document.getElementById("contGrilla");
        contAgregar.classList.add("verForm");


    }

    export function cerrarGrilla() {
        (<HTMLInputElement>document.getElementById("nombreAnimal")).className = "sinError";

        (<HTMLInputElement>document.getElementById("contGrilla")).style.display = "none";

        (<HTMLInputElement>document.getElementById("btnGuardar")).disabled = false;
        (<HTMLInputElement>document.getElementById("btnGuardar")).className = "botonGuardar";

        var contGrilla: any = <HTMLInputElement>document.getElementById("contGrilla");
        (<HTMLInputElement>document.getElementById("contRaza")).hidden = true;
        (<HTMLInputElement>document.getElementById("contVidas")).hidden = true;
        (<HTMLInputElement>document.getElementById("contTipos")).hidden = true;

        (<HTMLInputElement>document.getElementById("nombreAnimal")).value = "";
        (<HTMLInputElement>document.getElementById("raza")).value = "";
        (<HTMLInputElement>document.getElementById("vidas")).value = "";

        (<HTMLInputElement>document.getElementById("animales")).value = "";

        contGrilla.classList.remove("verForm");

    }


    export function verTipos() {

        var tipoAnimal: string = (<HTMLInputElement>document.getElementById("animales")).value;

        switch (tipoAnimal) {
            case "Perro":
                (<HTMLInputElement>document.getElementById("contRaza")).hidden = false;

                (<HTMLInputElement>document.getElementById("contVidas")).hidden = true;
                (<HTMLInputElement>document.getElementById("contTipos")).hidden = true;
                break;
            case "Gato":
                (<HTMLInputElement>document.getElementById("contVidas")).hidden = false;

                (<HTMLInputElement>document.getElementById("contRaza")).hidden = true;
                (<HTMLInputElement>document.getElementById("contTipos")).hidden = true;
                break;

            case "Pajaro":
                (<HTMLInputElement>document.getElementById("contTipos")).hidden = false;

                (<HTMLInputElement>document.getElementById("contVidas")).hidden = true;
                (<HTMLInputElement>document.getElementById("contRaza")).hidden = true;
                break;

            default:
                break;
        }

    }



























    function agregarAnimal(mascotas: Array<Mascota>) {

        var nombre: string;
        var tipoAnimal: string = "";
        var detalle: any;

        var tCuerpo: HTMLTableElement = <HTMLTableElement>document.getElementById("tCuerpo");

        while (tCuerpo.rows.length > 0) {
            tCuerpo.removeChild(tCuerpo.childNodes[0]);
        }


        for (const item of mascotas) {

            nombre = item.nombre;

            if (item instanceof Perro) {
                tipoAnimal = "Perro"
                detalle = "Raza: " + item.raza;

            }
            else if (item instanceof Gato) {
                tipoAnimal = "Gato"
                detalle = "Cant Vidas: " + item.cantVidas;
            }
            else if (item instanceof Pajaro) {
                tipoAnimal = "Pajaro"

                if (item.tipo == TipoPajaro.loro) {

                    detalle = "Loro";
                }
                else {
                    detalle = "Rapiña";
                }

            }

            var tr: HTMLTableRowElement = document.createElement("tr");

            var td1: HTMLTableDataCellElement = document.createElement("td");
            var nodoTexto = document.createTextNode(nombre);
            td1.appendChild(nodoTexto);
            tr.appendChild(td1);

            var td2: HTMLTableDataCellElement = document.createElement("td");
            var nodoTexto = document.createTextNode(tipoAnimal);
            td2.appendChild(nodoTexto);
            tr.appendChild(td2);

            var td3: HTMLTableDataCellElement = document.createElement("td");
            var nodoTexto = document.createTextNode(detalle);
            td3.appendChild(nodoTexto);
            tr.appendChild(td3);

            tr.addEventListener("dblclick", abrirNuevaGrilla)


            tCuerpo.appendChild(tr);
        }

    }

    function abrirNuevaGrilla(event: any) {


        (<HTMLInputElement>document.getElementById("btnGuardar")).disabled = true;
        (<HTMLInputElement>document.getElementById("btnGuardar")).className = "disabled";

        (<HTMLInputElement>document.getElementById("btnModificar")).disabled = false;
        (<HTMLInputElement>document.getElementById("btnModificar")).className = "botonModificar";

        (<HTMLInputElement>document.getElementById("btnEliminar")).disabled = false;
        (<HTMLInputElement>document.getElementById("btnEliminar")).className = "botonEliminar";


        var trClick: any = event.target.parentNode;

        var nombre: string = trClick.childNodes[0].innerHTML;
        var tipoAnimal: string = trClick.childNodes[1].innerHTML;
        var detalle: any = trClick.childNodes[2].innerHTML;
        var index = trClick.rowIndex;

        (<HTMLInputElement>document.getElementById("nombreAnimal")).value = nombre;
        (<HTMLInputElement>document.getElementById("animales")).value = tipoAnimal;


        if (tipoAnimal == "Perro") {
            (<HTMLInputElement>document.getElementById("contRaza")).hidden = false;
            (<HTMLInputElement>document.getElementById("raza")).value = detalle;
        }
        else if (tipoAnimal == "Gato") {
            (<HTMLInputElement>document.getElementById("contVidas")).hidden = false;

            var detalleGato: string = detalle.substring(12, detalle.length);

            var input = (<HTMLInputElement>document.getElementById("vidas"));

            input.value = detalleGato;

        }
        else if (tipoAnimal == "Pajaro") {
            (<HTMLInputElement>document.getElementById("contTipos")).hidden = false;
            (<HTMLInputElement>document.getElementById("tipo")).value = detalle;
        }


        (<HTMLInputElement>document.getElementById("contGrilla")).style.display = "block";

        var btnMod: HTMLInputElement = <HTMLInputElement>document.getElementById("btnModificar");
        var btnDel: HTMLInputElement = <HTMLInputElement>document.getElementById("btnEliminar");

        btnDel.onclick = function () {


            trClick.removeChild(trClick.childNodes[0]);
            trClick.removeChild(trClick.childNodes[0]);
            trClick.removeChild(trClick.childNodes[0]);

            mascotas.splice(index - 1, 1);

            cerrarGrilla();

        }


        btnMod.onclick = function () {

            var nuevoNombre: string = (<HTMLInputElement>document.getElementById("nombreAnimal")).value;
            var nuevoTipoAnimal: string = (<HTMLInputElement>document.getElementById("animales")).value;
            var nuevoDetalle: any;


            if (nuevoTipoAnimal == "Perro") {

                nuevoDetalle = "Raza: " + (<HTMLInputElement>document.getElementById("raza")).value;
                var nuevoDetallePerro: string = nuevoDetalle.substring(7, nuevoDetalle.length);
                mascotas[index - 1] = new Perro(nuevoNombre, nuevoDetallePerro);


            }
            else if (nuevoTipoAnimal == "Gato") {

                nuevoDetalle = "Cant Vidas: " + (<HTMLInputElement>document.getElementById("vidas")).value;
                var nuevoDetalleGato: string = nuevoDetalle.substring(12, nuevoDetalle.length);
                mascotas[index - 1] = new Gato(nuevoNombre, parseInt(nuevoDetalleGato));


            }
            else if (nuevoTipoAnimal == "Pajaro") {
                nuevoDetalle = (<HTMLInputElement>document.getElementById("tipo")).value;

                if (nuevoDetalle == "Loro") {

                    mascotas[index - 1] = new Pajaro(nuevoNombre, TipoPajaro.loro);
                } else {
                    mascotas[index - 1] = new Pajaro(nuevoNombre, TipoPajaro.rapinia);
                }


            }

            trClick.childNodes[0].innerHTML = nuevoNombre;
            trClick.childNodes[1].innerHTML = nuevoTipoAnimal;
            trClick.childNodes[2].innerHTML = nuevoDetalle;


            cerrarGrilla();

        }



    }




































    
    export function agregar() {

        (<HTMLInputElement>document.getElementById("btnGuardar")).disabled = false;
        (<HTMLInputElement>document.getElementById("btnGuardar")).className = "botonGuardar";

        var nombre = (<HTMLInputElement>document.getElementById("nombreAnimal")).value;
        var raza = (<HTMLInputElement>document.getElementById("raza")).value;
        var vidas = (<HTMLInputElement>document.getElementById("vidas")).value;
        var tipoPajaro = (<HTMLInputElement>document.getElementById("tipo")).value;
        var tipoAnimal = (<HTMLInputElement>document.getElementById("animales")).value;


        if (nombre == "") {

            (<HTMLInputElement>document.getElementById("nombreAnimal")).className = "error";

            alert("Nombre requerido");
            return;

        } else {

            if (tipoAnimal === "Perro") {

                if (raza == "") {

                    (<HTMLInputElement>document.getElementById("raza")).className = "error";

                    alert("Razas requeridas");
                    return;

                }
                else {

                    var perro: Perro = new Perro(nombre, raza);
                    mascotas.push(perro);
                }


            }
            else if (tipoAnimal === "Gato") {

                if (vidas == "") {

                    (<HTMLInputElement>document.getElementById("vidas")).className = "error";

                    alert("Vidas requeridas");
                    return;

                }
                else {

                    var gato: Gato = new Gato(nombre, parseInt(vidas));
                    mascotas.push(gato);

                }
            }
            else {
                if (tipoPajaro == "Loro") {

                    var pajaro: Pajaro = new Pajaro(nombre, TipoPajaro.loro);
                    mascotas.push(pajaro);
                }
                else {
                    var pajaro: Pajaro = new Pajaro(nombre, TipoPajaro.rapinia);
                    mascotas.push(pajaro);
                }
            }

            (<HTMLInputElement>document.getElementById("nombreAnimal")).className = "sinError";
            agregarAnimal(mascotas);

            cerrarGrilla();


        }


    }



}




