export const metadata = {
    title: "About",
    description: "เกี่ยวกะฉัน",
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