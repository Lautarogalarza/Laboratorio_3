function  agregar() {

    var nombre = document.getElementById("fname").value;
    var apellido = document.getElementById("lname").value;

    if(apellido=="" || nombre=="")
    {
        document.getElementById("lname").className="error";
        document.getElementById("fname").className="error";
        alert("debe ingresar un nombre y un apellido");
        return;
    }
    
    if (confirm("Estas seguro que desea agregar una persona?")==true) {
        document.getElementById("lname").className="sinError";
        document.getElementById("fname").className="sinError";

        var tCuerpo = document.getElementById("tCuerpo");

        tCuerpo.innerHTML =tCuerpo.innerHTML +
        "<tr>"+

        "<td>" +nombre+ "</td>"+
        "<td>" +apellido+ "</td>"+
        "<td><a href=''>borrar</a></td>"+
        "</tr>";

        
    }

    cerrar();
}

function abrir(){

    document.getElementById("lname").className="sinError";
    document.getElementById("fname").className="sinError";
    var contAgregar = document.getElementById("contAgregar");
    contAgregar.classList.add("verForm");
    
    
}

function cerrar(){
    document.getElementById("lname").className="sinError";
    document.getElementById("fname").className="sinError";
    var contAgregar = document.getElementById("contAgregar");
    contAgregar.classList.remove("verForm");
    
}