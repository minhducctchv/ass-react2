import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = ({ editProduct }) => {
    const [product, setProduct] = useState({ category: { id: 5 } });
    let { id } = useParams();
    const API_PRODUCT = "http://localhost:1337/products";
    useEffect(() => {
        fetch(`${API_PRODUCT}/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .then(console.log(product));
    }, [])

    const [url, setUrl] = useState(product.image);

    const hamChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
            image: url
        })
    }

    const hamSubmit = (e) => {
        e.preventDefault();
        ssProduct(url);
        editProduct(product);
    }

    const API_UPLOAD = "http://localhost:1337/upload/files";
    const imageChange = (e) => {
        const image = e.target.files[0];
        if (image !== undefined) {
            fetch(`${API_UPLOAD}?name=${image.name}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        setUrl(data[0].url);
                        ssProduct(data[0].url);
                    } else {
                        const formData = new FormData();
                        formData.append('files', image);
                        axios
                            .post(`http://localhost:1337/upload`, formData, {
                                headers: { 'Content-Type': 'multipart/form-data' },
                            })
                            .then(res => {
                                console.log(res);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                            .then(
                                () => {
                                    fetch(`${API_UPLOAD}?name=${image.name}`)
                                        .then(response => response.json())
                                        .then(data => {
                                            setUrl(data[0].url);
                                            ssProduct(data[0].url);
                                        });
                                }
                            );
                    }

                });
        } else {
            setUrl(product.image);
        }
        ssProduct(url);
    }

    const ssProduct = (bien) => {
        setProduct({
            ...product,
            image: bien
        })
    }

    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Edit: {product.name}</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    <form action="" onSubmit={hamSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" onChange={hamChange} defaultValue={product.name} className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" onChange={hamChange} defaultValue={product.price} className="form-control" id="price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="file" onChange={imageChange} className="form-control" id="image" />
                            <img src={"http://localhost:1337" + product.image} alt={product.name} style={{ height: 180 }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Role of champion:</label>
                            <select className="form-control" id="category" name="category" onChange={hamChange} value={product.category.id}>
                                <option value="3" >AD Carry</option>
                                <option value="4" >Support</option>
                                <option value="5" >Mid Lane</option>
                                <option value="6" >Jungle</option>
                                <option value="7" >Top Lane</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EditProduct
