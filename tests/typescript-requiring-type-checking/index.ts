// TypeScript Smoke Test

export class NI {
    private _awesomeLevel = 1;

    public get awesome(): boolean {
        return this._awesomeLevel > 0;
    }

    public makeAwesomer(): void {
        this._awesomeLevel += 1;
    }

    public async slowAdd(a: number, b: number, timeMs: number): Promise<number> {
        return await new Promise(resolve => {
            setTimeout(() => resolve(a + b), timeMs);
        });
    }
}
