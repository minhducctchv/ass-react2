import React from 'react'

const DangXuat = ({ user, dangXuat }) => {
    return (
        <li className="nav-item mx-0 mx-lg-1">
            <button className="btn btn-danger m-2" onClick={dangXuat}>Hi, <b>{user.username}</b>  <i class="fas fa-sign-out-alt"></i> Đăng xuất</button>
        </li>
    )
}

export default DangXuat
