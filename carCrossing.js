function carCrossing(aCrossing, bCrossing) {
    return (aCrossing && !bCrossing) || (bCrossing && !aCrossing);
}

module.exports = carCrossing;