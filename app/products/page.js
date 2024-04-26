'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

async function getData() {
    const res = await fetch("https://dummyjson.com/products?limit=12")

    if (!res.ok) {
        throw new Error('cannot fetch ')
    }
    return res.json()
}

export default function Page() {

    const [dataState, setDataState] = useState([]);

    const initBlog = async () => {
        try {
            const result = await getData()
            setDataState(result.products)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        initBlog()
        //console.log('use effect')
    }, [])

    //console.log(dataState)

    return (
        <div>
            <h1>fetch API "useClient"</h1>
            {
                dataState.map((pd, index) => (
                    <div key={index}>
                        {pd.id} {pd.title}
                    </div>
                ))
            }
            <div><div className="flex justify-center "><Link href="/products2" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full animate-bounce">fetch API "useServer"</Link></div></div>
        </div>
    )
}
