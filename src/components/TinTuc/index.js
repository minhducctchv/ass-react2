import React from 'react'

const TinTuc = () => {
    const news = [
        {
            title: "Tham gia Leo Tháp - Leo tháp càng cao, Đổi quà càng đã từ 13/11 đến 19/11",
            content: "Leo Tháp và nhận ngay những phần quà cực kỳ giá trị bạn nhé!...",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/11_2020/01-LeoThap-800x450.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/tham-gia-shop-dong-gia-dango-mua-dong-gia-tang-dong-qua-tu-08-12-den-10-12"
        },
        {
            title: "Tham gia Đập Trứng Bí Ẩn - Sở hữu sớm Linh Thú K/DA từ 13/11 đến 19/11",
            content: "Đập trứng để đem ngay những Linh Thú K/DA ALL OUT, POPSTARS về sớm nhé!...",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/11_2020/01-KDA-800x450.png",
            link: "https://lienminh.garena.vn/khuyen-mai-game/tham-gia-nong-trai-pengu-nang-cap-sieu-ten-lua-va-nhan-qua-gia-tri-hon-1400-rp-tu-08-12-den-17-12"
        },
        {
            title: "Quy đổi RP - Nhận ngay 40% giá trị từ 00:30 13/11 đến 23:59 19/11",
            content: "Nhanh lên nào các bạn ơi, sở hữu ngay những nội dung mới của bản cập nhật này nhé!...",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/11_2020/Banner-HTT-800x450.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/tham-gia-nong-trai-pengu-nang-cap-sieu-ten-lua-va-nhan-qua-gia-tri-hon-1400-rp-tu-08-12-den-17-12"
        },
        {
            title: "Giảm giá Thẻ Đổi Tên - Thay tên Tiền Mùa Giải chỉ với 99 RP từ 13/11 đến hết 19/11",
            content: "Khám phá lối chơi mới và tìm cho mình 1 cái tên phù hợp nhất chuẩn bị cho mùa giải 2021 nào!...",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/11_2020/GiamGiaDoiTen-800x450.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/tham-gia-nong-trai-pengu-nang-cap-sieu-ten-lua-va-nhan-qua-gia-tri-hon-1400-rp-tu-08-12-den-17-12"
        },
        {
            title: "Chi tiết phiên bản cập nhật 10.23",
            content: "Chẳng phải thần thoại, Tiền Mùa Giải đã tới và đem đến rất nhiều thay đổi huyền thoại......",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/11_2020/Patch_10_23_Notes_Header_v2.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/tham-gia-truy-lung-beemo-loan-the-than-binh-tai-xuat-giang-ho-tu-04-12-den-10-12"
        },
        {
            title: "Tiêu Điểm Tiền Mùa Giải 2021",
            content: "Chào mừng các bạn đến với Cửa Hàng Thần Thoại!...",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/11_2020/preseason2021%20thumb.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/tham-gia-truy-lung-beemo-loan-the-than-binh-tai-xuat-giang-ho-tu-04-12-den-10-12"
        },
        {
            title: "Tham gia Shop Đồng Giá Dango - Mua đồng giá, Tặng đống quà từ 08/12 đến 10/12",
            content: "Mua đồng giá, tặng đống quà... lại còn được tự chọn nữa!",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/Banner-Dango-800x450.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/tham-gia-truy-lung-beemo-loan-the-than-binh-tai-xuat-giang-ho-tu-04-12-den-10-12"
        },
        {
            title: "Tham gia Nông Trại Pengu - Nâng cấp Siêu Tên Lửa và nhận quà giá trị hơn 1400 RP từ 08/12 đến 17/12",
            content: "Chơi và nhận quà lên tới hơn 1400 RP nhé bạn!",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/TFT-Pass-800x450.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/quy-doi-rp-nhan-ngay-bau-vat-tinh-tu-cuc-ky-gia-tri-tu-00-30-04-12-den-23-59-10-12"
        },
        {
            title: "Tham gia Truy Lùng Beemo - Loạn Thế Thần Binh tái xuất giang hồ từ 04/12 đến 10/12",
            content: "Nhanh tay truy lùng và chọn quà nào các bạn.",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/01-Banner-ChooseGacha-800x450.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/quy-doi-rp-nhan-ngay-bau-vat-tinh-tu-cuc-ky-gia-tri-tu-00-30-04-12-den-23-59-10-12"
        },
        {
            title: "Quy đổi RP - Nhận ngay Báu Vật Tinh Tú cực kỳ giá trị từ 00:30 04/12 đến 23:59 10/12",
            content: "Hộp Tinh Tú mở ra rất nhiều mảnh trang phục của các nhóm trang phục hấp dẫn.",
            image: "https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/01-TopUp-800x450.jpg",
            link: "https://lienminh.garena.vn/khuyen-mai-game/quy-doi-rp-nhan-ngay-bau-vat-tinh-tu-cuc-ky-gia-tri-tu-00-30-04-12-den-23-59-10-12"
        }
    ]
    return (
        <section className="page-section" id="contact">
            <div className="container">
                {/* Contact Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Tin tức</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Contact Section Form*/}
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                        {news.map((tin, index) => (
                            <div className="card mb-3" key={index}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={tin.image} alt={tin.image} style={{ width: 350, height: 200 }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <a href={tin.link}><h5 className="card-title">{tin.title}</h5></a>
                                            <p className="card-text">{tin.content}</p>
                                            <p className="card-text"><small className="text-muted">Last updated {index} mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TinTuc
