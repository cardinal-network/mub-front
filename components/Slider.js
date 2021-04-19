import React, { useState } from "react";
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  background: #000;
  flex: 75%;
  margin-right: 20px;
  @media (max-width: 1100px) {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column;
  }
`

export default function XSlider({ posts, sliderPosts }) {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ];
    const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    return (
      <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
      </Carousel>
    )
}