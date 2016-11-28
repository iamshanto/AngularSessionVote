export class Vote {
    private _date;
    constructor(private id:any){
        this._date = new Date().toISOString();
        if (!id) {
            this.id = this._date;
        }
    }
}
