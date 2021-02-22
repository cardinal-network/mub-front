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
        <AdContainer Height={480}/>
      </div>
      <div className="grid-mansonry">
        {posts.map((post) => (
            <NewsCard post={post} />
          )
        )}
      </div>
    </main>
  )
}