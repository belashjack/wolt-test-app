import { OpeningHours } from "./components/OpeningHours";
import data from "./data/data.json";
import { OpeningHoursData } from './types';

function App() {
    return (
        <div className="app">
            <OpeningHours data={data as OpeningHoursData} />
        </div>
    );
}

export default App;
