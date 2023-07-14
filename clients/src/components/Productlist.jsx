import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

function Productlist(props) {
    const { product } = props;


    return (
        <div>
            <h1>Productlist</h1>
            <ul>
                {
                    product.map((product) => {
                        return  <li key={product._id}>
                                    <Link key={product._id} to={`/product/${product._id}`}>{product.Title}</Link>
                                </li>
                    })
                }
            </ul>

        </div>
    )
}

export default Productlist