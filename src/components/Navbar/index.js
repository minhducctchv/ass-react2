import React from 'react'
import { Link } from 'react-router-dom'
import DangNhap from '../DangNhap'
import DangXuat from '../DangXuat'

const Navbar = ({ user, hamDangXuat, items }) => {
    const onDangXuat = () => {
        console.log(1);
        hamDangXuat();
    }
    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav" style={{ height: 60 }}>
            <div className="container">
                <a href="http://localhost:3000/" className="navbar-brand js-scroll-trigger">
                    <img src="https://img.pngio.com/league-of-legends-needs-a-new-game-icon-league-of-legends-icon-png-256_256.png" alt="icon" height="50" />
                </a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
        <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/"><i class="fas fa-home"></i> Champions</Link></li>
                        {user.role !== undefined && user.role === "1" ? <li className="nav-item dropdown">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-users-cog"></i>Chức năng Admin</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/list-products"><i class="fas fa-list-ul"></i> List champions</Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="/add-product"><i class="fas fa-plus-square"></i> Add champions</Link>
                            </div>
                        </li> : ""}


                        {user.role !== undefined ? <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/cart"><i class="fas fa-cart-plus"></i> Cart ({items.length})</Link></li> : ""}
                        {user.role !== undefined ? <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/pay-history"><i class="fas fa-history"></i> Lịch sử mua hàng</Link></li> : ""}
                        <li className="nav-item dropdown">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="far fa-list-alt"></i>Danh sách</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/tin-tuc"><i class="far fa-newspaper"></i>Tin tức</Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="/lien-he"><i class="far fa-id-card"></i>Liên hệ</Link>
                            </div>
                        </li>
                        {user.username !== undefined && user.username.length > 0 ? <DangXuat user={user} dangXuat={onDangXuat} /> : <DangNhap />}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
