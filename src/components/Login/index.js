import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ dangNhap }) => {
    const [user, setUser] = useState({});
    const hamChange = (e) => {
        var { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const hamSubmit = (e) => {
        e.preventDefault();
        dangNhap(user);
    }
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Đăng nhập</h2>
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
                            <label htmlFor="user">User name: </label>
                            <input type="text" className="form-control" name='username' id="user" placeholder="Enter username" onChange={hamChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">Password</label>
                            <input type="password" className="form-control" name='pass' id="pass" placeholder="Password" onChange={hamChange} required />
                        </div>
                        <div className="form-group">
                            <Link to='/dang-ki'><label className="form-check-label">Đăng kí</label></Link>
                        </div>
                        <button type="submit" className="btn btn-primary">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
