// export async function GET() {
//     console.log('test')
//     return Response.json({
//         name: 'earth'
//     })
// }

export async function GET() {
    const res = await fetch('https://dummyjson.com/products?limit=12', {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }