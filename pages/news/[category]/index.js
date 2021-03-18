import Head from 'next/head';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styled from 'styled-components';
import { H1 } from '../../../components/Titles';
import NewsCard from '../../../components/NewsCard';
import { categories } from '../../../data/categories';

const CategoryListAreaTitleContainer = styled.div`
    flex: 1;
    width: 100%;
    margin: 40px 0 0 0;
    border-radius: 6px;
`

const CategoryListAreaContainer = styled.div`
    flex: 74%;
    margin: 40px 1% 40px 0;
    border-radius: 6px;
    @media (max-width: 1100px){
        flex: 1;
        width: 100%;
    }
`

const CategoryListAreaGrid = styled.div`
    flex: 100%;
    column-count: 3;
    column-gap: 1em;
    @media (min-width: 1100px) and (max-width: 1360px) {
    column-count: 2;
    flex: 75%;
    }
    @media (min-width: 768px) and (max-width: 1100px) {
    column-count: 3;
    flex: 100%;
    }
    @media (min-width: 576px) and (max-width: 768px) {
    column-count: 2;
    flex: 100%;
    }
    @media (max-width: 576px) {
    column-count: 1;
    flex: 100%;
    }
`

export default function categoryPage({ catData, catName }) {
  return (
    <>
        <Head>
            <title>News about { catName } | Mub Music</title>
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
                        <H1 fontSize={24} fontWeight={700} color={"#fff"} marginBottom={0}>News about { catName }</H1>
                    </CategoryListAreaTitleContainer>
                </div>
                <div className="row">
                    <CategoryListAreaContainer>
                        <CategoryListAreaGrid>
                            {catData.map((catDataPost) => (
                                <NewsCard post={catDataPost} key={catDataPost}/>
                            )
                            )}
                        </CategoryListAreaGrid>
                    </CategoryListAreaContainer>
                    <aside>AAA BBB CCC</aside>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export async function getStaticProps(context) {
    const categoryFinder = categories.find(category => category.slug === context.params.category);
    const res = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts?categories=${categoryFinder.id}`);
    const catJson = await res.json();
    const catName = `${categoryFinder.name}`;

    return {
        props: {
            catData: catJson,
            catName: catName
        }
    }
}
  
export async function getStaticPaths() {
    const paths = categories.map(category => {
        return { 
            params: {
                category: category.slug
            } 
        };
    });

    return {
        paths,
        fallback: 'blocking',
    }
}