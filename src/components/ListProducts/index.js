import React from 'react'
import { Link } from "react-router-dom";


const ListProducts = ({ products, deleteProduct, hide, hamHide }) => {

    return (
        <section className="page-section portfolio pt-5" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">List Champions</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <button type="button" className={hide.status === 1 ? "btn btn-danger" : "btn btn-success"} onClick={() => hamHide()}>{hide.status === 1 ? "Ẩn bộ lọc" : "Hiện bộ lọc"}</button>
                    <div className="divider-custom-line" />
                </div>
                {/* Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Role</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category.name}</td>
                                    <td><img src={"http://localhost:1337" + product.image} alt={product.name} height="50px" width="80px" /></td>
                                    <td>{product.price}</td>
                                    <td><Link to={`/edit-product/${product.id}`}><button className="btn btn-success"><i class="fas fa-edit"></i> Edit</button></Link></td>
                                    <td><button className="btn btn-danger" onClick={() => deleteProduct(product.id)}><i class="fas fa-trash-alt"></i> Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>


    )
}

export default ListProducts
