function catchError(fn) {
    try {
        fn();
    }
    catch(ex) {

    }
}

module.exports = catchError;