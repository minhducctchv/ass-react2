import React, { useState } from 'react'

const Modal = ({ product, muaHang }) => {
    const [item, setItem] = useState({ quantity: "1" });
    const hamChange = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value
        })
    }
    const getId = (bien) => {
        setItem({
            ...item,
            product: bien
        })
    }
    const hamSubmit = (e) => {
        e.preventDefault();
        muaHang(item);
    }
    return (
        <div className="portfolio-modal modal fade" id={"portfolioModal" + product.id} tabIndex={-1} role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times" /></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{product.name}</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line" />
                                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                        <div className="divider-custom-line" />
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className="img-fluid rounded mb-2" src={"http://localhost:1337" + product.image} alt={product.name} style={{ height: 200, width: 400 }} />
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-2 text-danger h3 m-3"><i class="fas fa-dollar-sign"></i> Price: {product.price}</p>
                                    <form onSubmit={hamSubmit}>
                                        <input type="hidden" name="id" value={product.id} />
                                        <label>Số lượng: </label>
                                        <input type='number' defaultValue='1' min='1' name='quantity' onChange={hamChange} className="ml-3 mb-3" />
                                        <label className=".text-danger h4 ml-5"><i class="fas fa-money-check-alt"></i> Tổng tiền: {item.quantity * product.price}</label>
                                        <br></br>
                                        <button className="btn btn-danger m-2" onClick={() => getId(product)}><i class="fas fa-shopping-basket"></i> Mua</button>
                                        <button className="btn btn-primary" type='button' data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                  Close Window
                </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
