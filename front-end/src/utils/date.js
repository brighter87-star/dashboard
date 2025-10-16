export function parseDate(date) {
    date = new Date(date);
    return {
        year: String(date.getFullYear()),
        month: String(date.getMonth() + 1).padStart(2, '0'),
        day: String(date.getDate()).padStart(2, '0'),
    };
}

export function getLastUpdated() {
    const now = new Date();
    if (now.getHours() < 7 || (now.getHours() === 7 && now.getMinutes() < 30)) {
        now.setDate(now.getDate() - 1);
    }
    return parseDate(now);
}
