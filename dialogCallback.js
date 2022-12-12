class Dialog {
    constructor(){
        this.callbacks = [];
    }
    onclose(callbackFunction) {
        // store callback
        // this.callback = callbackFunction;
        this.callbacks.push(callbackFunction);
    }

    close() {
        // invoke the callback
        // this.callback();
        let index = -1;
        while(++index < this.callbacks.length)
        this.callbacks[index]();
    }
}

module.exports = Dialog;