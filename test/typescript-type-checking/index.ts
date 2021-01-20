// TypeScript Smoke Test

export default class NI {
    private _awesomeLevel = 1;

    public get awesome(): boolean {
        return this._awesomeLevel > 0;
    }

    public makeAwesomer(): void {
        this._awesomeLevel += 1;
    }
}
