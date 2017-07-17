import React, {  Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import * as productActions from '../actions/productActions';


class ProductListContainer extends Component {

    constructor(props, context) {
        super(props, context);
    }

    async componentWillMount () {
        await this.props.productActions.fetchProducts();
    }

    render(){
        return(
            <ProductList
                loading={this.props.loading}
                products={this.props.products}
            />
        );
    }
}

ProductListContainer.defaultProps = {
    producst: []
}

ProductListContainer.PropTypes = {
    product: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired,
    productActions: PropTypes.objectOf(PropTypes.func).isRequired
};

/**
 * devuelves el estado de redux como props propios
 */
function mapStateToProps (state) {
    return {
        products: state.productList.products,
        loading: state.productList.loading
    }
}

/**
 * para disparar las accciones de redux como si fueran props
 */
function mapDispatchToProps (dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

/**
 * con connect tenemos acceso a todo el store de redux
 */
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
