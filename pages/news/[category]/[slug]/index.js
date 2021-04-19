import Head from 'next/head';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Image from 'next/image';
import styled from 'styled-components';
import { H1, H2 } from '../../../../components/Titles';
import Breadcrumb from '../../../../components/Breadcrumb';
import { categories } from '../../../../data/newsCategories';
import AdContainer from '../../../../components/AdContainer';
import { server } from '../../../../config';

const PostFeatureImage = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 600px;
  background: #444;
  border-top-left-radius:6px;
  border-top-right-radius:6px;
  animation: lazyAnimation 1s 10;
  @keyframes lazyAnimation {
    from {background-color: #444;}
    to {background-color: #555;}
  }
  img{
    width: 100%;
    position: relative;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`

const PostFeatureImageText = styled.div`
  padding: 70px 4.1% 30px 4%;
  position: absolute;
  bottom: 0;
  min-width: 92%;
  background-color: rgba(0,0,0,0);
  background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,1));
  @media (max-width: 768px) {
    min-width: 90%;
    padding: 70px 5% 30px 5%;
    h1{
      font-size: 28px;
    }
    h2{
      font-size: 14px;
      color: #bbb;
    }
  }
`

const PostFeatureImageCategoryButton = styled.div`
  padding: 10px 15px;
  position: absolute;
  top: 30px;
  left: 4%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  a{
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: 768px) {
    top: 20px;
    left: 5%;
    font-size: 12px;
  }
`

const PostText = styled.div`
  width: 92%;
  padding: 20px 4%;
  text-align: justify;
  img{
    width: 100%;
    height: auto;
    max-width: 1290px;
    position: relative;
  }
  figure {
    margin: 40px auto;
    max-width: 100%;
    img{
      width: 100%;
      height: auto;
      max-width: 1290px;
      position: relative;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
    figcaption {
      width: 100%;
      height: auto;
      max-width: 1290px;
      position: relative;
      margin: -4px 0 0 0;
      padding: 20px 0;
      background: #444;
      color: #aaa;
      font-size: 16px;
      text-align: center;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
  p{
    font-size: 17px;
    font-weight: 300;
    line-height: 30px;
    margin: 20px 0;
  }
  a{
    font-weight: 700;
    color: #fff;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  iframe {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
  @media (max-width: 768px) {
    width: 90%;
    padding: 0 5%;
    figure {
      max-width: 85%;
      img{
        width: 100%;
        width: 100%;
        height: auto;
        max-width: 100%;
      }
    }
  }
  @media (max-width: 576px) {
    figure {
      max-width: 100%;
      img{
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      figcaption {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  @media (max-width: 400px) {
    p{
      font-size: 16px;
    }
  }
`

export default function post({ postData }) {
  const categoryId = postData.categories;
  const categoryFinder = categories.find(category => category.id === parseInt(categoryId));
  return (
    <>
      <Head>
        <title>{ postData.title.rendered } | Mub Music</title>
        <meta name="description" content={ postData.excerpt.rendered } />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ postData.title.rendered } key="title" />
        <meta property="og:description" content={ postData.excerpt.rendered } />
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <article>
              <PostFeatureImage>
                <Image
                  src={postData.fimg_url}
                  alt={postData.title.rendered}
                  layout="fill"
                  objectFit="cover"
                />
                <PostFeatureImageCategoryButton><a href={`${server}/news/${categoryFinder.slug}`}>{categoryFinder.name}</a></PostFeatureImageCategoryButton>
                <PostFeatureImageText>
                  <H1 dangerouslySetInnerHTML={{ __html: postData.title.rendered }} fontSize={32} fontWeight={500} color={"#fff"} marginBottom={10}/>
                  <H2 dangerouslySetInnerHTML={{ __html: postData.excerpt.rendered }} fontSize={18} fontWeight={400} color={"#fff"} marginBottom={15}/>
                  <Breadcrumb>
                    <li><a href={`${server}`}>Home</a></li>
                    <li><a href={`${server}/news/${categoryFinder.slug}`}>{categoryFinder.name}</a></li>
                    <li>{postData.title.rendered}</li>
                  </Breadcrumb>
                </PostFeatureImageText>
              </PostFeatureImage>
              <div className="row">
                <PostText dangerouslySetInnerHTML={{ __html: postData.content.rendered }}/>
              </div>
            </article>
            <aside>
              <AdContainer Height={600} margins={"40px 0 0 0"} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts/?slug=${context.params.slug}`);
  const postJson = await res.json();
  
  return {
    props: {
      postData: postJson[0],
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const res = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts/`);
  const resCat = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/categories/`);
  const posts = await res.json();
  const cats = await resCat.json();

  const paths = posts.map(post => {
    const catSlug = cats.find(catArr => catArr.id === parseInt(post.categories));
    return { 
      params: {
        category: catSlug.slug, slug: post.slug 
      } 
    };
  });

  return {
    paths,
    fallback: 'blocking',
  }
}