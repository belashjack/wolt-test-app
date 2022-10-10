import './OpeningHours.css';
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";
import { OpeningHoursData } from '../types';
import { OpeningHoursItem } from './OpeningHoursItem';

interface OpeningHoursProps {
    data: OpeningHoursData;
}

export const OpeningHours = (props: OpeningHoursProps) => {
    const { data } = props;

    const currentDayNumber = (new Date().getDay() + 7 - 1) % 7; // data is in the format with Monday first, Sunday last

    return (
        <section className="opening_hours">
            <header className="opening_hours_header">
                <span className="opening_hours_header_icon"><AiOutlineClockCircle size="20" color='#A1A2A4' /></span>
                Opening hours
            </header>
            <ul className="opening_hours_list">
                {Object.entries(data).map(([dayName, hoursData], index, array) => {
                    const isClosed = hoursData.length === 0;

                    if (isClosed) {
                        return <OpeningHoursItem key={dayName} dayName={dayName} isToday={index === currentDayNumber} isClosed />;
                    }

                    let start = 0;
                    let end = hoursData.length - 1;
                    let hoursDataCopy = [...hoursData];

                    if (hoursData[end].type === "open") {
                        const nextIndex = index === array.length ? 0 : index + 1;
                        const nextDayClosing = array[nextIndex][1][0].value;
                        hoursDataCopy = hoursDataCopy.concat({ type: "close", value: nextDayClosing });
                    }

                    if (hoursData[start].type === "close") {
                        hoursDataCopy = hoursDataCopy.slice(1);
                    }

                    const openClosePairs = hoursDataCopy.reduce<number[][]>((acc, curr, i) => {
                        return i % 2 === 0
                            ? [...acc, [curr.value]]
                            : [...acc.slice(0, -1), [...acc.slice(-1)[0], curr.value]];
                    }, []);

                    const openingHoursStr = openClosePairs.reduce((acc, openClosePair, i) => {
                        const openTimeHours = openClosePair[0] / 60 / 60;
                        const closeTimeHours = openClosePair[1] / 60 / 60;

                        return `${i === 0 ? acc : `${acc}, `}${openTimeHours % 12 !== 0 ? openTimeHours % 12 : openTimeHours} ${openTimeHours < 12 ? 'AM' : 'PM'} - ${closeTimeHours % 12 !== 0 ? closeTimeHours % 12 : closeTimeHours} ${closeTimeHours < 12 ? 'AM' : 'PM'}`;
                    }, '');

                    return <OpeningHoursItem key={dayName} dayName={dayName} isToday={index === currentDayNumber} openingHoursStr={openingHoursStr} />;
                })}
            </ul>
        </section>
    );
}
