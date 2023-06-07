import { useState } from "react";
import SelectMonth from "./components/SelectMonth";
import { getCurrentMonth } from "./util.js";

const App = () => {
    const currentMont = getCurrentMonth();    
    const [month, setMonth] = useState(currentMont);

    return (
        <div>
            <h1>ZWk App</h1>
            <SelectMonth month={month} setMonth={setMonth} />
            <div>
                <h2>Days</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Begin Hour</th>
                            <th>End Hour</th>
                            <th colSpan={3}>Action</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <label htmlFor="1">Begin:<input type="text"></input></label>                                
                            </td>
                            <td>
                                <label htmlFor="1">End:<input type="text"></input></label>
                            </td>                            
                            <td>
                                <label htmlFor="holiday">Holiday:</label>
                                <input id="holiday" type="radio" name="1" value="Holiday"></input>                                    
                            </td>
                            <td>
                                <label htmlFor="sick">Sick:</label>
                                <input id="sick" type="radio" name="1" value="Sick"></input>                                    
                            </td>
                            <td>
                                <label htmlFor="not_working">Not Working:</label>
                                <input id="not_working" type="radio" name="1" value="Not Working"></input>
                            </td>
                            <td>
                                <label htmlFor="1">Result</label>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <label htmlFor="1">Begin:<input type="text"></input></label>                                
                            </td>
                            <td>
                                <label htmlFor="1">End:<input type="text"></input></label>
                            </td>                            
                            <td>
                                <label htmlFor="holiday">Holiday:</label>
                                <input id="holiday" type="radio" name="1" value="Holiday"></input>                                    
                            </td>
                            <td>
                                <label htmlFor="sick">Sick:</label>
                                <input id="sick" type="radio" name="1" value="Sick"></input>                                    
                            </td>
                            <td>
                                <label htmlFor="not_working">Not Working:</label>
                                <input id="not_working" type="radio" name="1" value="Not Working"></input>
                            </td>
                            <td>
                                <label htmlFor="1">Result</label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={8}>WEEKEND</td>
                        </tr>
                        <tr>
                            <td colSpan={8}>WEEKEND</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <label htmlFor="1">Begin:<input type="text"></input></label>                                
                            </td>
                            <td>
                                <label htmlFor="1">End:<input type="text"></input></label>
                            </td>                            
                            <td>
                                <label htmlFor="holiday">Holiday:</label>
                                <input id="holiday" type="radio" name="1" value="Holiday"></input>                                    
                            </td>
                            <td>
                                <label htmlFor="sick">Sick:</label>
                                <input id="sick" type="radio" name="1" value="Sick"></input>                                    
                            </td>
                            <td>
                                <label htmlFor="not_working">Not Working:</label>
                                <input id="not_working" type="radio" name="1" value="Not Working"></input>
                            </td>
                            <td>
                                <label htmlFor="1">Result</label>
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th align="right" colSpan={8}>
                                <button>Save</button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default App;