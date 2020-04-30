export class Pelicula {

    Id : number;
    Nombre : string;
    FechaDeEstreno : string;
    CantidadDePublico : number;
    FotoDeLaPelicula: string;
    Tipo : Tipo;
  
    public constructor(id: number, nombre: string, fechaDeEstreno: string, cantidadDePublico: number, fotoDeLaPelicula: string, tipo: Tipo) { 
  
    }
    
}

enum Tipo {
    Terror,
    Comedia,
    Amor,
    Otros
  }