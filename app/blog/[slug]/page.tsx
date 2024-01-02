import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

// const links = [
//     {link:'https://mahmouddebo2.github.io/Movies-App/'},
//     {link:'https://travel-app-nine-xi.vercel.app/'},
//     {link:'https://egypt-shop-r8rs.vercel.app/'},
//     {link:'https://dashboard-delta-inky.vercel.app/'},
// ]

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
        'currentSlug':slug.current,
          title,
          content,
          titleImage,
          links
        }[0]
    `;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  console.log(data);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Mahmoud Derbala - Blog
        </span>
        <span className="mt-2 block text-3xl  text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Link href={data.links} target="_blank">
      <Image
            src={urlFor(data.titleImage).url()}
            alt="Title  Image "
            width={800}
            height={800}
            className="object-cover mt-8 rounded-lg border"
            priority
            />
            </Link>
          
            
          <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
            <PortableText value={data.content}/>
          </div>
    </div>
  );
}
