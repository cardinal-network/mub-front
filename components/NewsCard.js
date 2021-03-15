import styled from 'styled-components';
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
  height: 200px;
  display: block;
  position: relative;
  img{
    border-top-left-radius:6px;
    border-top-right-radius:6px;
  }
`

const NewsCardTextArea = styled.div`
  width:100%;
  min-height: 145px;
  background:#333;
  color:#fff;
  border-bottom-left-radius:6px;
  border-bottom-right-radius:6px;
  margin: -5px 0 0 0;
  h3{
    margin-bottom:10px;
    font-size:12px;
    font-weight: 500;
    color:#fff;
    padding: 20px 20px 0 20px;
  }
  h4{
    font-size:21px;
    font-weight: 500;
    color:#fff;
    padding: 0 20px 20px 20px;
  }
`

export default function NewsCard( { post } ) {
  return (
    <NewsCardArea id='news-card'>
          <a href={`/news/${post.slug}`}>
            <NewsCardImageArea>
              <Image
                src={post.fimg_url}
                alt={post.title.rendered}
                layout="fill"
                objectFit="cover"
              />
            </NewsCardImageArea>
            <NewsCardTextArea>
              <h3>Categoria</h3>
              <h4>{post.title.rendered}</h4>
            </NewsCardTextArea>
          </a>
    </NewsCardArea>
  )
}