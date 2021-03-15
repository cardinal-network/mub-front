import NewsNav from '../components/NewsNav';
import NewsMainSlider from '../components/NewsMainSlider';
import AdContainer from './AdContainer';
import NewsCard from '../components/NewsCard';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  background: #000;
  flex: 75%;
  margin-right: 20px;
  @media (max-width: 1100px) {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column;
  }
`

export default function NewsMainPageContainer({ posts, sliderPosts }) {
  return (
    <main>
      <div className="container">
        <NewsNav/>
        <div className="row">
          <SliderContainer>
            {sliderPosts.map((sliderPost) => (
                  <NewsMainSlider sliderPost={sliderPost} key={sliderPost}/>
                )
            )}
          </SliderContainer>
          <AdContainer Height={480} margins={0} />
        </div>
        <div className="row">
          <div className="grid-mansonry">
            {posts.map((post) => (
                <NewsCard post={post} key={post}/>
              )
            )}
          </div>
          <AdContainer Height={600} margins={"20px 0 0 0"} />
        </div>
      </div>
    </main>
  )
}