import {  getMonthNames } from "../util.js";

const SelectMonth = ({ month, setMonth }) => {
    const monthNames = getMonthNames();

    return (
        <label htmlFor="Month">Month: 
        <select value={month} onChange={e => setMonth(+e.target.value)}>
            {monthNames.map((monthName, index) => (
                <option key={index} value={index}>{monthName}</option>
            ))}
        </select>
        </label>        
    )
}

export default SelectMonth;