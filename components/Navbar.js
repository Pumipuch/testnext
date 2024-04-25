import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className="flex justify-center"><div>
                <div className="flex justify-center">
                    <Link href="/"><img className="rounded-lg m-4" src="/always.jpg" width={50} height={50} alt="logo"></img></Link></div><hr />

                <div className="mx-4">
                    <Link href="/">HOME</Link><br />
                    <Link href="/about">ABOUT</Link><br />
                    <Link href="/products">Products</Link></div></div></div>
        </nav>
    )
}