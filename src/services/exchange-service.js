export default class ExchangeService {
    _apiBase = "http://iss.moex.com";

    getResource = async (url) => {
        const result = await fetch(`${this._apiBase}${url}.json`);
        if (!result.ok) {
            console.log(`Could not fetch ${this._apiBase}, status: ${result.status}`);
        }
        return await result.json();
    };

    getCurrentShare = async (url) => {
        return await this.getResource(`/iss/engines/stock/markets/shares/boards/TQBR/securities/${url}`)
    };

    getHistoryShare = async (url) => {
        return await this.getResource(`/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${url}.json?from=2021-01-01&till=2021-03-30`)
    }
}