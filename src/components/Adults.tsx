

interface IProps {
    adults: string;
    setAdults: any;
}

export function Adults({ adults, setAdults }: IProps) {
    return (
        <div className="Adults">
            <label htmlFor="adults">Adults </label>
            <input id="adults" type="number" min="1" step="1" max="30" value={adults} onChange={e => setAdults(e.target.value)} />
        </div>
    )
}
