export default class ExchangeService {
    _apiBase = "http://iss.moex.com";

    getResource = async (url) => {
        const result = await fetch(`${this._apiBase}${url}.json`);
        if (!result.ok) {
            console.log(`Could not fetch ${this._apiBase}, status: ${result.status}`);
        }
        return await result.json();
    };

    getCurrentGAZP = async () => {
        return await this.getResource("/iss/engines/stock/markets/shares/boards/TQBR/securities/GAZP")
    };
}