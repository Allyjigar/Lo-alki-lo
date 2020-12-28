export class Favorito {
    public favourites_id: number;

    constructor(public user_id: number, public product_id: number, public favorito: boolean) {}
}
