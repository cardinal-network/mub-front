import styled from 'styled-components'

const MoreButton = styled.button`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.shadow_1};
  font-size: 14px;
  border-radius: 3px;
  border: 0;
  padding: 5px 8px;
  display: flex;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: black;
  }
`;

export default MoreButton;