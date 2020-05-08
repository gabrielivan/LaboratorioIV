import { Pais } from './pais';

export class Actor {

    Id : number;
    Nombre : string;
    Apellido : string;
    Sexo : number;
    FechaDeNacimiento: string;
    Foto : string;
    PaisDeOrigen : string;
    Pais: Pais;
  
    public constructor(id: number, nombre: string, apellido: string, sexo: string, fechaDeNacimiento: string, foto: string, paisDeOrigen:string) { 
  
    }
    
}
