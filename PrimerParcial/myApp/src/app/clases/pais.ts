export class Pais {
    
    Name : string;
    Capital : string;
    Flag : string;
    Population : number;
    Region : string;
    Subregion : string;


    public constructor(name: string, capital: string, flag: string, population: number, region: string, subregion: string) { 
        this.Name = name;
        this.Capital = capital;
        this.Flag = flag;
        this.Population = population;
        this.Region = region;
        this.Subregion = subregion;
    }
    
}
