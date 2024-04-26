import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3">

        <div></div>

        <div>

          <div className="flex justify-center text-4xl font-black text-red-400 m-4">ABOUT</div>

          <div className="flex flex-col m-4 "><img src="/her2.jpg" width={800} alt="about" className="rounded-lg hover:brightness-200 "></img></div>

          <div className="flex flex-col m-4 "><img src="/her2.jpg" width={800} alt="about" className="rounded-lg hover:opacity-60"></img></div>

          <div className="flex flex-col m-4"><p className="flex justify-center animate-pulse">ไม่ได้เก่งตั้งแต่เกิด แต่พ่อสอนให้เปิดตั้งแต่เด็ก</p></div>

        </div>


        <div></div>

      </div>
    </>
  );
}
