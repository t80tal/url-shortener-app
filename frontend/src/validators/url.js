const urlValidator = (value) => {
    if (value.length > 3) {
        return true
    } else {
        return false
    }
}

export default urlValidator