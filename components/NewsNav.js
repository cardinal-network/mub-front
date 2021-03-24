import styled from 'styled-components';
import { MoreHoriz } from '@material-ui/icons';
import MoreButton from '../components/MoreButton';

const NewsNavArea = styled.nav`
  position: relative;
  @media (max-width: 768px) {
    display:none;
  }
`

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  padding: 0;
  color: #999;
  & > :first-child a{
    color: #fff;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

const NavLi = styled.li`
  display: flex;
  padding: 15px 30px 15px 0;
  cursor:pointer;
  a {
    color:#999;
    border-bottom: 2px solid rgba(0,0,0,0);
    padding-bottom: 8px;
    &:hover {
      color: #fff;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  &:hover {
    color:${({ theme }) => theme.colors.primary};
  }
`

export default function NewsNav() {
  return (
    <NewsNavArea>
      <div className="row align-center">
        <NavUl>
          <NavLi><a href='/'>First page</a></NavLi>
          <NavLi><a href='news/articles'>Articles</a></NavLi>
          <NavLi><a href='news/lifestyle'>Lifestyle</a></NavLi>
          <NavLi><a href='news/music-business'>Music Business</a></NavLi>
          <NavLi><a href='news/music-history'>Music History</a></NavLi>
          <NavLi><a href='news/people'>People</a></NavLi>
          <NavLi><a href='news/releases'>Releases</a></NavLi>
        </NavUl>
        <MoreButton><MoreHoriz/></MoreButton>
      </div>
    </NewsNavArea>
  )
}