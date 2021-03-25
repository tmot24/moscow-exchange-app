export default class Share {
    constructor(secid, boardid, bid, biddepth, offer, offerdepth, spread, biddeptht, offerdeptht, open, low, high, last, lastchange, lastchangeprcnt, qty, value, value_usd, waprice, lastcngtolastwaprice, waptoprevwapriceprcnt, waptoprevwaprice, closeprice, marketpricetoday, marketprice, lasttoprevprice, numtrades, voltoday, valtoday, valtoday_usd, etfsettleprice, tradingstatus, updatetime, admittedquote, lastbid, lastoffer, lcloseprice, lcurrentprice, marketprice2, numbids, numoffers, change, time, highbid, lowoffer, priceminusprevwaprice, openperiodprice, seqnum, systime, closingauctionprice, closingauctionvolume, issuecapitalization, issuecapitalization_updatetime, etfsettlecurrency, valtoday_rur, tradingsession) {
        this.secid = secid;
        this.boardid = boardid;
        this.bid = bid;
        this.biddepth = biddepth;
        this.offer = offer;
        this.offerdepth = offerdepth;
        this.spread = spread;
        this.biddeptht = biddeptht;
        this.offerdeptht = offerdeptht;
        this.open = open;
        this.low = low;
        this.high = high;
        this.last = last;
        this.lastchange = lastchange;
        this.lastchangeprcnt = lastchangeprcnt;
        this.qty = qty;
        this.value = value;
        this.value_usd = value_usd;
        this.waprice = waprice;
        this.lastcngtolastwaprice = lastcngtolastwaprice;
        this.waptoprevwapriceprcnt = waptoprevwapriceprcnt;
        this.waptoprevwaprice = waptoprevwaprice;
        this.closeprice = closeprice;
        this.marketpricetoday = marketpricetoday;
        this.marketprice = marketprice;
        this.lasttoprevprice = lasttoprevprice;
        this.numtrades = numtrades;
        this.voltoday = voltoday;
        this.valtoday = valtoday;
        this.valtoday_usd = valtoday_usd;
        this.etfsettleprice = etfsettleprice;
        this.tradingstatus = tradingstatus;
        this.updatetime = updatetime;
        this.admittedquote = admittedquote;
        this.lastbid = lastbid;
        this.lastoffer = lastoffer;
        this.lcloseprice = lcloseprice;
        this.lcurrentprice = lcurrentprice;
        this.marketprice2 = marketprice2;
        this.numbids = numbids;
        this.numoffers = numoffers;
        this.change = change;
        this.time = time;
        this.highbid = highbid;
        this.lowoffer = lowoffer;
        this.priceminusprevwaprice = priceminusprevwaprice;
        this.openperiodprice = openperiodprice;
        this.seqnum = seqnum;
        this.systime = systime;
        this.closingauctionprice = closingauctionprice;
        this.closingauctionvolume = closingauctionvolume;
        this.issuecapitalization = issuecapitalization;
        this.issuecapitalization_updatetime = issuecapitalization_updatetime;
        this.etfsettlecurrency = etfsettlecurrency;
        this.valtoday_rur = valtoday_rur;
        this.tradingsession = tradingsession;
    }

    shortTitle(value) {
        switch (value) {
            case "secid":
                return "Код инструмента";
            case "boardid":
                return "Код режима";
            case "bid":
                return "Спрос";
            case "biddepth":
                return "Лотов на покупку по лучшей";
            case "offer":
                return "Предложение";
            case "offerdepth":
                return "Лотов на продажу по лучшей";
            case "spread":
                return "Спред";
            case "biddeptht":
                return "Совокупный спрос";
            case "offerdeptht":
                return "Совокупное предложение";
            case "open":
                return "Первая";
            case "low":
                return "Минимум";
            case "high":
                return "Максимум";
            case "last":
                return "Последняя";
            case "lastchange":
                return "Изменение последней, руб.";
            case "lastchangeprcnt":
                return "Изменение последней, %";
            case "qty":
                return "Лотов в последней";
            case "value":
                return "Объем в последней";
            case "value_usd":
                return "Объем последней, дол. США";
            case "waprice":
                return "Ср.взвеш.";
            case "lastcngtolastwaprice":
                return "Изменение к средневзвешенной цене";
            case "waptoprevwapriceprcnt":
                return "Изменение срвзв. к срвзв. пред. дня, %";
            case "waptoprevwaprice":
                return "Изменение срвзв. к срвзв. пред. дня";
            case "closeprice":
                return "Цена послеторгового периода";
            case "marketpricetoday":
                return "Рыночная цена";
            case "marketprice":
                return "Рыночная цена предыдущего дня";
            case "lasttoprevprice":
                return "Изменение к пред. дню, %";
            case "numtrades":
                return "Сделок сегодня";
            case "voltoday":
                return "Количество сегодня";
            case "valtoday":
                return "Объем";
            case "valtoday_usd":
                return "Объем сделок, дол. США";
            case "etfsettleprice":
                return "Расч. стоим";
            case "tradingstatus":
                return "Состояние";
            case "updatetime":
                return "Время обновления";
            case "admittedquote":
                return "Призн. котир.";
            case "lastbid":
                return "Спрос сессии";
            case "lastoffer":
                return "Предложение сессии";
            case "lcloseprice":
                return "Цена закрытия";
            case "lcurrentprice":
                return "Текущая цена";
            case "marketprice2":
                return "Рыночная цена 2";
            case "numbids":
                return "Заявок на покупку";
            case "numoffers":
                return "Заявок на продажу";
            case "change":
                return "К последней пред. дня";
            case "time":
                return "Время последней";
            case "highbid":
                return "Лучший спрос";
            case "lowoffer":
                return "Лучшее предложение";
            case "priceminusprevwaprice":
                return "К оценке пред. дня";
            case "openperiodprice":
                return "Цена предторгового периода";
            case "seqnum":
                return "номер обновления (служебное поле)";
            case "systime":
                return "Время загрузки";
            case "closingauctionprice":
                return "Цена ПА";
            case "closingauctionvolume":
                return "Количество ПА";
            case "issuecapitalization":
                return "Капитализация";
            case "issuecapitalization_updatetime":
                return "Обновление капитализации";
            case "etfsettlecurrency":
                return "Валюта расч. стоим";
            case "valtoday_rur":
                return "Объем, руб.";
            case "tradingsession":
                return "Торговая сессия";

            default:
                return "Ошибка в названии искомого поля";
        }
    }

    longTitle(value) {
        switch (value) {
            case "secid":
                return "Идентификатор финансового инструмента";
            case "boardid":
                return "Идентификатор режима торгов";
            case "bid":
                return "Лучшая котировка на покупку";
            case "biddepth":
                return "Объем заявок на покупку по лучшей котировке, выраженный в лотах";
            case "offer":
                return "Лучшая котировка на продажу";
            case "offerdepth":
                return "Объем заявок на продажу по лучшей котировке, выраженный в лотах";
            case "spread":
                return "Разница между лучшей котировкой на продажу и покупку (спред), руб.";
            case "biddeptht":
                return "Объем всех заявок на покупку в очереди Торговой Системы, выраженный в лотах";
            case "offerdeptht":
                return "Объем всех заявок на продажу в очереди Торговой Системы, выраженный в лотах";
            case "open":
                return "Цена первой сделки";
            case "low":
                return "Минимальная цена сделки";
            case "high":
                return "Максимальная цена сделки";
            case "last":
                return "Цена последней сделки";
            case "lastchange":
                return "Изменение цены последней сделки к цене предыдущей сделки, рублей";
            case "lastchangeprcnt":
                return "Изменение цены последней сделки к цене предыдущей сделки, %";
            case "qty":
                return "Объем последней сделки, в лотах";
            case "value":
                return "Объем последней сделки, в руб.";
            case "value_usd":
                return "Объем последней сделки, дол. США";
            case "waprice":
                return "Средневзвешенная цена";
            case "lastcngtolastwaprice":
                return "Изменение цены последней сделки к средневзвешенной цене, рублей";
            case "waptoprevwapriceprcnt":
                return "Изменение средневзвешенной цены относительно средневзвешенной цены предыдущего торгового дня, %";
            case "waptoprevwaprice":
                return "Изменение средневзвешенной цены к средневзвешенной цене предыдущего торгового дня, рублей";
            case "closeprice":
                return "Цена послеторгового периода";
            case "marketpricetoday":
                return "Рыночная цена по результатам торгов сегодняшнего дня, за одну ценную бумагу";
            case "marketprice":
                return "Рыночная цена ценной бумаги по результатам торгов предыдущего дня, за одну ценную бумагу";
            case "lasttoprevprice":
                return "Изменение цены последней сделки к последней цене предыдущего дня, %";
            case "numtrades":
                return "Количество сделок за торговый день";
            case "voltoday":
                return "Объем совершенных сделок, выраженный в единицах ценных бумаг";
            case "valtoday":
                return "Объем совершенных сделок, в валюте расчетов";
            case "valtoday_usd":
                return "Объем заключенных сделок, дол. США";
            case "etfsettleprice":
                return "Расчетная стоимость акции/пая иностранного биржевого инвестиционного фонда";
            case "tradingstatus":
                return "Индикатор состояния торговой сессии по инструменту";
            case "updatetime":
                return "Время последнего обновления";
            case "admittedquote":
                return "Признаваемая котировка";
            case "lastbid":
                return "Лучшая котировка на покупку на момент завершения нормального периода торгов";
            case "lastoffer":
                return "Лучшая котировка на продажу на момент завершения нормального периода торгов";
            case "lcloseprice":
                return "Официальная цена закрытия, рассчитываемая по методике ФСФР как средневзвешенная цена сделок за последние 10 минут торговой сессии, включая сделки послеторгового периода";
            case "lcurrentprice":
                return "Официальная текущая цена, рассчитываемая как средневзвешенная цена сделок заключенных за последние 10 минут";
            case "marketprice2":
                return "Рыночная цена 2, рассчитываемая в соответствии с методикой ФСФР";
            case "numbids":
                return "Количество заявок на покупку в очереди Торговой системы";
            case "numoffers":
                return "Количество заявок на продажу в очереди Торговой системы";
            case "change":
                return "Изменение цены последней сделки по отношению к цене последней сделки предыдущего торгового дня";
            case "time":
                return "Время заключения последней сделки";
            case "highbid":
                return "Наибольшая цена спроса в течение торговой сессии";
            case "lowoffer":
                return "Наименьшая цена предложения в течение торговой сессии";
            case "priceminusprevwaprice":
                return "Цена последней сделки к оценке предыдущего дня";
            case "openperiodprice":
                return "Цена предторгового периода";
            case "seqnum":
                return "номер обновления (служебное поле)";
            case "systime":
                return "Время загрузки данных системой";
            case "closingauctionprice":
                return "Цена послеторгового аукциона. В течение аукциона отображает ожидаемую цену аукциона с учетом всех зарегистрированных на текущий момент заявок. После завершения аукциона отображает цену состоявшегося аукциона.";
            case "closingauctionvolume":
                return "Количество в сделках послеторгового аукциона. Ожидаемое (состоявшееся) количество лотов в сделках по указанной цене послеторгового аукциона.";
            case "issuecapitalization":
                return "Текущая капитализация акции";
            case "issuecapitalization_updatetime":
                return "Время обновления капитализации";
            case "etfsettlecurrency":
                return "Валюта расчетной стоимости акции/пая иностранного биржевого инвестиционного фонда";
            case "valtoday_rur":
                return "Объем совершенных сделок, рублей";
            case "tradingsession":
                return "Торговая сессия";

            default:
                return "Ошибка в названии искомого поля";
        }
    }

}