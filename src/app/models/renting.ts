export class Renting {
    public renting_id : number;

    constructor(public duration ?: number, public date ?: Date, public product_id ?: number, public alquilado ?: boolean, public valorado ?: boolean, public arrendatario_id ?: number) {}
}
