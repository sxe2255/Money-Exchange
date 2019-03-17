// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let cents = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    let rem;
    if (currency <= 0){
        let exchange = {};
        return exchange;
    }
    if (currency >= 10000){
        var exchange = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return exchange;
    }
    else for(var key in cents){
        let division = currency % cents[key];
        cents[key] = Math.floor(currency / cents[key]);
        currency = division;
        if (cents[key] == 0){
            delete cents[key];
        }
    }
    return cents;
}
