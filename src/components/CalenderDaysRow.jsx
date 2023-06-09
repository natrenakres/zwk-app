import { useState } from "react";
import { calculateZwk }  from '../util.js'


const CalenderDaysRow = ({ day }) => {
    const [beginHour, setBeginHour] = useState('');
    const [endHour, setEndHour] = useState('');
    const [result, setResult] = useState('');
    const [notWorking, setNotWorking] = useState(false);

    function calculateTime(time) {                
        if (time === '') return 0;
        if (!time.includes(':')) return 0;

        const [hour, minute] = time.split(':');
        return calculateZwk(hour, minute);
    }

    return (
        <tr>
            <td>{day.getDate()}</td>
            <td>
                <label htmlFor="1">Begin:
                <input type="text" 
                    value={beginHour}
                    onChange={(e) => setBeginHour(e.target.value)}
                    disabled={notWorking}></input></label>
            </td>
            <td>
                <label htmlFor="1">End:
                <input type="text" 
                        value={endHour}
                        onChange={(e) => setEndHour(e.target.value)}
                        disabled={notWorking}></input></label>
            </td>            
            <td>
                <label htmlFor="not_working">Not Working:</label>
                <input id="not_working" type="checkbox" checked={notWorking}
                    onChange={(e) => setNotWorking(e.target.checked)}
                ></input>
            </td>
            <td align="center">
                <label htmlFor="1">{result} </label>
                <table>
                    <tbody>
                    <tr>
                        <td>{calculateTime(beginHour)}</td>
                        <td>{calculateTime(endHour)}</td>
                    </tr>
                    </tbody>
                </table>
            </td>
            <td>
                {day.toLocaleDateString()}
            </td>
            <td>
                <button onClick={() => setResult((calculateTime(endHour) - calculateTime(beginHour))-85)}>Calculate {result}</button>
            </td>
        </tr>
    )
}

export default CalenderDaysRow;