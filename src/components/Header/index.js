import React from 'react'

const Header = () => {
    return (
        <header className="masthead bg-primary text-white text-center p-0 pt-5">
            <div className="container d-flex align-items-center flex-column">
                {/* Masthead Avatar Image*/}
                <img className="masthead-avatar" src="https://i.pinimg.com/originals/95/e2/be/95e2beeff28cf0ca9a65acc6616c0bd6.png" alt="" />
                {/* Masthead Heading*/}
                <h1 className="masthead-heading text-uppercase mb-0">SHOP CHAMPIONS</h1>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i class="fas fa-gamepad"></i></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Masthead Subheading*/}
                {/* <p className="masthead-subheading font-weight-light mb-0">An toàn - Tiện lợi - Nhanh chóng</p> */}
            </div>
        </header>
    )
}

export default Header
