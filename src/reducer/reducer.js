const initialState = {
    shareArr: null,
    chart: null,
    loading: true,
    basket: [],
    menu: {
        gazp: {
            name: "Газпром",
            id: "GAZP",
            amount: 0,
            url: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2d/Gazprom-Logo-rus.svg/1200px-Gazprom-Logo-rus.svg.png",
        },
        rosn: {
            name: "Роснефть",
            id: "ROSN",
            amount: 0,
            url: "https://cdn.freelogovectors.net/wp-content/uploads/2012/03/rosneft_logo.jpg",
        },
        lkoh: {
            name: "ЛУКОЙЛ",
            id: "LKOH",
            amount: 0,
            url: "https://cdn.freelogovectors.net/wp-content/uploads/2020/02/lukoil-logo-768x768.png",
        },
        tatn: {
            name: "Татнефть",
            id: "TATN",
            amount: 0,
            url: "https://cdn.freelogovectors.net/wp-content/uploads/2020/01/tatneft-logo-768x768.png",
        },
        rnft: {
            name: "РуссНефть",
            id: "RNFT",
            amount: 0,
            url: "https://rogtecmagazine.com/wp-content/uploads/2019/04/8a10a247a6c0790ce3c53d79cfacb8dc.png",
        },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHARE_LOADED":
            return {
                ...state,
                shareArr: action.payload,
                loading: false,
            };

        case "CHART_LOADED":
            return {
                ...state,
                chart: action.payload,
                loading: false,
            };

        case "REQUESTED":
            return {
                ...state,
                loading: true,
            };

        case "ITEM_ADD_TO_BASKET":
            const id = action.payload;
            const reformatId = id.toLowerCase();
            const item = state.menu[reformatId];
            const newItem = {
                name: item.name,
                id: item.id,
                amount: item.amount,
                url: item.url,
            };
            return {
                ...state,
                basket: [
                    ...state.basket,
                    newItem
                ]
            };

        default:
            return state;
    }
};

export default reducer;