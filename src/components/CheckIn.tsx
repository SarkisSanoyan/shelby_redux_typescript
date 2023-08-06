import { useState, useEffect } from "react";

interface IProps {
    checkin: string;
    setCheckin: any;
}

export function CheckIn({ checkin, setCheckin }: IProps) {
    const [minValue, setMinValue] = useState('');

    useEffect(() => {
        let date = new Date();
        let firstDay = date.getFullYear() + "-"
            + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1))
            + "-" + date.getDate();
        setMinValue(firstDay);
    }, [])


    return (
        <div className="CheckIn">
            <label>Check-in date </label>
            <input type="date" min={minValue} value={checkin} onChange={e => setCheckin(e.target.value)} />
        </div>
    )
}
