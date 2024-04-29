
export const metadata = {
    title: "Products",
    description: "โทรสงโทรสับ",
};

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            {/* เพิ่ม layout เฉพาะหน้านี้ */}
            {children}
            {/* เพิ่ม layout เฉพาะหน้านี้ */}
        </section>
    )
}
