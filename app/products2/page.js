async function getdata() {
    const res = await fetch("https://dummyjson.com/products?limit=12")

    if (!res.ok) {
        throw new Error('cannot fetch ')
    }
    return res.json()
}

export default async function Page() {

    const data = await getdata()
    //console.log('data', data)

    return (
        <div>
            {/* {
                data.map(blog => (
                    <div key={index}>
                        {blog.id} {blog.title}
                    </div>
                ))
            } */}

            {
                data["products"].map((blog, index) => (
                    <div key={index}>
                        {blog.id} {blog.title}

                    </div>
                ))}

        </div>
    )
}




