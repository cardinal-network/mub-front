import Head from 'next/head';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function post({ postData }) {
  return (
    <>
      <Head>
        <title>{ postData.title.rendered } | Mub Music</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mub Music | The World's biggest music catalog" key="title" />
        <meta property="og:description" content="The World's biggest music catalog. Musical products, Musical Instruments, Music News. Get in and find your sound!" />
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
              <Image
                src='https://exame.com/wp-content/uploads/2021/02/boeings-parados-em-aeroporto_reuters.jpg'
                alt={postData.title.rendered}
                width={1300}
                height={460}
              />
              <h1>{ postData.title.rendered }</h1>
            </article>
            <aside>AAA BBB CCC</aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts/?slug=${ context.params.slug }`);
  const postJson = await res.json();
  
  return {
    props: {
      postData: postJson[0]
    }
  }

}