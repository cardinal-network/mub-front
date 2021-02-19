import styled from 'styled-components';
import Link from 'next/link';

const SliderArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px 0 0;
  padding: 0;
  background: #999;
  color:#fff;
  flex:75%;
  min-height: 450px;
`

const SliderColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
`

const OverlayCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  color:#fff;
  min-height: ${props => `${props.minHeight}`}px;
`

export default function NewsMainSlider() {
  return (
    <SliderArea>
      <SliderColumn>
        <OverlayCard minHeight={450}>
          AA
        </OverlayCard>
      </SliderColumn>
      <SliderColumn>
        <OverlayCard minHeight={225}>
          BB
        </OverlayCard>
        <OverlayCard minHeight={225}>
          CC
        </OverlayCard>
      </SliderColumn>
    </SliderArea>
  )
}