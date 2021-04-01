import {subWeeks, subMonths, format} from 'date-fns';


export default class ExchangeService {
    _apiBase = "https://iss.moex.com";

    getResource = async (url) => {
        const result = await fetch(`${this._apiBase}${url}.json`);
        if (!result.ok) {
            console.log(`Could not fetch ${this._apiBase}, status: ${result.status}`);
        }
        return await result.json();
    };

    getCurrentShare = async (url) => {
        return await this.getResource(`/iss/engines/stock/markets/shares/boards/TQBR/securities/${url}`);
    };

    getHistoryShare = async (url, period) => {
        const now = format(new Date(), "yyyy-MM-dd");
        switch (period) {
            case "oneWeek":
                const oneWeek = subWeeks(new Date(), 1);
                const formatOneWeek = format(oneWeek, "yyyy-MM-dd");
                return await this.getResource(`/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${url}.json?from=${formatOneWeek}&${now}`);

            case "twoWeek":
                const twoWeek = subWeeks(new Date(), 2);
                const formatTwoWeek = format(twoWeek, "yyyy-MM-dd");
                return await this.getResource(`/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${url}.json?from=${formatTwoWeek}&${now}`);
            case "oneMonth":
                const oneMonth = subMonths(new Date(), 1);
                const formatOneMonth = format(oneMonth, "yyyy-MM-dd");
                return await this.getResource(`/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${url}.json?from=${formatOneMonth}&${now}`);
            case "twoMonth":
                const twoMonth = subMonths(new Date(), 2);
                const formatTwoMonth = format(twoMonth, "yyyy-MM-dd");
                return await this.getResource(`/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${url}.json?from=${formatTwoMonth}&${now}`);
            default:
                const fourMonth = subMonths(new Date(), 4);
                const formatFourMonth = format(fourMonth, "yyyy-MM-dd");
                return await this.getResource(`/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${url}.json?from=${formatFourMonth}&${now}`);
        }
    };
}