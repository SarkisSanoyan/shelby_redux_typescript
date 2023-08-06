import { useEffect } from "react";

import { Slider } from "../components/Slider";
import { HotTours } from "../components/HotTours";
import { OurRating } from "../components/OurRating";
import { MainTours } from "../components/MainTours";
import { PopularTours } from "../components/PopularTours";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { fetchHeader } from "../store/actions/ActionsCreator";
import { fetchSliders } from '../store/actions/ActionsCreator';
import { fetchHotTours } from '../store/actions/ActionsCreator';
import { fetchOurRating } from "../store/actions/ActionsCreator";
import { fetchMainTours } from "../store/actions/ActionsCreator";
import { fetchPopularTours } from "../store/actions/ActionsCreator";
import { fetchFooter } from "../store/actions/ActionsCreator";

import '../scss/HomePage.scss';


export function HomePage() {

  const dispatch = useAppDispatch();
  const header = useAppSelector(state => state.header.header);
  const slider = useAppSelector(state => state.slider.slider);
  const hotTours = useAppSelector(state => state.hotTours.hotTours);
  const ourRating = useAppSelector(state => state.ourRating.ourRating);
  const mainTours = useAppSelector(state => state.mainTours.mainTours);
  const popularTours = useAppSelector(state => state.popularTours.popularTours);
  const footer = useAppSelector(state => state.footer.footer);

  useEffect(() => {
    dispatch(fetchHeader());
    dispatch(fetchSliders());
    dispatch(fetchHotTours());
    dispatch(fetchOurRating());
    dispatch(fetchMainTours());
    dispatch(fetchPopularTours());
    dispatch(fetchFooter());

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);


  return (
    <div className="HomePage">
      <Header header={header} />

      <Slider slider={slider} />
      <HotTours hotTours={hotTours} />
      <OurRating ourRating={ourRating} />
      <MainTours mainTours={mainTours} />
      <PopularTours popularTours={popularTours} />

      <Footer footer={footer} />
    </div>
  )
}
