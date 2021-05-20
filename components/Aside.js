import styled from 'styled-components'

const Aside = styled.div`
flex: 25%;
width: 25%;
position: relative;
margin: ${props => `${props.margins}`};
@media (max-width: 1100px){
  display: none;
}
`;

export default Aside;