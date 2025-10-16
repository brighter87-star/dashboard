export function numberFormatter(value, fractionDigit) {
    value = parseFloat(value);
    const fmt = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: fractionDigit,
        maximumFractionDigits: fractionDigit,
    });
    if (value === null || value === undefined || Number.isNaN(value)) return '';
    return fmt.format(value);
}

export function pctFormatter(value, fractionDigit, addPct) {
    if (addPct) return `${numberFormatter(value * 100, fractionDigit)}%`;
    return `${numberFormatter(value * 100, fractionDigit)}`;
}
