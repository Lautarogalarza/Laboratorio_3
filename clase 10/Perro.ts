
namespace Mascotas{
   export class Perro implements Animal {//implements para interfaz y extend para herencia de clases
    
        public nombre: string;
        public raza:string;
    
    
        constructor(raza:string,nombre?: string) {
            if (nombre == undefined) {
                this.nombre = "Perro"
            } else {
                this.nombre = nombre;
    
            }
    
            this.raza=raza;
        }
    
        public hacerRuido(): void {
    
            console.log(this.nombre + " Dice Guau! " + this.raza);
        }
    
    
    }
    
}