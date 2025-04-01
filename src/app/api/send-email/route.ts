import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Khởi tạo Resend với API key
const resend = new Resend(process.env.RESEND_API_KEY!);

// Xử lý POST request
export async function POST(req: Request) {
    try {
        // Lấy dữ liệu từ request
        const { name, email, phone, budget, message } = await req.json();

        // Kiểm tra dữ liệu có đầy đủ không
        if (!name || !email || !phone || !budget || !message) {
            return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
        }

        // Gửi email qua Resend
        const emailResponse = await resend.emails.send({
            // khi đã xác minh doamin trên resend (gmail.webhalong.id.vn) thì resend sẽ tự động thêm 1 sub 
            // tùy ý cho bạn chọn, nên điền gì cx đc
            from: 'contact@gmail.webhalong.id.vn', // Email người gửi
            to: 'tuantq.utc@gmail.com',   // Địa chỉ email nhận
            subject: 'Yêu cầu báo giá từ website',
            text: `
                Tên: ${name}
                Email: ${email}
                Số điện thoại: ${phone}
                Ngân sách: ${budget}
                Mô tả: ${message}
            `,
            html: `
                <p><strong>Tên:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Số điện thoại:</strong> ${phone}</p>
                <p><strong>Ngân sách:</strong> ${budget}</p>
                <p><strong>Mô tả:</strong> ${message}</p>
            `,
        });
        return NextResponse.json({ message: 'Email sent successfully!', data: emailResponse }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error: error instanceof Error ? error.message : error }, { status: 500 });
    }
}

// Nếu phương thức không phải là POST, trả về lỗi Method Not Allowed
export function OPTIONS() {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
