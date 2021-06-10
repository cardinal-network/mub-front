import React, {useState} from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styled from 'styled-components';
import { H1 } from '../../../components/Titles';
import NewsCard from '../../../components/NewsCard';
import AdContainer from '../../../components/AdContainer';
import Aside from '../../../components/Aside';
import CollapseSideMenu from '../../../components/CollapseSideMenu';

const ProductListAreaContainer = styled.div`
    flex: 74%;
    margin: 40px 40px 1%;
    border-radius: 6px;
    @media (max-width: 1100px){
        flex: 1;
        width: 100%;
    }
`

const ProductListAreaTitleContainer = styled.div`
    flex: 1;
    width: 100%;
    border-radius: 6px;
`

const ProductListAreaGrid = styled.div`
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

export default function productIndexPage({ prodCatData, prodData, prodSubCatData, prodBrandData, prodPriceAverageData }) {
    const [brandsArea, setBrandsArea] = useState(false);
    const DynamicBrandsArea = dynamic(() => import("../../../components/CollapseSideMenu"));
    return (
        <>
            <Head>
                <title>{ prodCatData.title.rendered } | Mub Music</title>
                <meta name="description" content="The World's biggest music catalog" />
                <meta property="og:title" content="Mub Music | The World's biggest music catalog" key="title" />
                <meta property="og:description" content="The World's biggest music catalog. ➤ Musical products, Musical Instruments, Music News. ➤ Get in and find your sound!" />
            </Head>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <Aside margins={"40px 0 0 0"}>
                            <AdContainer Height={250} margins={"0"} />
                            <CollapseSideMenu title={"Subcategories"} data={prodSubCatData} />
                            <CollapseSideMenu title={"Brands"} data={prodBrandData} />
                            <CollapseSideMenu title={"Price"} data={prodPriceAverageData} />
                        </Aside>
                        <ProductListAreaContainer>
                            <ProductListAreaTitleContainer>
                                <H1 fontSize={24} fontWeight={700} color={"#fff"} marginBottom={0}>{ prodCatData.title.rendered }</H1>
                            </ProductListAreaTitleContainer>
                            <ProductListAreaGrid>
                                    {prodData.map((prodDataItem) => (
                                        <div key={prodDataItem.id}>{prodDataItem.title.rendered}</div>
                                    )
                                    )}
                            </ProductListAreaGrid>
                        </ProductListAreaContainer>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const resProdCat = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/product_category?slug=${context.params.product_category}`);
    const prodCatJson = await resProdCat.json();
    
    const resProd = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/products?category_id=${prodCatJson[0].id}`);
    const resProdSubCat = await fetch(`https://mubdmn-dev.crdps.xyz/sbc-lc/?ct=${prodCatJson[0].id}`);
    const resProdBrand = await fetch(`https://mubdmn-dev.crdps.xyz/brd-lc/?ct=${prodCatJson[0].id}`);
    const resProdPriceAverage = await fetch(`https://mubdmn-dev.crdps.xyz/prvg-lc/?ct=${prodCatJson[0].id}`);

    const prodJson = await resProd.json();
    const prodSubCatJson = await resProdSubCat.json();
    const prodBrandJson = await resProdBrand.json();
    const prodPriceAverageJson = await resProdPriceAverage.json();

    return {
        props: {
            prodCatData: prodCatJson[0],
            prodData: prodJson,
            prodSubCatData: prodSubCatJson,
            prodBrandData: prodBrandJson,
            prodPriceAverageData: prodPriceAverageJson
        }
    }
}