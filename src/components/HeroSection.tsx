import styles from "@/styles/HeroSection.module.scss";
import classNames from "classnames";
const HeroSection = () => {
    return (
        <section className="position-relative d-flex align-items-center min-vh-100 py-5 bg-dark overflow-hidden">
            <span className="position-absolute top-0 start-0 w-100 h-100 opacity-75"></span>

            <div className="container position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3">
                <div className="row gy-5">
                    {/* Cột nội dung */}
                    <div className="col-xl-5 col-lg-6 text-lg-start text-center">
                        <h1 className="display-2 mb-4 pb-lg-3 pb-md-2 text-light">
                            Giải pháp <span className="text-primary">IT</span> cho ý tưởng của bạn
                        </h1>
                        <p className="mb-4 pb-lg-3 pb-md-2 text-light">
                            Bạn có ý tưởng muốn phát triển? Vinhweb giúp bạn xây dựng ý tưởng của bạn với lập trình Web, App.
                        </p>
                        <a href="https://vinhweb.com/thiet-ke-website" className="btn btn-lg btn-primary">Làm Website</a>
                    </div>

                    {/* Cột hình ảnh */}
                    <div className="col-lg-6 offset-xl-1">
                        <div className="position-relative ms-xl-0 ms-lg-4">
                            <div className="">
                                <img src="https://vinhweb.com/assets/frontend/img/landing/software-agency-3/hero-bg.png" alt="Shape" className={classNames(styles.hero__image, "p-5")} />
                            </div>

                            <div className="position-relative row row-cols-sm-2 row-cols-1 gx-3">
                                {["Tôi cần tìm chuyên gia web", "Chúng tôi đang tìm kiếm giải pháp công nghệ", "Tôi cần bản MVP cho startup", "Tôi muốn phát triển web"].map(
                                    (text, index) => (
                                        <div key={index} className={`col ${index >= 2 ? 'mt-sm-5 mt-2 pt-sm-5 ' : ''}`}>
                                            <div className="d-flex align-items-center justify-content-center rounded-3 p-4 text-white text-center">
                                                {text}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;
