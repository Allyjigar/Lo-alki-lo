export class Renting {
    public renting_id: number;

    constructor(public duration: number, public date: any, public product_id: number, public user_id: number,
        public alquilado: boolean, public valorado: boolean, public arrendatario_id: number) { }
}
