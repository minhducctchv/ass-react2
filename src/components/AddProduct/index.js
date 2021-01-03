import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

const AddProduct = ({ addProduct }) => {

    const [product, setProduct] = useState({ name: '' });
    const [image1, setImage] = useState("");
    const [url, setUrl] = useState('/uploads/Home_page_f4d8f55876.jpg');
    const hamChange = (e) => {
        var { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
            image: url
        })
    }

    const hamSubmit = (e) => {
        ssProduct(url);
        e.preventDefault();
        if (product.category === null || product.category === undefined || product.category === '2') {
            swal("Vui lòng chọn vị trí cho tướng.");
            return;
        }
        addProduct(product);
    }

    const API_PRODUCT = "http://localhost:1337/upload/files";
    const imageChange = (e) => {
        setImage(e.target.files[0]);
        const image = e.target.files[0];
        if (image !== undefined) {
            fetch(`${API_PRODUCT}?name=${image.name}`)
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
                                    fetch(`${API_PRODUCT}?name=${image.name}`)
                                        .then(response => response.json())
                                        .then(data => {
                                            setUrl(data[0].url);
                                            ssProduct(data[0].url);
                                        })
                                }
                            );
                    }

                });
        } else {
            setUrl('/uploads/Home_page_f4d8f55876.jpg');
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
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Add Product</h2>
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
                            <input type="text" name="name" onChange={hamChange} placeholder="name" className="form-control" id="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" onChange={hamChange} placeholder="price" className="form-control" id="price" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="file" onChange={imageChange} className="form-control" id="image" />
                            {image1 && <ImageThumb image={image1} />}
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Role of champion:</label>
                            <select className="form-control" id="category" name="category" onChange={hamChange} defaultValue='2'>
                                <option value="2">Chưa chọn</option>
                                <option value="3">AD Carry</option>
                                <option value="4">Support</option>
                                <option value="5">Mid Lane</option>
                                <option value="6">Jungle</option>
                                <option value="7">Top Lane</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}



export default AddProduct
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} style={{ height: 180 }} />;
};