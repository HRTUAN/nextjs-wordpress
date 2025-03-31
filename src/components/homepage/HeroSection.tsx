import styles from "@/styles/HeroSection.module.scss";
import classNames from "classnames";
import Link from "next/link";
const HeroSection = () => {
    return (
        <section className={classNames(styles.bg_dark, "position-relative d-flex align-items-center min-vh-100 overflow-hidden")}>
            <div className="container position-relative mt-md-5 mb-lg-5 mb-md-4 mb-3 pt-md-3 pb-xl-3">
                <div className="row gy-5">
                    <div className="col-xl-5 col-lg-6 text-lg-start text-center">
                        <h1 className="display-2 mb-4 pb-lg-3 pb-md-2 text-light fw-bold">
                            Giải pháp <span className="text-primary">IT</span> cho ý tưởng của bạn
                        </h1>
                        <p className="mb-4 pb-lg-3 pb-md-2 text-light">
                            Bạn có ý tưởng muốn phát triển? Webhalong giúp bạn xây dựng ý tưởng của bạn với lập trình Web, App.
                        </p>
                        <Link href="/thiet-ke-website" className="btn btn-lg btn-primary">Làm Website</Link>
                    </div>

                    <div className="col-lg-6 offset-xl-1" style={{ height: "50vh" }}>
                        <div className="position-relative h-100 ms-xl-0 ms-lg-4">
                            <div className="row gx-3 fw-bold fs-5 backdrop-blur position-absolute z-2">
                                <div className="col">
                                    <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                                        <div className={classNames(styles.bg_secondary, "d-flex align-items-center justify-content-center rounded-3 p-4 text-white text-center")} style={{ minHeight: "176px", backdropFilter: "blur(6px)" }}>
                                            <span className={classNames(styles.fade_1)}>Tôi cần tìm chuyên gia web</span>
                                        </div>
                                        <div className={classNames(styles.bg_secondary, "d-flex align-items-center justify-content-center rounded-3 p-4 text-white text-center")} style={{ minHeight: "176px", backdropFilter: "blur(6px)" }}>
                                            <span className={classNames(styles.fade_3)}>Chúng tôi đang tìm kiếm giải pháp công nghệ</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col mt-sm-5 mt-2 pt-sm-5">
                                    <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                                        <div className={classNames(styles.bg_secondary, "d-flex align-items-center justify-content-center rounded-3 p-4 text-white text-center")} style={{ minHeight: "176px", backdropFilter: "blur(6px)" }}>
                                            <span className={classNames(styles.fade_2)}>Tôi cần bản MVP cho startup</span>
                                        </div>
                                        <div className={classNames(styles.bg_secondary, "d-flex align-items-center justify-content-center rounded-3 p-4 text-white text-center")} style={{ minHeight: "176px", backdropFilter: "blur(6px)" }}>
                                            <span className={classNames(styles.fade_4)}>Tôi muốn phát triển web</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="position-absolute w-100 top-50 t z-1">
                                <img src="/images/hero-bg.png" alt="Shape" className={classNames(styles.hero__image, "p-5")} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;
