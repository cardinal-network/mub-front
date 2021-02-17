import styled from 'styled-components';
import Header from '../components/Header';

const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <div className='container'>
        <h1>NextJS</h1>
        <h2>Subtitle de NextJs</h2>
      </div>
    </main>
    </>
  )
}