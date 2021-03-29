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

const AdHomeContainer = styled.div`
  width: 100%;
  height: 200px;
  margin: 50px 0 35px 0;
  padding: 10px;
  background: #333;
  position: relative;
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
          <aside>
            <AdContainer Height={480} margins={0} />
          </aside>
        </div>
        <div className="row">
          <div className="grid-mansonry">
            {posts.map((post) => (
                <NewsCard post={post} key={post}/>
              )
            )}
          </div>
          <aside>
            <AdContainer Height={480} margins={"20px 0"} />
          </aside>
        </div>
      </div>
    </main>
  )
}