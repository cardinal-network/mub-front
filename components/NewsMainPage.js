import styled from 'styled-components';
import NewsNav from '../components/NewsNav';
import NewsMainSlider from '../components/NewsMainSlider';
import AdContainer from '../components/AdContainer';

export default function Header() {
  return (
    <main>
      <NewsNav/>
      <div className="container">
        <NewsMainSlider/>
        <AdContainer Height={430}/>
      </div>
    </main>
  )
}