import React, {useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Productlist(props) {
    const { product, setProduct } = props;

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api')
            .then ((res) => {setProduct(res.data.AllProducts);
                console.log(res.data.AllProducts)
            })
            .catch ((err) => { console.log(err); })

    },[setProduct])



    return (
        <div>
            <h1>Productlist</h1>
            <ul>
                {
                    product.map((product) =>
                    
                    <li>
                        <Link key={product._id} to={`/product/${product._id}`}>{product.Title}</Link> 
                    </li>
                        )
                }
            </ul>

        </div>
    )
}

export default Productlist