import React, { PropTypes } from 'react';
import CartItem from './CartItem';
import uuid from 'uuid';

const CartItemList = ({
    items,
    onRemoveItem
}) => (
    <div className="list-group">
        {
            items.map(item => (
                <CartItem
                    key={uuid.v4()}
                    onRemoveItem={onRemoveItem}
                    {...item}
                />
            )).reverse()
        }
    </div>
);

CartItemList.defaultProps = {
    items : []
};

CartItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onRemoveItem: PropTypes.func.isRequired
};

export default CartItemList;
