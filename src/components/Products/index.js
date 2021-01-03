import React from 'react'
import Modal from '../Modal'

const Products = ({ products, muaItem, hamHide, hide }) => {
    const onMuaHang = (item) => {
        muaItem(item);
    }
    return (
        <section className="page-section portfolio pt-5" id="portfolio">
            <div className="container pl-0">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Champions</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <button type="button" className={hide.status === 1 ? "btn btn-danger" : "btn btn-success"} onClick={() => hamHide()}>{hide.status === 1 ? "Ẩn bộ lọc" : "Hiện bộ lọc"}</button>
                    <div className="divider-custom-line" />
                </div>
                {/* Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    {/* Portfolio Item 1*/}
                    {products.map((product, index) => (
                        <div className="col-md-6 col-lg-4 mb-5" key={index}>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target={"#portfolioModal" + product.id}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                </div>
                                <img className="img-fluid" src={"http://localhost:1337" + product.image} alt={product.name} />
                            </div>
                            <Modal product={product} muaHang={onMuaHang} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
