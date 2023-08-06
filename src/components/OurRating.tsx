import { useState, useEffect } from "react";
import { IOurRating } from "../models";
import CountUp from "react-countup";


export function OurRating({ ourRating }: { ourRating: IOurRating[] }) {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1000) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    })
  }, [])

  return (
    <div className="OurRating" style={{ position: "relative" }}>
      <h2>2023 MOST RATED DESTINATIONS NOW ON SALE</h2>

      <div className="ourRating-img" style={{
        backgroundImage: `url(images/sea-girl.jpg)`, backgroundPosition: "center", backgroundRepeat: "no-repeat",
        backgroundSize: "cover", height: "70vh"
      }}>
      </div>

      <div className="ourRating-box">
        {
          ourRating.map(el =>
            <div className="everyRating" key={el.id}>

              <div className="info">
                <span>
                  {scroll && <CountUp className="countup" end={el.count} duration={5} prefix="" suffix="" />}
                </span>
                <h3 className="rating-title">{el.title}</h3>
                <p className="rating-descr">{el.descr}</p>
              </div>
            </div>
          )
        }
      </div>

      <h4>Pleasure and leisure activities away from the home environment</h4>
    </div>
  )
}
