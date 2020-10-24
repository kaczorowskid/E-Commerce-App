const monthDays = (): Array<number> => {
    const dayArray = [];
    for(let d = 1; d <= 31; d++) {
        dayArray.push(d);
    }
    return dayArray;
}

const years = (): Array<number> => {
    const yearsArray = [];
    const date = new Date();

    for(let y = 1970; y <= date.getFullYear(); y++) {
        yearsArray.push(y);
    }
    return yearsArray;
}


export {
    monthDays, years
}