export class Users {
    public id : number;

    constructor(public nickname : string, public password : string, public foto: string, public confirmPassword ?: string, public email ?: string,
    public name ?: string, public direccion ?: string, public ciudad ?: string,
    public cp ? : number) {}
}
