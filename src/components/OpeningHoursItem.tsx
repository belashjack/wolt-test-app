interface OpeningHoursItemProps {
    dayName: string;
    isToday: boolean;
    isClosed?: boolean;
    openingHoursStr?: string;
}


export const OpeningHoursItem = (props: OpeningHoursItemProps) => {
    const { dayName, isToday, isClosed, openingHoursStr } = props;

    return (<li className="opening_hours_list_item">
        <span className="day_name">{dayName}{isToday && <span className="today">today</span>}</span>

        <span className={`times ${isClosed ? 'closed' : ''}`}>{isClosed ? 'Closed' : openingHoursStr}</span>
    </li>);
}
