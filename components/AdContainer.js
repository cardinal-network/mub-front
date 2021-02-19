import styled from 'styled-components'

const AdContainer = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.shadow_1};
  width:470px;
  height: ${props => `${props.Height}`}px;
  border-radius: 6px;
  padding: 10px;
  text-align:center;
  &::before {
    content: "ADVERTISEMENT";
    font-size:11px;
    color:#666;
  }
`;

export default AdContainer;