export class Chat {
    public chat_id : number;
    constructor(public emisor_id : number, public receptor_id : number, public nickname_emisor : string, 
        public foto_emisor : string, public nickname_receptor : string, public foto_receptor : string) {}
}
