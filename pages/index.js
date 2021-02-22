import Header from '../components/Header';
import NewsMainPageContainer from '../components/NewsMainPageContainer';

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <NewsMainPageContainer posts={posts}/>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts/?per_page=10`);
  const posts = await res.json();
  
  return {
    props: {
      posts
    }
  }

}