const initialState = {
    products: [],
    categories: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "products/save":
            return {
                ...state,
                products: [...action?.payload]
            }

        case "categories/save":
            return {
                ...state,
                categories: [...action?.payload]
            }

        case "products/filter":
            return {
                ...state,
                products: state.products.map((item) => {

                    if (action.payload !== "") {
                        item.category !== action.payload ? item["hidden"] = true : item["hidden"] = false
                    } else {
                        item["hidden"] = false;
                    }

                    return item
                })
            }

        default:
            return state
    }
}