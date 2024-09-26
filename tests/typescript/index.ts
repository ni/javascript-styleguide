// TypeScript Smoke Test

export class NI {
    private _awesomeLevel = 1;

    constructor() {
        this._awesomeLevel = 11;
    }

    public get awesome(): boolean {
        return this._awesomeLevel > 0;
    }

    public makeAwesomer(): void {
        this._awesomeLevel += 1;
    }
}
