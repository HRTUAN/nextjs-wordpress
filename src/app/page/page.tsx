
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const Pages = async () => {
    return (
        <div className="container">
            <Breadcrumb
                items={[
                    { label: "Trang chủ", href: "/" },
                    { label: 'Page', href: '/page' },
                ]}
            />
        </div>
    );
};

export default Pages;
