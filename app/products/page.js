
// async function getStaticProps(){
//     const res = await fetch("https://dummyjson.com/products?limit=12")
//     const data = res.json()
//     console.log(data)
//     return {
//         props: {products:data.products}
//     }
// }

// export default function Home({products}){
//     return (
//         <>
//         <div>
//             {products && products.map(item=>(
//                 <div key={item.id}>
//                     <h2>{item.title}</h2>
//                 </div>
//             ))}
//         </div>
//         </>
//     )
// }
'use client'

import { useState, useEffect } from 'react'

async function getBlogs() {
    const res = await fetch("https://dummyjson.com/products?limit=12")

    if (!res.ok) {
        throw new Error('cannot fetch ')
    }
    return res.json()
}

export default function Page() {

    const [blogState, setBlogState] = useState([]);

    const initBlog = async () => {
        try {
            const result = await getBlogs()
            setBlogState(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        initBlog()
        console.log('use effect')
    }, [])

    console.log(blogState)

    return (
        <div>
            {/* {
            blogState.map((blog, index) => (
                <div key={index}>
                   {blog.id} {blog.title}

                </div>
            ))} */}
        </div>
    )
}
