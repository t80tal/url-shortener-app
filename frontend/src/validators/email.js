const emailValidator = (value) => {
    if ((value.length > 3) && (value.includes('@')) && (value.includes('.'))) {
        return true
    } else {
        return false
    }
}

export default emailValidator