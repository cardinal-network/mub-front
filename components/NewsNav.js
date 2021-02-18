import styled from 'styled-components';
import Link from 'next/link';
import { MoreHoriz } from '@material-ui/icons';
import MoreButton from '../components/MoreButton';

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  padding: 0;
  color:#fff;
`

const NavLi = styled.li`
  display: flex;
  padding:15px;
  cursor:pointer;
  a {
    color:#fff;
    border-bottom: 2px solid rgba(0,0,0,0);
    padding-bottom: 8px;
    &:hover {
      color:${({ theme }) => theme.colors.primary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  &:hover {
    color:${({ theme }) => theme.colors.primary};
  }
`

export default function NewsNav() {
  return (
    <nav>
      <div className='container'>
        <NavUl>
          <NavLi><Link href='/'>First page</Link></NavLi>
          <NavLi><Link href='/articles'>Articles</Link></NavLi>
          <NavLi><Link href='/lifestyle'>Lifestyle</Link></NavLi>
          <NavLi><Link href='/music-business'>Music Business</Link></NavLi>
          <NavLi><Link href='/music-history'>Music History</Link></NavLi>
          <NavLi><Link href='/people'>People</Link></NavLi>
          <NavLi><Link href='/releases'>Releases</Link></NavLi>
        </NavUl>
        <MoreButton><MoreHoriz/></MoreButton>
      </div>
    </nav>
  )
}