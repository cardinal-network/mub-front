import styled from 'styled-components';
import Image from 'next/image';
import { H3 } from './Titles';

const CategoryCardsArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-bottom: 15px;
  animation: lazyAnimation 1s 10;
  @keyframes lazyAnimation {
    from {background-color: #444;}
    to {background-color: #555;}
  }
  color:#fff;
  height: 250px;
  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`

const OverlayCard = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 250px;
  padding: 0;
`

const OverlayCardTitle = styled.div`
  padding: 70px 4% 30px 4%;
  position: absolute;
  bottom: 0;
  min-width: 92%;
  background-color: rgba(0,0,0,0);
  background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,1));
  @media (max-width: 768px) {
    min-width: 90%;
    padding: 70px 5% 30px 5%;
    h3{
      font-size: 24px;
    }
  }
`

export default function CategoryCards( { category } ) {
  return (
    <CategoryCardsArea> 
        <OverlayCard>
          <a href={`/news/${category.slug}`}>
            <Image
              src={`/${category.thumbnail}`}
              alt={category.name}
              layout="fill"
              objectFit="cover"
            />
            <OverlayCardTitle>
              <H3 fontSize={26} fontWeight={500} color={"#fff"} marginBottom={5}>{category.name}</H3>
            </OverlayCardTitle>
          </a>
        </OverlayCard>
    </CategoryCardsArea>
  )
}