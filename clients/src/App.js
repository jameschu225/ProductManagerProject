import Main from './views/Main';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
// import axios from 'axios';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/product' element={<Main/>}/>
            <Route path='/product/:productId' element={<ProductDetail/>}/>

        </Routes>
      </BrowserRouter>
      <main />

    </div>
  );
}

export default App;
