import { useEffect } from "react";

import { Header } from "../components/Header";
import { About } from "../components/About";
import { RatingBars } from "../components/RatingBars";
import { HotTours } from "../components/HotTours";
import { Footer } from "../components/Footer";

import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { fetchHeader } from "../store/actions/ActionsCreator";
import { fetchHotTours } from '../store/actions/ActionsCreator';
import { fetchFooter } from "../store/actions/ActionsCreator";

import "../scss/AboutPage.scss";


export function AboutPage() {

  const dispatch = useAppDispatch();
  const header = useAppSelector(state => state.header.header);
  const hotTours = useAppSelector(state => state.hotTours.hotTours);
  const footer = useAppSelector(state => state.footer.footer);

  useEffect(() => {
    dispatch(fetchHeader());
    dispatch(fetchHotTours());
    dispatch(fetchFooter());

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);


  return (
    <div className="AboutPage">
      <Header header={header} />

      <About />
      <HotTours hotTours={hotTours} />
      <RatingBars />

      <Footer footer={footer} />
    </div>
  )
}
