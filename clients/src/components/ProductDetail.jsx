import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


function ProductDetail() {
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {

    axios.get(`http://127.0.0.1:8000/api/${productId}`)
        .then((res) => {
            console.log(res.data.Product);
            setProductDetail(res.data.Product);
        })
        .catch(err => {console.log(err)})
},[])

    return (
        <div>
            <div>ProductDetail</div>

            <div>Title: {productDetail.Title}</div>
            <div>Price: {productDetail.Price}</div>
            <div>Description: {productDetail.Description}</div>
            <Link to={'/product'}>Home</Link>
        </div>
    )
}

export default ProductDetail