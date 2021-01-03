import React from 'react'

const Cart = ({ items, deleteItem, changeQuantity, thanhToan }) => {
    const hamChange = (e) => {
        var newItem = {
            id: e.target.name,
            quantity: e.target.value
        }
        changeQuantity(newItem);
    }
    const tinhTong = (mang) => {
        var tong = 0;
        for (var x of mang) {
            tong = tong + x.product.price * x.quantity
        }
        return tong;
    }
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Giỏ hàng</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.product.name}</td>
                                    <td>{item.product.price}</td>
                                    <td><input type='number' defaultValue={item.quantity} min='1'
                                        onChange={hamChange} name={item.product.id} /></td>
                                    <td>{item.quantity * item.product.price}</td>
                                    <td><button className='btn btn-danger' onClick={() => deleteItem(item)}><i class="far fa-trash-alt"></i> Xóa</button></td>
                                </tr>
                            ))}
                            <tr>
                                <th colSpan={3}>Tổng tiền:</th>
                                <th colSpan={2} className="h4 text-danger"><i class="fas fa-coins"></i> {tinhTong(items)}</th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick={thanhToan}><i class="fab fa-amazon-pay"></i> Thanh toán</button>
                </div>
            </div>
        </section>
    )
}

export default Cart
