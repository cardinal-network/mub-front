import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1 } from '../components/Titles';
import CategoryCards from '../components/CategoryCards';
import { categories } from '../data/newsCategories';

const CategoryListAreaTitleContainer = styled.div`
    flex: 1;
    width: 100%;
    margin: 40px 0 0 0;
    border-radius: 6px;
`

export default function Categories() {
  return (
    <>
      <Head>
        <title>Mub Music News Categories | The World's biggest music catalog</title>
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
                    <CategoryListAreaTitleContainer>
                        <H1 fontSize={24} fontWeight={700} color={"#fff"} marginBottom={0}>News Categories</H1>
                    </CategoryListAreaTitleContainer>
                </div>
                <div className="row">
                    <div className="grid-mansonry">
                        {categories.map((category) => (
                            <CategoryCards category={category} key={category} />
                        )
                        )}
                    </div>
                </div>
            </div>
        </main>
      <Footer />
    </>
  )
}