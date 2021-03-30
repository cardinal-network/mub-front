import React from 'react';
import { useKeenSlider } from 'keen-slider/react';

export default function KeenSlider({ posts, sliderPosts }) {
    const [sliderRef, slider] = useKeenSlider();
    return (
        <>
        <div ref={sliderRef}>
            <div class="keen-slider__slide">1</div>
            <div class="keen-slider__slide">2</div>
            <div class="keen-slider__slide">3</div>
        </div>
        </>
    )
  }