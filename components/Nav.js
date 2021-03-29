import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import { Instagram, PermIdentity, Search, Menu } from '@material-ui/icons';
import Image from 'next/image';
import { server } from '../config';

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
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLiMobileMenuIcon = styled.li`
  display: none;
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
  @media (max-width: 768px) {
    display: flex;
  }
`

const NavUlDropDown = styled.ul`
  display:none;
`

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="row align-center">
          <a href={`${server}`}>
            <Image
              src="/mub-logo-icon.png"
              alt="Mub Music Logo"
              width={33}
              height={36}
            />
          </a>
          <NavUl>
            <NavLi><a href='/'>Home</a></NavLi>
            <NavLi><a href='/categories'>Categories</a>
              <NavUlDropDown>
                <li><a href='/'>Cat1</a></li>
                <li><a href='/'>Cat2</a></li>
                <li><a href='/'>Cat3</a></li>
                <li><a href='/'>Cat4</a></li>
              </NavUlDropDown>
            </NavLi>
            <NavLi><a href='/signin'><PermIdentity/></a></NavLi>
            <NavLi><a href='/'><Search/></a></NavLi>
            <NavLi><a href='/signup'><PrimaryButton>Sign Up</PrimaryButton></a></NavLi>
            <NavLi><a href='https://www.instagram.com/'><Instagram/></a></NavLi>
            <NavLiMobileMenuIcon><a href='/'><Menu/></a></NavLiMobileMenuIcon>
          </NavUl>
        </div>
      </div>
    </nav>
  )
}