interface StepProps {
    number: number;
    title: string;
    description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
    <div className="step">
        <div className="step-number">
            <div className="step-number-inner">{number}</div>
        </div>
        <div className="step-body">
            <h3 className="h4 mb-3 fw-bold">{title}</h3>
            <p className="mb-0">{description}</p>
        </div>
    </div>
);

const stepsData: StepProps[] = [
    {
        number: 1,
        title: "Phân tích, lập kế hoạch",
        description: "Trao đổi để hiểu rõ hơn về mong muốn và kỳ vọng. Lập kế hoạch dự án, xác định rõ ràng các bước, thời gian và nguồn lực cần thiết."
    },
    {
        number: 2,
        title: "Thiết kế và Phát triển",
        description: "Thiết kế kiến trúc hệ thống, giao diện người dùng và các tính năng chính. Sử dụng các kỹ thuật phát triển như Agile hoặc Scrum."
    },
    {
        number: 3,
        title: "Kiểm tra, đảm bảo",
        description: "Sau khi phần mềm hoàn thành, chúng tôi thực hiện kiểm tra để phát hiện và sửa lỗi."
    },
    {
        number: 4,
        title: "Triển khai và hỗ trợ",
        description: "Triển khai lên môi trường thực tế. Đảm bảo rằng hệ thống hoạt động ổn định. Hỗ trợ liên tục để giải quyết bất kỳ vấn đề hoặc cải tiến."
    }
];

const WorkProcess: React.FC = () => (
    <section className="container my-5 py-3">
        <div className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto" style={{ maxWidth: 530 }}>
            <h2 className="h2 pt-1 pt-xl-2 my-4 text-uppercase fw-bold">Quy trình Làm Việc?</h2>
            <p className="mb-0">
                Quy trình làm việc của WebHalong bao gồm 4 bước. Đảm bảo nắm bắt được yêu cầu, ý tưởng của khách hàng. Đưa ra sản phẩm thiết thực nhất.
            </p>
        </div>

        <div className="steps steps-sm steps-horizontal-md steps-center">
            {stepsData.map((step) => (
                <Step key={step.number} {...step} />
            ))}
        </div>
    </section>
);

export default WorkProcess;
