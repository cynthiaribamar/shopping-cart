const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "products/save":
            return {
                ...state,
                products: [...state?.products, ...action?.payload]
            }

        default:
            return state
    }
}