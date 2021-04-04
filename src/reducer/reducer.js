const initialState = {
    shareArr: null,
    chart: null,
    loading: true,
    basket: JSON.parse(localStorage.getItem("basket")),
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
            const reformatId = id.toUpperCase();
            const item = state.menu[id];
            const alreadyAdded = state.basket.findIndex(item => item.id === reformatId);
            if (alreadyAdded === -1) {
                const newItem = {
                    name: item.name,
                    id: item.id,
                    amount: item.amount + 1,
                    url: item.url,
                };
                return {
                    ...state,
                    basket: [
                        ...state.basket,
                        newItem
                    ]
                };
            } else {
                return {
                    ...state,
                    basket: [
                        ...state.basket.slice(0, alreadyAdded),
                        {...state.basket[alreadyAdded], amount: state.basket[alreadyAdded].amount + 1},
                        ...state.basket.slice(alreadyAdded + 1)
                    ]
                };
            }


        case "ITEM_REMOVE_FROM_BASKET":
            const removeId = action.payload;
            const removeIndex = state.basket.findIndex(item => item.id === removeId);
            return {
                ...state,
                basket: [
                    ...state.basket.slice(0, removeIndex),
                    ...state.basket.slice(removeIndex + 1)
                ]
            };

        default:
            return state;
    }
};

export default reducer;