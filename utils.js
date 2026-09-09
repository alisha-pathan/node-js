const generateNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const celciusToFarenheit = (celcius) => {
    return (celcius * 9 ) / 5 + 32
}


module.exports = {generateNumber,celciusToFarenheit } 