import styled from 'styled-components';
import Image from 'next/image';
import { H3, H4 } from '../components/Titles';
import { categories } from '../data/categories';

const NewsCardArea = styled.div`
  width: 100%;
  margin: 0 0 1em;
  padding: 0;
  display: inline-block;
  border-radius:6px;
`

const NewsCardImageArea = styled.div`
  width: 100%;
  height: 200px;
  display: block;
  position: relative;
  background: #444;
  border-top-left-radius:6px;
  border-top-right-radius:6px;
  animation: lazyAnimation 1s 10;
  @keyframes lazyAnimation {
    from {background-color: #444;}
    to {background-color: #555;}
  }
  img{
    border-top-left-radius:6px;
    border-top-right-radius:6px;
  }
`

const NewsCardTextArea = styled.div`
  width: 90%;
  min-height: 170px;
  background:#333;
  color:#fff;
  border-bottom-left-radius:6px;
  border-bottom-right-radius:6px;
  padding: 20px 5% 5px 5%;
  @media (max-width: 576px) {
    min-height: auto;
    padding: 20px 5%;
  }
`

export default function NewsCard( { post } ) {
  const categoryId = post.categories;
  const categoryFinder = categories.find(category => category.id === parseInt(categoryId));
  return (
    <NewsCardArea id='news-card'>
          <a href={`/news/${categoryFinder.slug}/${post.slug}`}>
            <NewsCardImageArea>
              <Image
                src={post.fimg_url}
                alt={post.title.rendered}
                layout="fill"
                objectFit="cover"
              />
            </NewsCardImageArea>
            <NewsCardTextArea>
              <H4 fontSize={14} fontWeight={500} color={"#999"} marginBottom={10}>{categoryFinder.name}</H4>
              <H3 fontSize={22} fontWeight={500} color={"#fff"} marginBottom={10}>{post.title.rendered}</H3>
            </NewsCardTextArea>
          </a>
    </NewsCardArea>
  )
}