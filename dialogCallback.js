class Dialog {
    onclose(callbackFunction) {
        // store callback
        this.callback = callbackFunction;
    }

    close() {
        // invoke the callback
        this.callback();
    }
}