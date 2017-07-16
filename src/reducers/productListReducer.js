import {
    FETCH_PRODUCTS_INIT,
    SAVE_PRODUCT_INIT,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SAVE_PRODUCT_SUCCESS,
    SAVE_PRODUCT_FAILURE
} from '../actions/types';

import initialState from './initialState';

export default function productListReducer(state = initialState.productList, action) {

    switch (action.type) {

        /**
         *    ...state -> hace una copia del state
         *   loading: true -> modifica la copia
         *
         * feature gracias a stage-2
         */

        case FETCH_PRODUCTS_INIT:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                error: action.payload,
                loading: false
            }

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                error: null,
                loading: false
            }

        case SAVE_PRODUCT_INIT:
            return {
                ...state,
                loading: true,
                error:null
            }

        case SAVE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case SAVE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload],
                error: null,
                loading: false
            }

        default:
            return state;
    }
}
