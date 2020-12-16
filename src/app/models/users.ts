export class Users {
    public id : number;
    constructor(public nickname : string, public email : string, public password : string,
    public name ?: string, public direccion ?: string, public ciudad ?: string, public foto ?: string,
    public cp ? : number) {}
}
