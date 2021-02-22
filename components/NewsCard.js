import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const NewsCardArea = styled.div`
  width:100%;
  margin: 0;
  padding: 0;
  background: #000;
  color:#fff;
  border-radius:6px;
`

const NewsCardImageArea = styled.div`
  width:100%;
`

const NewsCardTextArea = styled.div`
  width:100%;
  background:#333333;
  h3{
    margin-bottom:10px;
    font-size:12px;
    color:#fff;
  }
  h4{
    font-size:21px;
    color:#fff;
  }
`

export default function NewsCard( { post } ) {
  return (
    <NewsCardArea>
      <NewsCardImageArea>
        <Image
          src='https://exame.com/wp-content/uploads/2021/02/boeings-parados-em-aeroporto_reuters.jpg'
          alt={post.title.rendered}
          width={380}
          height={180}
        />
      </NewsCardImageArea>
      <NewsCardTextArea>
        <h4>{post.title.rendered}</h4>
      </NewsCardTextArea>
    </NewsCardArea>
  )
}