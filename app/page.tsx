import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import { client } from "@/src/utils/sanityClientConfig";

// interface PortableText {
//   _type: 'array';
//   _key: string;

// }
export default async function Home() {
  const query = `*[_type == "arcana"]`;

  const data = await client.fetch(query, {}, { cache: "no-store" });

  return (
    <>
      <div className=" w-full h-auto">
        <Navbar />

        <Carousel />

        <div className=" container grid grid-cols-1 sm:max-md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
          {data.map((val: any) => (
            <div key={val._id}>
              {
                <Card
                  titleany={val.name}
                  img={val.imageUrl}
                  content={val.content}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
