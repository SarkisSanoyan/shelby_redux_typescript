

interface IProps {
    rooms: string;
    setRooms: any;
}

export function Rooms({ rooms, setRooms }: IProps) {
    return (
        <div className="Rooms">
            <label htmlFor="rooms">Rooms </label>
            <input id="rooms" type="number" min="1" step="1" max="30" value={rooms} onChange={e => setRooms(e.target.value)} />
        </div>
    )
}
