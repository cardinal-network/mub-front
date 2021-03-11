import styled from 'styled-components'

const Breadcrumb = styled.ol`
  display: flex;
  list-style: none;
  padding: 0;
  li{
    font-size: 14px;
    font-weight: 400;
  }
  a{
    color: #fff;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
    &::after {
      content: "→";
      margin: 10px;
    }
  }
`;

export default Breadcrumb;