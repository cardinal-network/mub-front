import styled from 'styled-components';
import Image from 'next/image';
import { H3, H4 } from '../components/Titles';
import { categories } from '../data/newsCategories';

const SliderArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  animation: lazyAnimation 1s 10;
  @keyframes lazyAnimation {
    from {background-color: #444;}
    to {background-color: #555;}
  }
  color:#fff;
  min-height: 500px;
  flex: 37.5%;
  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`

const OverlayCard = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 500px;
  padding: 0;
`

const OverlayCardTitle = styled.div`
  padding: 70px 4% 30px 4%;
  position: absolute;
  bottom: 0;
  min-width: 92%;
  min-height: 110px;
  background-color: rgba(0,0,0,0);
  background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,1));
  @media (max-width: 768px) {
    min-width: 90%;
    padding: 70px 5% 30px 5%;
    h3{
      font-size: 28px;
    }
    h4{
      font-size: 14px;
    }
  }
`

const PostFeatureImageCategoryButton = styled.div`
  padding: 10px 15px;
  position: absolute;
  top: 30px;
  left: 4%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  a{
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: 768px) {
    top: 20px;
    left: 5%;
  }
`

export default function NewsMainSlider({ sliderPost }) {
  const categoryId = sliderPost.categories;
  const categoryFinder = categories.find(category => category.id === parseInt(categoryId));
  return (
    <SliderArea> 
        <OverlayCard>
          <a href={`/news/${categoryFinder.slug}/${sliderPost.slug}`}>
            <Image
              src={sliderPost.fimg_url}
              alt={sliderPost.title.rendered}
              layout="fill"
              objectFit="cover"
            />
            <PostFeatureImageCategoryButton><a href={`/news/${categoryFinder.slug}`}>{categoryFinder.name}</a></PostFeatureImageCategoryButton>
            <OverlayCardTitle>
              <H3 fontSize={30} fontWeight={700} color={"#fff"} marginBottom={10}>{sliderPost.title.rendered}</H3>
              <H4 fontSize={16} fontWeight={300} color={"#fff"} marginBottom={10}>{sliderPost.title.rendered}</H4>
            </OverlayCardTitle>
          </a>
        </OverlayCard>
    </SliderArea>
  )
}