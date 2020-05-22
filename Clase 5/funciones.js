window.onload = function () {    

    var btnEnviar = document.getElementById("btnEnviar");
    var btnLimpiar = document.getElementById("btnLimpiar");
    
    btnEnviar.onclick = function () {
        
        var http= new XMLHttpRequest();
        var valorUser = document.getElementById("User").value;
        var valorPasswd = document.getElementById("Passwd").value;

        http.onreadystatechange=function(){
           
            if (http.readyState==4 && http.status==200) {

                    if(http.responseText=="true")
                    {
                        alert("Login exitoso");
                    }
                    else{
                        alert("Usuario o contraseña incorrecta!!!");
                    }

                }
                    
                
            }
            http.open("GET","http://localhost:3000/loginUsuario?usr="+valorUser+"&pass="+valorPasswd+"",true)
            http.send();//si uso posto los parametros van por el send
        }
    

        

    }

    
