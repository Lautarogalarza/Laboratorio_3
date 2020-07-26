
namespace Mascotas{
    export class Gato implements Animal {
    
        public nombre: string;
    
    
        constructor(nombre?: string) {
            if (nombre == undefined) {
                this.nombre = "Gato"
            } else {
                this.nombre = nombre;
    
            }
        }
    
        public hacerRuido(): void {
    
            console.log(this.nombre + " Dice Miau!");
        }
    
    
    }
    
}