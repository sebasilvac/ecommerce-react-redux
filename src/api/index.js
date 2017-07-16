import fetch from 'isomorphic-fetch';

const baseUrl = 'https://ecommerce-api-a4661.herokuapp.com/api';

const API = {
    products : {
        /*
            function getAll () {
                fetch(`${baseUrl}/products`)
                    .then(response => response.json())
                    .then(data => data);
            }

            ahora se hará con la sintaxis de stage-2
            para poder usarlo
            hay que agregar 'async' delante de la función
            y usar 'await'
        */
        async getAll() {
            const response = await fetch(`${baseUrl}/products`);
            const data = await response.json();
            return data;
        },

        /**
         * fetch por defecto usa GET
         */
        async getSingle(id) {
            const response = await fetch(`${baseUrl}/products/${id}`);
            const data = await response.json();
            return data;
        },

        async save (item) {
            const response = await fetch(`${baseUrl}/products`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }),
                body: JSON.stringify(item)
            });

            const data = await response.json();
            return data;
        }
    }
}

export default API;
