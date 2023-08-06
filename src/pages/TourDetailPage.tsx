import { useState, useEffect, ChangeEvent } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { fetchHeader } from "../store/actions/ActionsCreator";
import { fetchTourById } from '../store/actions/ActionsCreator';
import { fetchFooter } from "../store/actions/ActionsCreator";

import "../scss/TourDetailPage.scss";

import axios from "../axios";


export function TourDetailPage() {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const header = useAppSelector(state => state.header.header);
    const tour = useAppSelector(state => state.tour.tour);
    const footer = useAppSelector(state => state.footer.footer);
    const [queryData, setQueryData] = useState<any>({});

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        dispatch(fetchHeader());
        dispatch(fetchTourById(Number(id)));
        dispatch(fetchFooter());

        setQueryData({
            selectedCountry: searchParams.get("selectedCountry") || "",
            checkin: searchParams.get("checkin") || "",
            checkout: searchParams.get("checkout") || "",
            rooms: searchParams.get("rooms") || "",
            adults: searchParams.get("adults") || "",
            children: searchParams.get("children") || "",
            childAgeArr: searchParams.get("childAgeArr") || ""
        });
    }, []);

    const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await axios.post("/orders", {
            phone,
            email,
            name: tour.name,
            country: tour.country,
            transport_depart: tour.transport_depart,
            transport_arrive: tour.transport_arrive,
            selectedCountry: queryData.selectedCountry,
            checkin: queryData.checkin,
            checkout: queryData.checkout,
            rooms: queryData.rooms,
            adults: queryData.adults,
            children: queryData.children,
            childAgeArr: queryData.childAgeArr
        });

        navigate("/");
    }

    return (
        <div className="TourDetailPage">
            <Header header={header} />

            <div className="tour-info">
                <div className="tour-name">Tour: {tour.name}</div>
                <div className="tour-country">City: {tour.country}</div>
                <div className="tour-transport_depart">Departure info: {tour.transport_depart}</div>
                <div className="tour-transport_arrive">Arrival info: {tour.transport_arrive}</div>
            </div>

            <div className="query-info">
                <div className="queryData-selectedCountry">Selected city: {queryData.selectedCountry}</div>
                <div className="queryData-checkin">Check-in: {queryData.checkin}</div>
                <div className="queryData-checkout">Check-out: {queryData.checkout}</div>
                <div className="queryData-rooms">Rooms: {queryData.rooms}</div>
                <div className="queryData-adults">Adults: {queryData.adults}</div>
                <div className="queryData-children">Children: {queryData.children}</div>
                <div className="queryData-childAgeArr">Children ages: {queryData.childAgeArr}</div>
            </div>

            <form className="form-submit" onSubmit={submitHandler}>
                <input type="text" placeholder="Enter your phone..." value={phone} onChange={e => setPhone(e.target.value)} />
                <input type="email" placeholder="Enter your email..." value={email} onChange={e => setEmail(e.target.value)} />
                <input type="submit" value="Submit" />
                <input type="submit" value="Go back" onClick={() => navigate("/booking")} />
            </form>

            <Footer footer={footer} />
        </div>
    )
}
