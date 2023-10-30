import Link from "next/link";
import React from "react";

export default async function page() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      
      const data = await  res.json()
     
  return (
    <div>
      <h1>GET ALL POSTS</h1>
 
      <h1> {
        data.map((val:any)=>(<>

        <Link href={`/getpost/${val.id}`}>SEE POST {val.title} {val.id}</Link>
        
        </>))

}</h1>
    </div>
  );
}
