import { useState, useEffect } from "react";

import { SearchCountry } from "../components/SearchCountry";
import { CheckIn } from "../components/CheckIn";
import { CheckOut } from "../components/CheckOut";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Adults } from "../components/Adults";
import { Children } from "../components/Children";
import { Rooms } from "../components/Rooms";
import { ChildAge } from "../components/ChildAge";
import { Tour } from "../components/Tour";

import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { fetchHeader } from "../store/actions/ActionsCreator";
import { fetchCountries } from '../store/actions/ActionsCreator';
import { fetchSelectedTours } from "../store/actions/ActionsCreator";
import { fetchFooter } from "../store/actions/ActionsCreator";

import "../scss/BookingPage.scss";


export function BookingPage() {

    const dispatch = useAppDispatch();
    const header = useAppSelector(state => state.header.header);
    const countries = useAppSelector(state => state.countries.countries);
    const tours = useAppSelector(state => state.tours.tours);
    const footer = useAppSelector(state => state.footer.footer);

    const [adults, setAdults] = useState('1');
    const [children, setChildren] = useState('0');
    const [rooms, setRooms] = useState('1');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [childrenAge, setChildrenAge] = useState<number[]>([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [searchResult, setSearchResult] = useState({});

    useEffect(() => {
        dispatch(fetchHeader());
        dispatch(fetchCountries());
        dispatch(fetchFooter());
    }, []);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < Number(children); i++) {
            arr.push(i);
        };
        setChildrenAge(arr);
    }, [children]);

    const submitSearchPackages = () => {
        // console.log(selectedCountry);
        // console.log(checkin);
        // console.log(checkout);
        // console.log(rooms);
        // console.log(adults);
        // console.log(children);

        const childAgeArr = document.querySelectorAll<any>('.childage-container .childage');
        const ages = [];
        for (let i = 0; i < childAgeArr.length; i++) {
            ages.push(childAgeArr[i].value);
        }

        dispatch(fetchSelectedTours(selectedCountry.toLowerCase()));

        setSearchResult({
            selectedCountry,
            checkin,
            checkout,
            rooms,
            adults,
            children,
            childAgeArr: JSON.stringify(ages)
        })
    }


    return (
        <div className="BookingPage">
            <Header header={header} />

            <div className="search">

                <div className="check-country">
                    <SearchCountry countries={countries} setSelectedCountry={setSelectedCountry} />
                </div>

                <div className="check-date">
                    <CheckIn checkin={checkin} setCheckin={setCheckin} />
                    <CheckOut checkin={checkin} checkout={checkout} setCheckout={setCheckout} />
                </div>

                <div className="check-info">
                    <div className="check-person">
                        <Rooms rooms={rooms} setRooms={setRooms} />
                        <Adults adults={adults} setAdults={setAdults} />
                        <Children children={children} setChildren={setChildren} />
                    </div>

                    <div className="childage-container">
                        {
                            childrenAge.map(el => <ChildAge key={el} />)
                        }
                    </div>
                </div>

                <button className="search-btn" onClick={submitSearchPackages}>SEARCH</button>
            </div>

            <div className="tours">
                {
                    tours.map(el => <Tour key={el.id} {...el} searchResult={searchResult} />)
                }
            </div>

            <Footer footer={footer} />
        </div>
    )
}
