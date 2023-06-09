import CalenderDaysWeekendRow from './CalenderDaysWeekendRow';
import CalenderDaysRow from "./CalenderDaysRow";
import { getMonthDays, IsWeekend } from "../util";

const CalenderDaysTable = ({ selectedMonth }) => {
    const days = getMonthDays(selectedMonth);

    return (
        <div>
            <h2>Days</h2>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Begin Hour</th>
                        <th>End Hour</th>
                        <th>Action</th>
                        <th>Result</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        days.map((day, index) => {
                            return (
                                IsWeekend(day) ?
                                <CalenderDaysWeekendRow key={day.getDate()} /> :
                                <CalenderDaysRow key={day.getDate()} day={day} />
                            )
                        })
                    }

                </tbody>               
            </table>
        </div>
    )
}

export default CalenderDaysTable;