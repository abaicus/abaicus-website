import Image from "next/image";
import ImageDecorator from "../components/content/ImageDecorator";
import Link from "next/link";
import { estimateReadingTime } from "../common/utils";
import { getAllPosts } from "../lib/api";
import { getPlaiceholder } from "plaiceholder";

export default function Blog({ posts }) {
    return (
        <div className="relative bg-gray-50 py-10 lg:py-20 px-4 dark:bg-zinc-900 ">
            <div className="relative max-w-5xl mx-auto">
                <h2 className="text-3xl text-center font-extrabold dark:text-white">Blog</h2>

                <div className="mt-10 lg:mt-20 max-w-lg mx-auto grid gap-10 lg:grid-cols-2 lg:max-w-6xl ">
                    {posts.map(({ slug, author, coverImage, coverAlt, date, excerpt, title, readingTime }) => (
                        <Link href={`/posts/${slug}`} key={slug}>
                            <a className="flex flex-col rounded-lg shadow hover:shadow-lg transition-all overflow-hidden group">
                                <article>
                                    <div className="relative overflow-hidden flex">
                                        <div className="absolute pointer-events-none z-10 w-[100px] h-[100px] -right-full -bottom-full mix-blend-multiply bg-sky-400 rounded-lg shadow-lg shadow-sky-200 transition-all 
     group-hover:right-5 group-hover:bottom-5 group-hover:scale-105 
   "/>
                                        <div className="absolute pointer-events-none z-10 w-[130px] h-[130px] -left-full -top-full mix-blend-multiply bg-red-500 rounded-lg shadow-lg shadow-red-200 transition-all
     group-hover:left-5 group-hover:top-5 group-hover:scale-105
   "/>
                                        <div className="absolute pointer-events-none z-10 w-full h-full transition-all rounded-md bg-red-100 bg-gradient-to-br from-transparent to-sky-500 mix-blend-multiply opacity-10"
                                        />
                                        <Image className="h-48 w-full object-cover group-hover:scale-110 group-hover:-rotate-[0.35deg] transition-all" width={600} height={350} alt={coverAlt} src={coverImage.img} blurDataURL={coverImage.base64} placeholder={'blur'} />
                                    </div>
                                    <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <p className="text-xl font-semibold dark:text-white group-hover:text-sky-500">{title}</p>
                                            <p className="mt-3 text-base text-gray-500 dark:text-gray-100">{excerpt}</p>
                                        </div>
                                        <div className="mt-6 flex items-center">
                                            <div className="flex-shrink-0">
                                                <span className="sr-only">{author.name}</span>
                                                {author.imageUrl && <Image width={50} height={50} src={author.imageUrl} className="h-10 w-10 rounded-full object-cover" />}
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {author.name}
                                                </p>
                                                <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                                                    <time dateTime={date}>{date}</time>
                                                    <span aria-hidden="true">&middot;</span>
                                                    <span>{`${readingTime}min read`}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </a>
                        </Link>
                    ))}

                </div>
            </div>
        </div >
    )
}

export async function getStaticProps() {
    const posts = getAllPosts(['slug', 'excerpt', 'title', 'coverImage', 'author', 'date', 'coverAlt', 'content'])


    const data = await Promise.all(posts.map(async (postData) => {
        const { base64, img } = await getPlaiceholder(postData.coverImage);
        return {
            ...postData,
            coverImage: { base64, img },
            readingTime: estimateReadingTime(postData.content)
        }
    }));

    // const allposts = [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data];

    return { props: { posts: data } }
}
