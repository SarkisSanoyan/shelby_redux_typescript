
export interface IHeader {
    id: number;
    name: string;
    url?: string;
}

export interface ICountry {
    id: number;
    name: string;
}

export interface IBookingHeading {
    id: number;
    adults?: string;
    children?: string;
    rooms?: number;
}

export interface ITour {
    id?: number;
    name: string;
    country: string;
    hotel: string;
    transport_depart: string;
    transport_arrive: string;
    searchResult: {}
}

export interface ISlider {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    animationIn: string;
    animationOut: string;
}

export interface IHotTour {
    id?: number;
    title: string;
    descr: string;
    btn_text: string;
    image: string;
}

export interface IOurRating {
    id?: number;
    count: number;
    title: string;
    descr: string;
}

export interface IMainTour {
    id?: number;
    image: string;
    title: string;
    descr: string;
}

export interface IPopularTour {
    id?: number;
    image: string;
    title: string;
    descr: string;
    btn_text: string;
}

export interface IFooter {
    id: number;
    image?: string;
    phone?: number;
    mail?: string;
    address?: string;
    title: string;
    subtitle?: string;
    descr?: string;
    subtitle2: string;
    descr2?: string;
    info?: string;
    subtitle3?: string;
    descr3?: string;
    info2?: string;
    descr4?: string;
}

export interface IOrder {
    id: number;
    phone: number;
    email: string;
    name: string;
    country: string;
    transport_depart: string;
    transport_arrive: string;
    selectedCountry: string;
    checkin: string;
    checkout: string;
    rooms: number;
    adults: string;
    children: string;
    childAgeArr: []
}
