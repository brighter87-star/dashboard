export function parseDate(date) {
    date = new Date(date);
    return {
        year: String(date.getFullYear()),
        month: String(date.getMonth() + 1).padStart(2, '0'),
        day: String(date.getDate()).padStart(2, '0'),
    };
}

export function getLastUpdated(delta = 1) {
    const now = new Date();
    if (now.getHours() < 7 || (now.getHours() === 7 && now.getMinutes() < 30)) {
        now.setDate(now.getDate() - delta);
    } else {
        now.setDate(now.getDate() - delta + 1);
    }
    return now;
}

export function makeDateyyyymmdd(date) {
    date = new Date(date);
    const { year, month, day } = parseDate(date);
    return `${year}-${month}-${day}`;
}
