import React from 'react'
import swal from 'sweetalert';

const LienHe = () => {
    const hamSubmit = (e) => {
        e.preventDefault();
        document.getElementById("contactForm").reset();
        swal("Đã gửi ý kiến, cảm ơn bạn đã góp ý", { icon: "success" });
    }
    return (
        <section className="page-section" id="contact">
            <div className="container">
                {/* Contact Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Contact Section Form*/}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                        <form id="contactForm" name="sentMessage" onSubmit={hamSubmit}>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Họ và tên</label>
                                    <input className="form-control" id="name" type="text" placeholder="Họ và tên" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email</label>
                                    <input className="form-control" id="email" type="email" placeholder="Địa chỉ Email" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Số điện thoại</label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Số điện thoại" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Ý kiến đóng góp</label>
                                    <textarea className="form-control" id="message" rows={5} placeholder="Ý kiến đóng góp" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <br />
                            <div id="success" />
                            <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LienHe
