


interface IProps {
    children: string;
    setChildren: any;
}

export function Children({ children, setChildren }: IProps) {
    return (
        <div className="Children">
            <label htmlFor="children">Children </label>
            <input id="children" type="number" min="0" step="1" max="10" value={children} onChange={e => setChildren(e.target.value)} />
        </div>
    )
}
