import styled from 'styled-components'

const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: black;
  font-size: 14px;
  font-weight:bold;
  border-radius:6px;
  border:0;
  padding:10px 20px;
  min-height:40px;
  &:hover {
    background: ${({ theme }) => theme.colors.light_1};
  }
`;

export default PrimaryButton;