import gazp from "../images/Gazprom-Logo-rus.svg";
import rosn from "../images/Rosneft_Logo.svg";
import lkoh from "../images/LUK_OIL_Logo_kyr.svg";
import tatn from "../images/Tatneft-Logo.svg";
import rnft from "../images/ruusneft.svg";

const initialState = {
    shareArr: null,
    chart: null,
    loading: true,
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    menu: {
        gazp: {
            name: "Газпром",
            id: "GAZP",
            amount: 0,
            url: gazp,
        },
        rosn: {
            name: "Роснефть",
            id: "ROSN",
            amount: 0,
            url: rosn,
        },
        lkoh: {
            name: "ЛУКОЙЛ",
            id: "LKOH",
            amount: 0,
            url: lkoh,
        },
        tatn: {
            name: "Татнефть",
            id: "TATN",
            amount: 0,
            url: tatn,
        },
        rnft: {
            name: "РуссНефть",
            id: "RNFT",
            amount: 0,
            url: rnft,
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

        case "ITEM_ADD_IN_BASKET":
            const addId = action.payload;
            const addIndex = state.basket.findIndex(item => item.id === addId);
            return {
                ...state,
                basket: [
                    ...state.basket.slice(0, addIndex),
                    {...state.basket[addIndex], amount: state.basket[addIndex].amount + 1},
                    ...state.basket.slice(addIndex + 1)
                ]
            };

        case "ITEM_REMOVE_IN_BASKET":
            const removeIdFromBasket = action.payload;
            const removeIndexFromBasket = state.basket.findIndex(item => item.id === removeIdFromBasket);
            if (state.basket[removeIndexFromBasket].amount === 1) {
                return {
                    ...state,
                    basket: [
                        ...state.basket.slice(0, removeIndexFromBasket),
                        ...state.basket.slice(removeIndexFromBasket + 1)
                    ]
                };
            } else {
                return {
                    ...state,
                    basket: [
                        ...state.basket.slice(0, removeIndexFromBasket),
                        {
                            ...state.basket[removeIndexFromBasket],
                            amount: state.basket[removeIndexFromBasket].amount - 1
                        },
                        ...state.basket.slice(removeIndexFromBasket + 1)
                    ]
                };
            }

        default:
            return state;
    }
};

export default reducer;