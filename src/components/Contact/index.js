import React, { useState } from 'react'

const Contact = ({ listSearch, hamSort, hamRole, hamMaxPrice }) => {
    const hamChange = (e) => {
        const search = e.target.value;
        listSearch(search);
    }

    const [status, setStatus] = useState({
        sapXep: "d-block ",
        timKiem: "d-none ",
        nhoHon: "d-none ",
        viTri: "d-none "
    });


    const hamRoleChange = (e) => {
        const role = e.target.value;
        hamRole(role);
    }

    const [maxPrice, setMaxPrice] = useState('');
    const changeMaxPrice = (e) => {
        setMaxPrice(e.target.value);
        setMaxPrice(maxPrice => maxPrice);
        hamMaxPrice(maxPrice);
    }

    const hamChon = (bien) => {
        if (bien === 1) {
            setStatus({
                sapXep: "d-block ",
                timKiem: "d-none ",
                nhoHon: "d-none ",
                viTri: "d-none "
            })
        }
        if (bien === 2) {
            setStatus({
                sapXep: "d-none ",
                timKiem: "d-block ",
                nhoHon: "d-none ",
                viTri: "d-none "
            })
        }
        if (bien === 3) {
            setStatus({
                sapXep: "d-none ",
                timKiem: "d-none ",
                nhoHon: "d-block ",
                viTri: "d-none "
            })
        }
        if (bien === 4) {
            setStatus({
                sapXep: "d-none ",
                timKiem: "d-none ",
                nhoHon: "d-none ",
                viTri: "d-block "
            })
        }
    }

    return (
        <section className="d-block page-section p-0 pt-5" id="contact">
            <div className="container p-0">
                {/* Contact Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">BỘ LỌC</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Contact Section Form*/}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="form-group">
                            <label htmlFor="chon">Sắp xếp theo: </label><br></br>
                            <button type="button" className="btn btn-primary m-1" onClick={() => hamChon(1)} id="chon"><i class="fas fa-sort"></i> Sắp xếp</button>
                            <button type="button" className="btn btn-primary m-1" onClick={() => hamChon(2)}><i class="fas fa-search"></i> Tìm kiếm</button>
                            <button type="button" className="btn btn-primary m-1" onClick={() => hamChon(3)}><i class="fas fa-arrow-alt-circle-down"></i> Giá nhỏ hơn</button>
                            <button type="button" className="btn btn-primary m-1" onClick={() => hamChon(4)}><i class="fas fa-user-tag"></i> Chọn vị trí</button>
                        </div>
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                        <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                        </div>
                        {/* Icon Divider*/}
                        <div className={status.sapXep + "form-group"}>
                            <label htmlFor="tim">Sắp xếp theo: </label><br></br>
                            <button type="button" className="btn btn-primary m-1" onClick={() => hamSort(1)} id="tim">Xếp theo A-Z</button>
                            <button type="button" className="btn btn-success m-1" onClick={() => hamSort(2)}>Xếp theo Z-A</button>
                            <button type="button" className="btn btn-danger m-1" onClick={() => hamSort(3)}>Xếp theo giá tăng dần</button>
                            <button type="button" className="btn btn-warning m-1" onClick={() => hamSort(4)}>Xếp theo giá giảm dần</button>
                        </div>
                        <div className={status.timKiem + "form-group"}>
                            <label htmlFor="search">Tìm kiếm: </label>
                            <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search" aria-label="Search" onChange={hamChange} />
                        </div>
                        <div className={status.nhoHon + "form-group"}>
                            <label htmlFor="vol">Giá nhỏ hơn: </label><br></br>
                            <input type="range" name="maxPrice" className='ml-3' id="vol" min='0' max='7800' onChange={changeMaxPrice} />
                            <label className='ml-3 h3 text-success'><i class="fas fa-less-than-equal"></i> {maxPrice}</label>
                        </div>
                        <div className={status.viTri + "form-group"}>
                            <label htmlFor="role">Vị trí: </label>
                            <select className="form-control" name="category" id="role" onChange={hamRoleChange}>
                                <option value='3'>AD Carry</option>
                                <option value='4'>Support</option>
                                <option value='5'>MID Lane</option>
                                <option value='6'>Jungle</option>
                                <option value='7'>TOP Lane</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
