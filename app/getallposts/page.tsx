import React from 'react'
import { client } from "@/src/utils/sanityClientConfig";



export default async function page() {
  const data = await client.fetch(`*[_type == "arcanas"]`,{},{cache:"no-store"})

  return (  
    <div>
        <h1>sadasd</h1>
        <h1>sadasd</h1>
        <h1>sadasd</h1>
        <h1>sadasd</h1>
    </div>
  )
}


