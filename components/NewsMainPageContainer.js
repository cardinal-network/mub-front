import NewsNav from '../components/NewsNav';
import NewsMainSlider from '../components/NewsMainSlider';
import AdContainer from '../components/AdContainer';
import NewsCard from '../components/NewsCard';

export default function NewsMainPageContainer({ posts }) {
  return (
    <main>
      <NewsNav/>
        <div className="container">
          <NewsMainSlider/>
          <AdContainer Height={480} margins={0} />
        </div>
        <div className="container">
          <div className="grid-mansonry">
            {posts.map((post) => (
                <NewsCard post={post} />
              )
            )}
          </div>
          <AdContainer Height={600} margins={"20px 0 0 0"} />
        </div>
    </main>
  )
}