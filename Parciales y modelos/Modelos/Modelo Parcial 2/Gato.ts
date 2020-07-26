
namespace Pets{
    export class Gato extends Mascota {
    
        public cantVidas: number=9;
        
        constructor(nombre:string,vidas:number) {
            super(nombre);//llamada al constructor padre

            this.cantVidas = vidas;
            
    }
    
    }
    
}