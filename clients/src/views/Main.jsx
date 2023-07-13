import React, { useState } from 'react'
import Productform from '../components/Productform'
import Productlist from '../components/Productlist'
// import axios from 'axios';


function Main() {
  const [product, setProduct ] = useState([]);

  return (
    <div>

      <Productform product={product} setProduct={setProduct} />
      <br />
      <Productlist product={product} setProduct={setProduct} />


    </div>
  )
}

export default Main