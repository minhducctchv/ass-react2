import React from 'react'

const About = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* About Section Heading*/}
                {/* chinh sua github */}
                {/* chinh sua github */}
                {/* chinh sua github */}
                <h2 className="page-section-heading text-center text-uppercase text-white">5 điều Bác Hồ dạy thiếu nhi:</h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* About Section Content*/}
                <div className="row">

                    <div className="col-lg-7 m-auto"><p className="lead"><br></br>
1. Yêu Tổ quốc, yêu đồng bào.<br></br>
2. Học tập tốt, lao động tốt. <br></br>
3. Đoàn kết tốt, kỷ luật tốt. <br></br>
4. Giữ gìn vệ sinh thật tốt. <br></br>
5. Khiêm tốn, thật thà, dũng cảm.<br></br>
                        <i>(Lời dạy các cháu thiếu niên, nhi đồng - Chủ tịch Hồ Chí Minh)</i></p></div>
                </div>
                {/* About Section Button*/}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://map.leagueoflegends.com/vn_VN">
                        <i className="fas fa-download mr-2" />
          Khám phá ngay
        </a>
                </div>
            </div>
        </section>
    )
}

export default About
