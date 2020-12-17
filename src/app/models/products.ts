export class Products {
<<<<<<< HEAD
    public id: number;
    constructor (public name: string, public descripcion : string, public foto1: string,
        public precio : number, public categoria : string, public subcategoria: string, public foto2: string, public foto3 ? : string, 
        public foto4 ?: string, public nvaloraciones ?: number, public suma ?: number, public media ?: number,){}
}


=======
    public id : number;

    constructor(public name : string, public description : string, public user_id : number, 
        public categoria: string, public foto1 : string, public precio : number, public subcategoria ? : string, 
        public foto2 ? : string, public foto3 ? : string, public foto4 ? : string,
        public nvaloraciones ? : number, public suma ? : number, public media ? : number ) {}
}
>>>>>>> a8f72a569c1099cd74dd35bfc24523503bb0576a
