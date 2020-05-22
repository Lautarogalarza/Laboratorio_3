window.onload = function () {  


       //var array=[];//declaro array
       var arrayJson=[{"Nombre":"Lautaro","Edad":22},{"Nombre":"Ezequiel","Edad":24}];//declaro array de Json
       var arrayJsonString='[{"Nombre":"Lautaro","Edad":22},{"Nombre":"Ezequiel","Edad":24}]';//declaro array de Json
       var persona= {"Nombre":"Lautaro","Edad":22};
    
       for (var i = 0; i < arrayJson.length; i++) {
    
           //console.log(array[i]);
           console.log(arrayJson[i].Nombre);
              
       }

       alert(JSON.stringify(arrayJson));//convierto el json a string
       alert(arrayJsonString);

       var objJson= JSON.parse(arrayJsonString);//convierto otra vez el JSONString en un objeto json

       alert(objJson);

   }
   
