import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const NewsCardArea = styled.div`
  width: 100%;
  margin: 0 0 1em;
  padding: 0;
  display: inline-block;
  border-radius:6px;
`

const NewsCardImageArea = styled.div`
  width: 100%;
  img{
    width: 100%;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
  }
`

const NewsCardTextArea = styled.div`
  width:100%;
  background:#333;
  color:#fff;
  border-bottom-left-radius:6px;
  border-bottom-right-radius:6px;
  margin: -5px 0 0 0;
  h3{
    margin-bottom:10px;
    font-size:12px;
    color:#fff;
    padding: 20px 20px 0 20px;
  }
  h4{
    font-size:21px;
    color:#fff;
    padding: 0 20px 20px 20px;
  }
`

export default function NewsCard( { post } ) {
  return (
    <NewsCardArea id='news-card'>
      <NewsCardImageArea>
        <Image
          src='https://exame.com/wp-content/uploads/2021/02/boeings-parados-em-aeroporto_reuters.jpg'
          alt={post.title.rendered}
          width={650}
          height={350}
        />
      </NewsCardImageArea>
      <NewsCardTextArea>
        <h3>Categoria</h3>
        <h4>{post.title.rendered}</h4>
      </NewsCardTextArea>
    </NewsCardArea>
  )
}