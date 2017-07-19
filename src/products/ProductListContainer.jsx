import React, {  Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import * as productActions from '../actions/productActions';
import * as cartActions from '../actions/cartActions';

class ProductListContainer extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleOnAddItem = this.handleOnAddItem.bind(this);
    }

    async componentWillMount () {
        await this.props.productActions.fetchProducts();
    }

    handleOnAddItem (item) {
        this.props.cartActions.addCartItem(item);
    }

    render(){
        return(
            <ProductList
                loading={this.props.loading}
                products={this.props.products}
                onAddItem={this.handleOnAddItem}
            />
        );
    }
}

ProductListContainer.defaultProps = {
    products: []
}

ProductListContainer.PropTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired,
    productActions: PropTypes.objectOf(PropTypes.func).isRequired,
    cartActions: PropTypes.objectOf(PropTypes.func).isRequired
};

/**
 * devuelves el estado de redux como props propios
 */
function mapStateToProps (state) {
    return {
        products: state.productList.products,
        loading: state.productList.loading
    };
}

/**
 * para disparar las accciones de redux como si fueran props
 */
function mapDispatchToProps (dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    };
}

/**
 * con connect tenemos acceso a todo el store de redux
 */
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
