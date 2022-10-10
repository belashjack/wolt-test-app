import './OpeningHours.css';
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";

export function OpeningHours() {
    return (
        <section className="opening_hours">
            <header className="opening_hours_header">
                <span className="opening_hours_header_icon"><AiOutlineClockCircle size="20" color='#A1A2A4' /></span>
                Opening hours
            </header>
            <ul className="opening_hours_list">
                <li className="opening_hours_list_item">
                    <span className="day_name">Monday</span>
                    <span className="times">10 AM - 6 PM</span>
                </li>
                <li className="opening_hours_list_item">
                    <span className="day_name">Tuesday</span>
                    <span className="times closed">Closed</span>
                </li>
                <li className="opening_hours_list_item">
                    <span className="day_name">Tuesday<span className="today">Today</span></span>
                    <span className="times closed">Closed</span>
                </li>
            </ul>
        </section>
    );
}
