import styled from 'styled-components';
import Link from 'next/link';
import PrimaryButton from '../components/PrimaryButton';
import { Facebook, Instagram, PermIdentity, Search } from '@material-ui/icons';
import Image from 'next/image';

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  color:#fff;
`

const NavLi = styled.li`
  display: flex;
  padding: 15px 0 15px 30px;
  cursor:pointer;
  a {
    color:#fff;
    &:hover {
      color:${({ theme }) => theme.colors.primary};
    }
  }
  &:hover {
    color:${({ theme }) => theme.colors.primary};
  }
`

const NavUlDropDown = styled.ul`
  display:none;
`

export default function Nav() {
  return (
    <nav>
      <div className='container'>
        <Image
          src="/mub-music-logo.png"
          alt="Mub Music Logo"
          width={156}
          height={30}
        />
        <NavUl>
          <NavLi><Link href='/'>Home</Link></NavLi>
          <NavLi>Categories
            <NavUlDropDown>
              <li><Link href='/'>Cat1</Link></li>
              <li><Link href='/'>Cat2</Link></li>
              <li><Link href='/'>Cat3</Link></li>
              <li><Link href='/'>Cat4</Link></li>
            </NavUlDropDown>
          </NavLi>
          <NavLi><Link href='/news'>News</Link></NavLi>
          <NavLi><Link href='/signin'><PermIdentity/></Link></NavLi>
          <NavLi><Link href='/'><Search/></Link></NavLi>
          <NavLi><Link href='/signup'><PrimaryButton>Sign Up</PrimaryButton></Link></NavLi>
          <NavLi><Link href='https://www.facebook.com/'><Facebook/></Link></NavLi>
          <NavLi><Link href='https://www.instagram.com/'><Instagram/></Link></NavLi>
        </NavUl>
      </div>
    </nav>
  )
}