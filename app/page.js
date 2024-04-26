import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center m-4">
        <div>

          <div className="text-4xl font-black flex justify-center text-red-500">HER</div>

          <div className="text-center mb-2"><p>ไม่หล่อ แต่เมียมึงรู้จัก</p></div>

          <div className="flex justify-center mb-5"><img src="/Her1.jpg" width={500} alt="pichome" className="rounded-lg animate-pulse"></img></div>

          <div className="flex justify-center "><Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-bounce">แหกตาดู</Link></div>

        </div>
      </div>
    </>
  );
}
