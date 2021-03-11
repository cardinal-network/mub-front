import styled from 'styled-components';
import Link from 'next/link';

const SliderArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px 0 0;
  padding: 0;
  background: #000;
  color:#fff;
  flex:75%;
  min-height: 500px;
  border-radius:6px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SliderColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  position: relative;
  @media (min-width: 576px) and (max-width: 768px) {
    flex: 100%;
    flex-direction: row;
  }
`

const OverlayCard = styled.div`
  padding: 0;
  display: flex;
  align-items: flex-end;
  min-height: ${props => `${props.minHeight}`}px;
  background: url('${props => `${props.BackgroundImage}`}');
  background-size: ${props => `${props.BackgroundSize}`};
  border-top-left-radius: ${props => `${props.TopLeftRadius}`}px;
  border-bottom-left-radius: ${props => `${props.BottomLeftRadius}`}px;
  border-top-right-radius: ${props => `${props.TopRightRadius}`}px;
  border-bottom-right-radius: ${props => `${props.BottomRightRadius}`}px;
`

const OverlayCardTitle = styled.div`
  padding: 60px 35px 30px 35px;
  position: relative;
  z-index: 2;
  background-color: rgba(0,0,0,0);
  background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.7));
  h3{
    margin-bottom:10px;
    font-size:12px;
    color:#fff;
  }
  h4{
    font-size:21px;
    color:#fff;
  }
`

export default function NewsMainSlider() {
  return (
    <SliderArea>
      <SliderColumn>
        <OverlayCard 
        minHeight={500}
        BackgroundImage={'https://exame.com/wp-content/uploads/2021/02/nasa-perseverance-ilustracao.jpg'}
        BackgroundSize={'100% 100%'}
        TopLeftRadius={6} 
        BottomLeftRadius={6} 
        TopRightRadius={0} 
        BottomRightRadius={0}
        >
          <OverlayCardTitle>
            <h3>MERCADO DA MÚSICA</h3>
            <h4>Country e R&B se combinam em novo e sensível álbum de Chris Stapleton</h4>
          </OverlayCardTitle>
        </OverlayCard>
      </SliderColumn>
      <SliderColumn>
        <OverlayCard 
        minHeight={250}
        BackgroundImage={'https://exame.com/wp-content/uploads/2020/10/diversidade-inclusao-empresas.jpg'} 
        BackgroundSize={'100%'}
        TopLeftRadius={0} 
        BottomLeftRadius={0} 
        TopRightRadius={6} 
        BottomRightRadius={0}
        >
          <OverlayCardTitle>
            <h3>MERCADO DA MÚSICA</h3>
            <h4>Country e R&B se combinam em novo e sensível álbum de Chris Stapleton</h4>
          </OverlayCardTitle>
        </OverlayCard>
        <OverlayCard 
        minHeight={250}
        BackgroundImage={'https://exame.com/wp-content/uploads/2020/10/apple_nso-bangkok_ratchaprasong_07282020.jpg'} 
        BackgroundSize={'100%'}
        TopLeftRadius={0} 
        BottomLeftRadius={0} 
        TopRightRadius={0} 
        BottomRightRadius={6}
        >
          <OverlayCardTitle>
            <h3>MERCADO DA MÚSICA</h3>
            <h4>Country e R&B se combinam em novo e sensível álbum de Chris Stapleton</h4>
          </OverlayCardTitle>
        </OverlayCard>
      </SliderColumn>
    </SliderArea>
  )
}