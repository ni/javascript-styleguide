// TypeScript Smoke Test

export default class NI {
    constructor() {
        this._awesomeLevel = 1;
    }

    get awesome() {
        return this._awesomeLevel > 0;
    }

    makeAwesomer() {
        this._awesomeLevel += 1;
    }
}
