namespace Mascotas {

    //var miPerro:Perro = new Perro();//instancia de un objeto
    //miPerro.nombre= "shorty";

        export function saludar(){
            alert("HOLU");
        }

        export function hablar() {
     
             var shorty: Perro = new Perro("el mas lindo", "shorty");
             var miPerro: Perro = new Perro("sin raza");
     
             var peque: Gato = new Gato("peque");
             var miGato: Gato = new Gato();
     
             var Animal: Animal = new Perro("sin raza");//es valido, hay que castear para usar cosas nativs del perro
     
     
             var animales: Array<Animal> = new Array<Animal>();//definicion de array tipado
     
             animales.push(shorty);
             animales.push(peque);
             animales.push(miPerro);
             animales.push(miGato);
     
             /*animales.forEach(element => {
                 
             });*/
     
             for (const iterator of animales) {
                 if (iterator instanceof Perro)//solo muesre si es de tipo perro
                 {
                     console.log("es perro")
                     var perrito = <Perro>iterator;//casteo el animal a perro    
                     perrito.hacerRuido();
                 }
                 else {
                     console.log("es gato");
                 }
             }
     
         }


}




