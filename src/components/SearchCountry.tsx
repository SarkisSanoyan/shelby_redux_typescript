import { useEffect, useState } from "react";
import { ICountry } from "../models";

interface IProps {
    countries: ICountry[],
    setSelectedCountry: any
}

export function SearchCountry({ countries, setSelectedCountry }: IProps) {

    const [input, setInput] = useState('');
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        if (input.length > 2) setDropdown(true);
        else setDropdown(false);
    }, [input])

    const handelClickListItem = async (name: string) => {
        await setInput(name);
        await setDropdown(false);
        setSelectedCountry(name);
    }

    return (
        <div className="SearchCountry">
            <h2>Search</h2>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Where are you going?" />
            {
                dropdown &&
                <ul>
                    {
                        countries
                            .filter(country => country.name.toLowerCase().includes(input.toLowerCase()))
                            .map(country => <li key={country.id} onClick={() => handelClickListItem(country.name)}>
                                {country.name}
                            </li>)
                    }
                </ul>
            }
        </div>
    )
}




