import React from "react";

export default async function page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.allpost}`
  );
  const data = await res.json();

  return <>{data.title}</>;
}
