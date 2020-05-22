window.onload = function () {    

        
        var http= new XMLHttpRequest();

        http.onreadystatechange=function(){
           
            if (http.readyState==4 && http.status==200) {

                   var objJson= JSON.parse(http.responseText);

                   for (var i = 0; i < objJson.length; i++) {
    
                    agregarTodos(objJson[i].nombre,objJson[i].apellido,objJson[i].fecha,objJson[i].telefono);
                       
                }
                    
                }
                    
                
            }
            http.open("GET","http://localhost:3000/personas",true)
            http.send();//si uso posto los parametros van por el send
        
    }


    function  agregarTodos(nombre,apellido,fecha,telefono) {

  
            var tCuerpo = document.getElementById("tCuerpo");
    
            tCuerpo.innerHTML =tCuerpo.innerHTML +
            "<tr>"+
            "<td>" +nombre+ "</td>"+
            "<td>" +apellido+ "</td>"+
            "<td>" +fecha+ "</td>"+
            "<td>" +telefono+ "</td>"+
            "<td><a href=''>borrar</a></td>"+
            "</tr>";
    
    }






function  agregar() {

    var httpPost= new XMLHttpRequest();
    var respuesta= '{"respuesta":"ok"}';


    var nombre = document.getElementById("fname").value;
    var apellido = document.getElementById("lname").value;
    var telefono = document.getElementById("tname").value;
    var fecha = document.getElementById("dname").value;


    if(apellido=="" || nombre=="" || fecha=="" || telefono=="" )
    {
        document.getElementById("lname").className="error";
        document.getElementById("fname").className="error";
        document.getElementById("tname").className="error";
        document.getElementById("dname").className="error";
        alert("debe ingresar todos los datos");
        return;
    }
    else
    {
        httpPost.onreadystatechange=function(){
               
            if (httpPost.readyState==4 && httpPost.status==200) {
                document.getElementById("Cargando").style.display = "none";
                if(httpPost.responseText==respuesta)
                {

                    if (confirm("Estas seguro que desea agregar una persona?")==true ) {
                        document.getElementById("lname").className="sinError";
                        document.getElementById("fname").className="sinError";
                        document.getElementById("tname").className="sinError";
                        document.getElementById("dname").className="sinError";
                
                        var tCuerpo = document.getElementById("tCuerpo");
                
                        tCuerpo.innerHTML =tCuerpo.innerHTML +
                        "<tr>"+
                        "<td>" +nombre+ "</td>"+
                        "<td>" +apellido+ "</td>"+
                        "<td>" +fecha+ "</td>"+
                        "<td>" +telefono+ "</td>"+
                        "<td><a href=''>borrar</a></td>"+
                        "</tr>";
    
                           
                    }
                
                    cerrar();
                }
                else
                {
                    alert("algo salio mal")
                }
                       
                }
       
                
            }

        }

        httpPost.open("POST","http://localhost:3000/nuevaPersona",true)
        httpPost.setRequestHeader("Content-Type","application/Json");
        document.getElementById("Cargando").style.display = "flex";

        var JsonPersona={"nombre":nombre,"apellido":apellido,"fecha":fecha,"telefono":telefono};

        httpPost.send(JSON.stringify(JsonPersona));//esto recibe un string, un json convertido en string en este caso

}

function abrir(){

    document.getElementById("lname").className="sinError";
    document.getElementById("fname").className="sinError";
    document.getElementById("tname").className="sinError";
    document.getElementById("dname").className="sinError";
    var display = document.getElementById("contAgregar").style.display="block";
    var contAgregar = document.getElementById("contAgregar");
    contAgregar.classList.add("verForm");
        
}

function cerrar(){
    document.getElementById("lname").className="sinError";
    document.getElementById("fname").className="sinError";
    document.getElementById("tname").className="sinError";
    document.getElementById("dname").className="sinError";
    var display = document.getElementById("contAgregar").style.display="none";
    var contAgregar = document.getElementById("contAgregar");
    contAgregar.classList.remove("verForm");
    
}