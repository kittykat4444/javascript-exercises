function removeFromArray(array, number, secondNumber = undefined, thirdNumber = undefined, fourthNumber = undefined) {
    let filteredOnce = array.filter((value) => value !== number);
    let filteredTwice = filteredOnce.filter((value) => value !== secondNumber);
    let filteredThird = filteredTwice.filter((value) => value !== thirdNumber);
    return filteredThird.filter((value) => value !== fourthNumber);
}

module.exports = removeFromArray;


