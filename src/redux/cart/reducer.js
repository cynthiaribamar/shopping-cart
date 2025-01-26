let cart = [];

const initialState = {
    cart: cart,
    total: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "cart/add":
            if (state.cart.findIndex(item => item.id === action.payload.id) == -1) {

                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                    total: state.total + action.payload.price
                }

            } else {
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1
                            }
                        }
                        return item
                    }),

                    total: state.total + action.payload.price
                }
            }
        default:
            return state
    }
}

const product = {
    id: "",
    price: 0
}