const customError = (massage , status) => {
    const error = new Error('');
    error.message = massage;
    error.status = status;
    return error
}

module.exports = { customError }