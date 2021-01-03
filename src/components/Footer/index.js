import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        {/* Footer Location*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Địa chỉ</h4>
                            <p className="lead mb-0">
                                Bãi Bằng - Phú Thọ
            <br />
            Việt Nam
          </p>
                        </div>
                        {/* Footer Social Icons*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Liên hệ chúng tôi</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f" /></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter" /></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in" /></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble" /></a>
                        </div>
                        {/* Footer About Text*/}
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">Về chính tôi</h4>
                            <p className="lead mb-0">
                                Tôi là người vui tính, thích vui chơi với mọi người.
            <a href="http://fb.com/sieunhanbay51"> Facebook ME</a>
            .
          </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Copyright Section*/}
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright © Your Website 2020</small></div>
            </div>
            {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
            <div className="scroll-to-top d-lg-none position-fixed">
                <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up" /></a>
            </div>
        </>
    )
}

export default Footer
