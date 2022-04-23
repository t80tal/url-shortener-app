const fullnameValidator = (value) => {
    if (value.length > 2) {
        return true
    } else {
        return false
    }
}

export default fullnameValidator