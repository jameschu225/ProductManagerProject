import React, { useState,useEffect } from 'react';
import Productform from '../components/Productform';
import Productlist from '../components/Productlist';
import axios from 'axios';


function Main() {
  const [product, setProduct ] = useState([]);

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api')
        .then((res) => {
            setProduct(res.data.AllProducts);
            console.log(res.data.AllProducts)
        })
        .catch((err) => { console.log(err); })

}, [])


  return (
    <div>

      <Productform product={product} setProduct={setProduct} />
      <hr />
      <Productlist product={product} setProduct={setProduct} />


    </div>
  )
}

export default Main