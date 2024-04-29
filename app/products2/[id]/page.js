import Link from "next/link"

async function getdata(id) {
    const res = await fetch("https://dummyjson.com/products/" + id)

    if (!res.ok) {
        throw new Error('cannot fetch ')
    }
    return res.json()
}

export default async function Page({ params }) {
    const data = await getdata(params.id)
    // console.log('data', data)
    return (
        <div className="grid grid-cols-7 ">

            <div></div>

            <div className="col-span-5">

                <div className="flex justify-center m-4">
                    <div>
                        <div className="flex justify-center p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white text-4xl">{data.title}</div>

                        <div className="flex justify-center m-4"><img className="rounded-lg m-2 w-[400px] h-[400px]" src={data.thumbnail} alt={data.id}></img></div>

                        <div className="flex justify-center m-4 text-lg ">{data.description}</div>

                        <div className="flex justify-center m-4 text-2xl">Price : {data.price} $</div>

                        <div className="flex justify-center "><Link href="/products2" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Back</Link></div>

                    </div>
                </div>

            </div>

            <div></div>

        </div>
    )
}

// ------ ออกแบบ Grid --------

// import Link from "next/link"

// async function getdata(id) {
//     const res = await fetch("https://dummyjson.com/products/" + id)

//     if (!res.ok) {
//         throw new Error('cannot fetch ')
//     }
//     return res.json()
// }

// export default async function Page({ params }) {
//     const data = await getdata(params.id)
//     // console.log('data', data)
//     return (
//         <div className="grid grid-cols-10 ">

//             <div></div>

//             <div className="col-span-8">


//                 <div>Name</div>

//                 <div className="">

//                     <div className="flex flex-wrap">

//                         <div><img src="/her4.jpg" className="w-[300px] h-[300px]"></img></div>
                        
//                         <div>
//                             <div>
//                                 <div>111111111111111111111111111111111111111111111111111111111111111111111111</div>
//                                 <div >2222222222222222222222222</div>
//                                 <div>3333333333333333333333333333</div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>

//                 <div>Name</div>

//             </div>

//             <div></div>

//         </div>
//     )
// }


// import Link from "next/link"

// async function getdata(id) {
//     const res = await fetch("https://dummyjson.com/products/" + id)

//     if (!res.ok) {
//         throw new Error('cannot fetch ')
//     }
//     return res.json()
// }

// export default async function Page({ params }) {
//     const data = await getdata(params.id)
//     // console.log('data', data)
//     return (
//         <div className="grid grid-cols-10 ">

//             <div></div>

//             <div className="col-span-8">


//                 <div className="flex justify-center p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white text-4xl">{data.title}</div>

//                 <div className="flex flex-wrap justify-left">

//                 <div className="flex justify-left">

//                 <img className="rounded-lg m-2 w-[300px] h-[300px]" src={data.thumbnail} alt={data.id}></img>

//                 {data.description}

//                 {data.price}

//                 </div>

//                 </div>



//             </div>

//             <div></div>

//         </div>
//     )
// }