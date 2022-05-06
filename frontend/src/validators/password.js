// Password validator function

const passwordValidator = (value) => {
    if (value.length > 5) {
        return true
    } else {
        return false
    }
}

export default passwordValidator