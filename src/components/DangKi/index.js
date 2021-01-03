import React, { useState } from 'react'
import swal from 'sweetalert';

const DangKi = ({ dangKiUser }) => {
    const [user, setUser] = useState({});
    const hamChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const hamSubmit = (e) => {
        e.preventDefault();
        if (user.role === null || user.role === "3" || user.role === undefined) {
            swal("Vui lòng chọn vai trò.");
            return;
        }
        dangKiUser(user);
    }
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Đăng Kí</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    <form onSubmit={hamSubmit}>
                        <div className="form-group">
                            <label htmlFor="user">Username</label>
                            <input type="text" className="form-control" id="user" name="username" placeholder="Enter username" onChange={hamChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">Password</label>
                            <input type="password" className="form-control" name="pass" id="pass" placeholder="Password" onChange={hamChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={hamChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role:</label>
                            <select className="form-control" id="role" name="role" onChange={hamChange} defaultValue="3">
                                <option value="3" >Chưa chọn</option>
                                <option value="1" >Admin</option>
                                <option value="0" >Khách hàng</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Đăng kí</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default DangKi
