import React, { PropTypes } from 'react';

const CartItem = ({
    _id,
    name,
    description,
    image,
    price
}) => (
    <div className="list-group-item list-group-item-action flex-row justify-content-between">
        <figure classname='d-flex'>
            <img height="100" src={image} alt={name} />
        </figure>

        <div className="d-flex flex-column w-75 justify-content-between">
            <h5 className="mb-1">{name}</h5>
            <p className="mb-1">{description}</p>
            <small>Cantidad: 1</small>
            <small>Precio: ${price}</small>
        </div>

        <small className="d-flex text-muted">
            <button className="btn btn-danger">
                &times;
            </button>
        </small>
    </div>
);

CartItem.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default CartItem;
