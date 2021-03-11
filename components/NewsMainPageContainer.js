import NewsNav from '../components/NewsNav';
import NewsMainSlider from '../components/NewsMainSlider';
import AdContainer from './AdContainer';
import NewsCard from '../components/NewsCard';

export default function NewsMainPageContainer({ posts }) {
  return (
    <main>
      <div className="container">
        <NewsNav/>
        <div className="row">
          <NewsMainSlider/>
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