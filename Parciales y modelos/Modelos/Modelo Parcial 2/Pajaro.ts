
namespace Pets{
    export class Pajaro extends Mascota {
    
        public tipo: TipoPajaro;

        constructor(nombre:string,tipo:TipoPajaro) {
            super(nombre);

            this.tipo = tipo;
            
    }
    
    }
    
}