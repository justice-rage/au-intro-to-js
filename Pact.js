class Pact {
    constructor(fn) {
        this.resolve = () => {

        }
        this.catch = () => {

        }
        fn(this.resolve, this.catch);
    }
    then() {

    }
    catch() {
        
    }
}

module.exports = Pact;