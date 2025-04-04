"use client";

export default function HomeServicesSection() {
	return (
		<section
			id="home-services-section"
			style={{ background: "#f9fcff" }}
			className="my-5"
		>
			<div className="container py-3">
				<div className="mx-auto mb-4 mb-lg-5 text-center">
					<h2 className="h2 text-uppercase pt-1 pt-xl-2 my-3 fw-bold">
						Dịch Vụ thiết kế website
					</h2>
					<div style={{ maxWidth: "750px" }} className="mx-auto fs-lg">
						<p>
							Với những giải pháp công nghệ tốt nhất Webhalong cung cấp tất cả
							dịch vụ thiết kế website cần thiết để hỗ trợ xây dựng website -
							thương hiệu online và đột phá doanh thu.
						</p>
					</div>
				</div>

				<div className="row">
					{services.map((service) => (
						<div key={service.id} className="col-12 col-md-4">
							<a
								href={service.link}
								target="_blank"
								rel="noopener noreferrer"
								className="home-service"
							>
								<span className="top">
									<img
										alt={service.alt}
										src={service.image}
										loading="lazy"
									/>
								</span>
								<h3 className="mt-3 mb-2 fs-6 fw-bold">{service.title}</h3>
								<p>{service.description}</p>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const services = [
	{
		id: 1,
		title: "Thiết kế website bán hàng",
		description:
			"Trải nghiệm sự khác biệt với công nghệ Thiết kế website bán hàng chuẩn SEO Google của Webhalong.",
		image: "/images/website-ban-hang.png",
		link: "",
		alt: "thiết kế website bán hàng",
	},
	{
		id: 2,
		title: "Thiết kế website doanh nghiệp",
		description:
			"Hãy sử dụng dịch vụ Thiết kế web doanh nghiệp chuẩn SEO của Webhalong để đưa thương hiệu công ty bạn lên Internet ngay hôm nay.",
		image: "/images/website-doanh-nghiep.png",
		link: "",
		alt: "thiết kế website doanh nghiệp",
	},
	{
		id: 3,
		title: "Thiết kế website theo yêu cầu",
		description:
			"Thiết kế web theo nhu cầu giao diện và tính năng riêng. Web code tay như web đặt tour, web ứng dụng…",
		image: "/images/website-theo-yeu-cau.png",
		link: "",
		alt: "thiết kế website theo yêu cầu",
	},
];
