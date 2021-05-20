import styled from 'styled-components'

const CollapseSideMenu = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.shadow_1};
  width: 100%;
  height: ${props => `${props.Height}`}px;
  border-radius: 6px;
  margin: ${props => `${props.margins}`};
  padding: 0 0 10px 0;
  text-align:center;
  button{
    width: 100%;
    background: #444;
    color: #fff;
    border: 0;
    padding: 25px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    &:hover {
        background: #474747;
    }
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    /* width: 100%; */
    padding: 25px;
    li{
        label{
            margin-left: 10px;
        }
    }
  }
  @media (max-width: 1100px){
    display: none;
  }
`;

export default CollapseSideMenu;