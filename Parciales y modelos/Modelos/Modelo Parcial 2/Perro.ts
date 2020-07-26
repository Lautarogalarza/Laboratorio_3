
namespace Pets{
   export class Perro extends Mascota {//implements para interfaz y extend para herencia de clases

        public raza:string;
   
        constructor(nombre:string,raza:string) {
                super(nombre);

                this.raza = raza;
                
        }
}  
}