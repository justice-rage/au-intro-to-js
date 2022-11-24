function isEnough(cost, money) {
    if (money >= cost) {
        return true;
    }   if (money <= cost)
        return false;
}

module.exports = isEnough;