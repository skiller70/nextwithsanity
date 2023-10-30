import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import { client } from "@/src/utils/sanityClientConfig";

export default async function Home() {
  const query = `*[_type == "user"]`;

  const data = await client.fetch(query);

  console.log(data);
  return (
    <div className=" w-full h-auto">
      <div className=" top-0  sticky z-40">
        <Navbar />
      </div>

      <Carousel />

      <div className=" container grid grid-cols-1 sm:max-md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
        {data.map((val: any) => (
          <>{/* <Card titleany={val.name} img={val.avatar.asset._ref} /> */}</>
        ))}
      </div>
    </div>
  );
}
