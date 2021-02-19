import styled from 'styled-components';
import Header from '../components/Header';
import NewsMainPage from '../components/NewsMainPage';

const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
    <Header/>
    <NewsMainPage/>
    </>
  )
}