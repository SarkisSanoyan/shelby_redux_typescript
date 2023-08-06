import { useState, useEffect } from "react";

interface IProps {
    checkin: string;
    checkout: string;
    setCheckout: any;
}

export function CheckOut({ checkin, checkout, setCheckout }: IProps) {

    return (
        <div className="CheckOut">
            <label>Check-out date </label>
            <input type="date" min={checkin} value={checkout} onChange={e => setCheckout(e.target.value)} />
        </div>
    )
}
