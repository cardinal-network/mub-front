import styled from 'styled-components'

const AdContainer = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.shadow_1};
  width: 25%;
  height: ${props => `${props.Height}`}px;
  border-radius: 6px;
  margin: ${props => `${props.margins}`};
  padding: 10px;
  text-align:center;
  &::before {
    content: "ADVERTISEMENT";
    font-size:11px;
    color:#666;
  }
  @media (min-width: 1100px) and (max-width: 1360px) {
    flex: 30%;
  }
  @media (max-width: 1100px){
    display: none;
  }
`;

export default AdContainer;