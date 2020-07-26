window.onload = function () {


    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {

        if (http.readyState == 4 && http.status == 200) {

            var objJson = JSON.parse(http.responseText);

            for (var i = 0; i < objJson.length; i++) {

                agregarTodos(objJson[i].nombre, objJson[i].apellido, objJson[i].fecha, objJson[i].sexo, objJson[i].id);

            }

        }


    }
    http.open("GET", "http://localhost:3000/personas", true)
    http.send();

}


function agregarTodos(nombre, apellido, fecha, sexo, id) {


    var tCuerpo = document.getElementById("tCuerpo");

    var tr = document.createElement("tr");

    tr.setAttribute("idPersona", id);

    var td1 = document.createElement("td");
    var nodoTexto = document.createTextNode(nombre);
    td1.appendChild(nodoTexto);
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    var nodoTexto = document.createTextNode(apellido);
    td2.appendChild(nodoTexto);
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    var nodoTexto = document.createTextNode(fecha);
    td3.appendChild(nodoTexto);
    tr.appendChild(td3);


    var td4 = document.createElement("td");
    var nodoTexto = document.createTextNode(sexo);
    td4.appendChild(nodoTexto);
    tr.appendChild(td4);

    tr.addEventListener("dblclick", abrirGrilla)

    tCuerpo.appendChild(tr);




}

function abrirGrilla(event) {

    var trClick = event.target.parentNode;

    document.getElementById("lname").className = "sinError";
    document.getElementById("fname").className = "sinError";
    document.getElementById("dname").className = "sinError";
    document.getElementById("contGrilla").style.display="block"

    var id = trClick.getAttribute("idPersona");
    var nombre = trClick.childNodes[0].innerHTML;
    var apellido = trClick.childNodes[1].innerHTML;
    var fecha = trClick.childNodes[2].innerHTML;
    var sexo = trClick.childNodes[3].innerHTML;


    if (sexo == "Female") {

        document.getElementById("Fename").checked = true;
    } else {
        document.getElementById("Mename").checked = true;
    }

    document.getElementById("fname").value = nombre;
    document.getElementById("lname").value = apellido;
    document.getElementById("dname").value = fecha;

 

    var contGrilla = document.getElementById("contGrilla");
    contGrilla.classList.add("verForm");

    var btnMod = document.getElementById("btnModificar");
    var btnDel = document.getElementById("btnEliminar");

    btnDel.onclick=function(){


        var httpPost = new XMLHttpRequest();

        httpPost.onreadystatechange = function () {

            if (httpPost.readyState == 4 && httpPost.status == 200) {
                document.getElementById("Cargando").style.display = "none";

                var padre=trClick.parentNode;

                 trClick.removeChild(trClick.childNodes[0]);
                 trClick.removeChild(trClick.childNodes[0]);
                 trClick.removeChild(trClick.childNodes[0]);
                 trClick.removeChild(trClick.childNodes[0]);
                                                           
                }
                cerrarGrilla();       
            
        }
        
        httpPost.open("POST", "http://localhost:3000/eliminar", true)
        httpPost.setRequestHeader("Content-Type", "application/Json");
        document.getElementById("Cargando").style.display = "flex";
        var JsonPersona = { "id": id };
        
        httpPost.send(JSON.stringify(JsonPersona));


    }


    
    btnMod.onclick = function () {

       var newName =  document.getElementById("fname").value;
        var newLastName = document.getElementById("lname").value;
        var newDate = document.getElementById("dname").value = fecha;
        var newSex = document.querySelector('input[name="sex"]:checked').value;

        var httpPost = new XMLHttpRequest();

        httpPost.onreadystatechange = function () {

            if (httpPost.readyState == 4 && httpPost.status == 200) {
                document.getElementById("Cargando").style.display = "none";

                trClick.childNodes[0].innerHTML=newName;
                trClick.childNodes[1].innerHTML=newLastName;
                trClick.childNodes[2].innerHTML=newDate;
                trClick.childNodes[3].innerHTML=newName;
                sexo = document.querySelector('input[name="sex"]:checked').value;
                trClick.childNodes[3].innerHTML=sexo;
            }
            cerrarGrilla();
            
        }
        
        httpPost.open("POST", "http://localhost:3000/editar", true)
        httpPost.setRequestHeader("Content-Type", "application/Json");
        document.getElementById("Cargando").style.display = "flex";
        var JsonPersona = { "id": id, "nombre": newName, "apellido": newLastName, "fecha": newDate, "sexo": newSex };
        
        httpPost.send(JSON.stringify(JsonPersona));
       


    }

}

function cerrarGrilla() {
    document.getElementById("lname").className = "sinError";
    document.getElementById("fname").className = "sinError";
    document.getElementById("dname").className = "sinError";
    document.getElementById("contGrilla").style.display="none"

}







function eliminar() {


}