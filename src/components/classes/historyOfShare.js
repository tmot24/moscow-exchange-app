class HistoryOfShare {
    constructor(boardid, tradedate, shortname, secid, numtrades, value, open, low, high, legalcloseprice, waprice, close, volume, marketprice2, marketprice3, admittedquote, mp2valtrd, marketprice3tradesvalue, admittedvalue, waval, tradingsession) {
        this.boardid = boardid;
        this.tradedate = tradedate;
        this.shortname = shortname;
        this.secid = secid;
        this.numtrades = numtrades;
        this.value = value;
        this.open = open;
        this.low = low;
        this.high = high;
        this.legalcloseprice = legalcloseprice;
        this.waprice = waprice;
        this.close = close;
        this.volume = volume;
        this.marketprice2 = marketprice2;
        this.marketprice3 = marketprice3;
        this.admittedquote = admittedquote;
        this.mp2valtrd = mp2valtrd;
        this.marketprice3tradesvalue = marketprice3tradesvalue;
        this.admittedvalue = admittedvalue;
        this.waval = waval;
        this.tradingsession = tradingsession;
    }

    shortTitle(value) {
        switch (value) {
            case "boardid":
                return "Код режима";
            case "tradedate":
                return "Дата торгов";
            case "shortname":
                return "Кратк. наим.";
            case "secid":
                return "Код инструмента";
            case "numtrades":
                return "Сделок, шт.";
            case "value":
                return "Объем";
            case "open":
                return "Первая";
            case "low":
                return "Минимум";
            case "high":
                return "Максимум";
            case "legalcloseprice":
                return "Закрытия";
            case "waprice":
                return "Срвзв.цена";
            case "close":
                return "Последняя";
            case "volume":
                return "Объем, шт.";
            case "marketprice2":
                return "Рыночная (2), руб ";
            case "marketprice3":
                return "Рыночная (3), руб";
            case "admittedquote":
                return "Призн. котир.";
            case "mp2valtrd":
                return "Объем рыночной 2";
            case "marketprice3tradesvalue":
                return "Объем сделок рыночной (3), руб";
            case "admittedvalue":
                return "Объем призн. котир.";
            case "waval":
                return "3-х месячный среднедневной оборот";
            case "tradingsession":
                return "Сессия";

            default:
                return "Ошибка в названии искомого поля";
        }
    }

    longTitle(value) {
        switch (value) {
            case "boardid":
                return "Идентификатор режима торгов";
            case "tradedate":
                return "Дата торгов";
            case "shortname":
                return "Краткое наименование";
            case "secid":
                return "Идентификатор финансового инструмента";
            case "numtrades":
                return "Количество сделок за день, штук";
            case "value":
                return "Объем сделок за день";
            case "open":
                return "Цена предторгового периода/Цена аукциона открытия";
            case "low":
                return "Цена сделки минимальная";
            case "high":
                return "Цена сделки максимальная";
            case "legalcloseprice":
                return "Цена закрытия";
            case "waprice":
                return "Средневзвешенная цена";
            case "close":
                return "Цена последней сделки";
            case "volume":
                return "Объем сделок за день, штук ценных бумаг";
            case "marketprice2":
                return "Рыночная цена (2), рублей";
            case "marketprice3":
                return "Рыночная цена (3), рублей";
            case "admittedquote":
                return "Признаваемая котировка";
            case "mp2valtrd":
                return "Объем сделок для расчета рыночной цены (2),  рублей";
            case "marketprice3tradesvalue":
                return "Объем сделок для расчета рыночной цены (3), рублей";
            case "admittedvalue":
                return "Объем сделок для расчета признаваемой котировки, рублей";
            case "waval":
                return "3-х месячный среднедневной оборот по сделкам с паями";
            case "tradingsession":
                return "Номер торговой сессии";

            default:
                return "Ошибка в названии искомого поля";
        }
    }

}

export default HistoryOfShare;

/*
fetch("https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/columns.json")
    .then(prom => prom.json())
    // .then(json => console.log(json))
    .then(json => {
            for (let i = 0; i <= json.history.data.length - 1; i++) {
                console.log(json.history.data[i][3]);
            }
        }
    );*/
