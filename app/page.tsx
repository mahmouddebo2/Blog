import { Card, CardContent } from "@/components/ui/card";
import { simpleBlog } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const revalidate = 30 //revalidate at most 30 seconds


async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      "currentSlug":slug.current,
      titleImage
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlog[] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-5">
      {data.map((post, inx) => (
        <Card key={inx}>
          <Image
            src={urlFor(post.titleImage).url()}
            alt="Image blog"
            width={500}
            height={500}
            className="object-cover rounded-t-lg h-[200px]"
          />
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
            <p className="text-sm line-clamp-3 mt-2 text-gray-600 dark:text-gray-300">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-7 ">
             <Link href={`/blog/${post.currentSlug}`}>
             Read More
             </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
