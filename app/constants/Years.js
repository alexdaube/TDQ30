let generateYears = function () {
    let year = new Date().getFullYear();
    let years = [];
    for (let i = 0; i < 100; i++) {
        years.push(year);
        year -= 1;
    }
    return years;
};

export default generateYears();

