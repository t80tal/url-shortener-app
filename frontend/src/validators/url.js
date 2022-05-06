// Url validator function

const urlValidator = (value) => {
    if ((value.length > 2) && value.includes('.') && (value[0] !== '.') && (value[value.length - 1] !== '.')) {
        return true
    } else {
        return false
    }
}

export default urlValidator