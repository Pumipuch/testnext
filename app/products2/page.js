import Link from "next/link"

async function getdata() {
    const res = await fetch("https://dummyjson.com/products?limit=10")

    if (!res.ok) {
        throw new Error('cannot fetch ')
    }
    return res.json()
}

export default async function Page() {

    const data = await getdata()
    //console.log('data', data)

    return (
        <div className="grid grid-cols-7 ">

            <div></div>

            <div className="col-span-5 ">

                <div className="flex flex-wrap justify-center gap-4 m-4">
                    {
                        data["products"].map((products, index) => (

                            <div className="max-w-sm overflow-hidden text-center m-1">

                                <div key={products.id}>

                                    <Link href={'/products2/'+products.id}>
                                        <div className="font-bold text-white m-1 p-1 bg-blue-500 rounded hover:bg-red-500">{products.title}</div>

                                        <div className="flex justify-center">
                                            <img className="rounded-lg m-2 hover:animate-pulse w-[200px] h-[200px]" src={products.thumbnail} alt={products.id}></img></div>
                                    </Link>
                                </div>

                            </div>

                        ))}
                </div>

            </div>

            <div></div>

        </div>

    )
}




