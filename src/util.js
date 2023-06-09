// calulate the ZWC for a given time
export function calculateZwk(hour, min) {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, min, 0);
    const begin = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 30, 0);
    const diff = end.getTime() - begin.getTime(); // This is the difference in milliseconds    
    const diffInMinutes = Math.round(diff / 60000); // convert to minutes
    const zwc = Math.floor(diffInMinutes / 6);    
    return zwc;
}

// to get a list of month names
export function getMonthNames(locale = 'de') {
    const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString(locale, { month: 'long' }))

    return months;
}

// to get a list of day in a month
export function getMonthDays(month, year = new Date().getFullYear()) {
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }    

    return days;
}


export function getCurrentMonth() {
    return new Date().getMonth();
}

export function IsWeekend(day) {
    return day.getDay() === 0 || day.getDay() === 6;
}