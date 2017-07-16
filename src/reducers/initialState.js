const initialState = {
    // vista raiz
    productList: {
        products: [],
        error: null,
        loading: false
    },
    // vista detalle
    activeProduct: {
        product: null,
        error: null,
        loading: false
    },
    cart: {
        items: [],
        total: 0
    }
};

export default initialState;
