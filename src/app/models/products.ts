export class Products {
    public id : number;

    constructor(public name : string, public description : string, public user_id : number, 
        public categoria: string, public foto1 : string, public precio : number, public subcategoria ? : string, 
        public foto2 ? : string, public foto3 ? : string, public foto4 ? : string,
        public nvaloraciones ? : number, public suma ? : number, public media ? : number ) {}
}
