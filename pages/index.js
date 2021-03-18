import Head from 'next/head';
import Header from '../components/Header';
import NewsMainPageContainer from '../components/NewsMainPageContainer';
import Footer from '../components/Footer';

export default function Home({ posts, sliderPosts }) {
  return (
    <>
      <Head>
        <title>Mub Music | The World's biggest music catalog</title>
        <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        <meta name="description" content="The World's biggest music catalog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mub Music | The World's biggest music catalog" key="title" />
        <meta property="og:description" content="The World's biggest music catalog. ➤ Musical products, Musical Instruments, Music News. ➤ Get in and find your sound!" />
        <meta property="og:url" content="https://mubmusic.com/" />
        <meta property="og:site_name" content="Mub Music" />
        <meta property="og:image" content="https://s0.wp.com/i/blank.jpg" />
        <meta property="og:locale" content="en" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
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