// TypeScript Smoke Test

export class NI {
    private _awesomeLevel = 1;

    public get awesome(): boolean {
        return this._awesomeLevel > 0;
    }

    public makeAwesomer(): void {
        this._awesomeLevel += 1;
    }

    public async asyncAwesomeness(): Promise<void> {
        await new Promise(resolve => {
            resolve(true);
        });
    }
}
