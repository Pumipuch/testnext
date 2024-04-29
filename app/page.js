import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center m-4">
        <div>

          <div className="text-4xl font-black flex justify-center text-red-500 animate-pulse">Dr.corner</div>

          <div className="text-center mb-2 text-lg">ศูนย์ซ่อมมือถือ ครบวงจร</div>

          <div className="flex justify-center mb-5"><img src="/store.webp" width={500} alt="pichome" className="rounded-lg hover:brightness-200"></img></div>

          <div className="flex justify-center "><Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-bounce">ABOUT ME</Link></div>

        </div>
      </div>
    </>
  );
}
