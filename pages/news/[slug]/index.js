import Head from 'next/head';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { H1, H2, H3 } from '../../../components/Titles';
import Breadcrumb from '../../../components/Breadcrumb'

const PostFeatureImage = styled.div`
  display: block;
  position: relative;
  img{
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`

const PostFeatureImageText = styled.div`
  padding: 70px 3% 30px 3%;
  position: absolute;
  bottom: 3px;
  min-width: 94%;
  background-color: rgba(0,0,0,0);
  background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,1));
  @media (max-width: 768px) {
    position: relative;
    padding: 25px 30px 0 30px;
    background-image: none;
    min-width: auto;
    h2{
      font-size: 15.5px;
      color: #bbb;
    }
  }
`

const PostFeatureImageCategoryButton = styled.div`
  padding: 10px 15px;
  position: absolute;
  top: 30px;
  left: 3%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  a{
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: 768px) {
    font-size: 12px;
    left: 40px;
  }
  @media (max-width: 400px) {
    top: 0;
    left: 0;
    border-radius: 0;
  }
`

const PostText = styled.div`
  padding: 20px 40px;
  text-align: justify;
  figure {
    margin: 40px auto;
    img{
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
    figcaption {
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
    padding: 0;
    width: 100%;
    p{
      padding: 0 30px;
    }
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
  return (
    <>
      <Head>
        <title>{ postData.title.rendered } | Mub Music</title>
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
      <main>
        <div className="container">
          <div className="row">
            <article>
              <PostFeatureImage>
                <Image
                  src='https://exame.com/wp-content/uploads/2021/02/boeings-parados-em-aeroporto_reuters.jpg'
                  alt={postData.title.rendered}
                  width={1440}
                  height={650}
                />
                <PostFeatureImageCategoryButton><a href="/">Categoria</a></PostFeatureImageCategoryButton>
                <PostFeatureImageText>
                  <H1 dangerouslySetInnerHTML={{ __html: postData.title.rendered }} fontSize={32} fontWeight={700} color={"#fff"} marginBottom={10}/>
                  <H2 dangerouslySetInnerHTML={{ __html: postData.excerpt.rendered }} fontSize={18} fontWeight={400} color={"#fff"} marginBottom={15}/>
                  <Breadcrumb>
                    <li><a href="/">Home</a></li>
                    <li><a href="/brasil">Music Bussines</a></li>
                    <li>{postData.title.rendered}</li>
                  </Breadcrumb>
                </PostFeatureImageText>
              </PostFeatureImage>
              <div className="row">
                <PostText dangerouslySetInnerHTML={{ __html: postData.content.rendered }}/>
              </div>
            </article>
            <aside>AAA BBB CCC</aside>
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
      postData: postJson[0]
    }
  }

}

export async function getStaticPaths() {
  const res = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts/`)
  const posts = await res.json()

  const slugs = posts.map((post) => post.slug)
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))

  return {
    paths,
    fallback: false,
  }
}