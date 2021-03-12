import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: ${props => `${props.fontSize}`}px;
  color: ${props => `${props.color}`};
  font-weight: ${props => `${props.fontWeight}`};
  margin-bottom: ${props => `${props.marginBottom}`}px;
`;

export const H2 = styled.h2`
  font-size: ${props => `${props.fontSize}`}px;
  color: ${props => `${props.color}`};
  font-weight: ${props => `${props.fontWeight}`};
  margin-bottom: ${props => `${props.marginBottom}`}px;
  line-height: ${props => `${props.fontSize + 8}`}px;
`;

export const H3 = styled.h3`
  font-size: ${props => `${props.fontSize}`}px;
  color: ${props => `${props.color}`};
  font-weight: ${props => `${props.fontWeight}`};
  margin-bottom: ${props => `${props.marginBottom}`}px;
`;