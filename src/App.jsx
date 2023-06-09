import { useState } from "react";
import SelectMonth from "./components/SelectMonth";
import CalenderDaysTable from "./components/CalenderDaysTable";
import { getCurrentMonth } from "./util.js";

const App = () => {
    const currentMont = getCurrentMonth();    
    const [month, setMonth] = useState(currentMont);

    return (
        <div>
            <h1>ZWk App</h1>
            <SelectMonth month={month} setMonth={setMonth} />
            <CalenderDaysTable selectedMonth={month} />
            
        </div>
    )
}

export default App;