function numberOfPizzas(orders) {
    let totalPizzas = 0;
    for(let index = 0; index < orders.length; index++) {
        totalPizzas += orders[index].pizzas;
    }
    return totalPizzas;
}

module.exports = numberOfPizzas;