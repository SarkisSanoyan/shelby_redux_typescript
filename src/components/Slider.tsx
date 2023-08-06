import { useState, useEffect } from 'react';
import { ISlider } from '../models';


export function Slider({ slider }: { slider: ISlider[] }) {

  const [showSlide, setShowSlide] = useState(1);

  const moveSlider = (id: number) => {
    setShowSlide(id);
  };

  const prevSlide = () => {
    if (showSlide === 1) setShowSlide(slider.length)
    else setShowSlide(showSlide - 1);
  };

  const nextSlide = () => {
    if (showSlide === slider.length) setShowSlide(1);
    else setShowSlide(showSlide + 1);
  };

  setTimeout(nextSlide, 3000);
  

  return (
    <div className='Slider'>

      <div className="slider-wrap">
        {
          slider.map(slide =>
            <div key={slide.id} className={slide.id === showSlide ? 'slide active' : 'slide'}>

              <div className="slide-content">
                <div className="slide-img" style={{ backgroundImage: `url(${slide.url})`, position: "relative" }}></div>
                <div className="slide-title">
                  <h2>{slide.title}</h2>
                </div>
              </div>
            </div>
          )
        }
      </div>

      <ul className="slider-indicators">
        {
          slider.map(slide =>
            <li
              key={slide.id}
              className={slide.id === showSlide ? 'active' : ''}
              onClick={() => { moveSlider(slide.id) }}><span />
            </li>
          )
        }
      </ul>

      <span className="slide-arrow slide-arrow-prev"
        onClick={prevSlide} />
      <span className="slide-arrow slide-arrow-next"
        onClick={nextSlide} />
    </div>
  )
}


