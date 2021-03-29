import Head from 'next/head';
import Header from '../components/Header';
import NewsMainPageContainer from '../components/NewsMainPageContainer';
import Footer from '../components/Footer';

export default function Home({ posts, sliderPosts }) {
  return (
    <>
      <Head>
        <title>Mub Music | The World's biggest music catalog</title>
        <meta name="description" content="The World's biggest music catalog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mub Music | The World's biggest music catalog" key="title" />
        <meta property="og:description" content="The World's biggest music catalog" />
      </Head>
      <Header />
      <NewsMainPageContainer posts={posts} sliderPosts={sliderPosts} />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const resPost = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts?tags_exclude=17`);
  const resSlider = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts?per_page=2&?tags=17`);
  const posts = await resPost.json();
  const sliderPosts = await resSlider.json();
  
  return {
    props: {
      posts,
      sliderPosts
    }
  }
}