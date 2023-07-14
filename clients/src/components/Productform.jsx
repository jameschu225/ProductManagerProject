import React, { useState } from 'react';
import axios from 'axios';

function Productform(props) {
    const { product, setProduct } = props;
    const [title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        

        const newProduct = {
            Title: title,
            Price: price,
            Description: description
        };
        axios.post('http://127.0.0.1:8000/api/create', newProduct)
            .then((res) => {
                console.log(res.data);
                setProduct([...product, res.data.NewPorduct]);
                setTitle("");
                setPrice("");
                setDescription("")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                <label htmlFor="price">Price</label>
                <input type="text" id='price' value={price} onChange={(e) => setPrice(e.target.value)}/><br />
                <label htmlFor="description">Description</label>
                <input type="text" id='description' value={description} onChange={(e) => setDescription(e.target.value)} /><br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Productform