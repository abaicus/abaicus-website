import { getAllPosts, getPostBySlug } from '../../lib/api'

import BlogMeta from '../../components/content/BlogMeta';
import ContentImage from '../../components/content/ContentImage';
import ContentPage from '../../components/content/ContentPage';
import Head from 'next/head';
import ImageDecorator from '../../components/content/ImageDecorator';
import ScrollIndicator from '../../components/content/ScrollIndicator';
import { getPlaiceholder } from 'plaiceholder';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post }) {
    const {
        title,
        date,
        modified,
        author,
        content,
        ogImage,
        coverImage,
        description,
        coverAlt,
    } = post;

    const displayDate = modified || date;

    const { base64, img } = coverImage;


    return (
        <>
            <ContentPage
                title={title || ''}
                subtitle={description || ''}
                byline={
                    <BlogMeta author={author} date={displayDate} />
                }>

                <ScrollIndicator />

                <Head>
                    <meta property="og:image" content={ogImage.url || img} />
                </Head>


                <div className=" mx-5 lg:-mx-20 my-20 relative group">
                    <ImageDecorator />
                    <ImageDecorator overlay={true} />
                    <ContentImage
                        alt={coverAlt || `${title} - featured image`}
                        blurPH={true}
                        phSRC={base64}
                        src={img}
                        w={1200}
                        h={650}
                    />
                </div>

                <div dangerouslySetInnerHTML={{ __html: content }} />
            </ContentPage >
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'description',
        'coverAlt',
    ])
    const content = await markdownToHtml(post.content || '')

    const { base64, img } = await getPlaiceholder(post.coverImage);

    return {
        props: {
            post: {
                ...post,
                content,
                coverImage: { base64, img }
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}