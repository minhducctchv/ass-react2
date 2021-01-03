import React from 'react'

const HistoryPay = ({ pay }) => {
    const tinhTong = (mang) => {
        var tong = 0;
        for (var x of mang) {
            tong = tong + x.product.price * x.quantity
        }
        return tong;
    }
    const chiTiet = (mang) => {
        var newArray = mang.map((item, index) => (
            <tr key={index}>
                <td>Sản phẩm: {item.product.name}</td>
                <td>đơn giá: {item.product.price}</td>
                <td>số lượng: {item.quantity}</td>
            </tr>
        ))
        return newArray;
    }
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Lịch sử giao dịch</h2>
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
                                <th scope="col">STT</th>
                                <th scope="col">Chi tiết</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Thời gian mua</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pay.map((item, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>
                                        <table>
                                            <thead></thead>
                                            <tbody>{chiTiet(item.items)}</tbody>
                                        </table>
                                    </td>
                                    <td>{tinhTong(item.items)}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default HistoryPay
