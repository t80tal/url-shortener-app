import { useEffect, useState } from 'react'

const useInput = (validator) => {
    const [value, setValue] = useState('')
    const [inputClass, setInputClass] = useState('')
    // Initally there's no class.
    // On change value.
    const onChangeHandler = (event) => {
        if (typeof event === 'object' &&
            !Array.isArray(event) &&
            event !== null) {
            setValue(event.target.value)
        } else {
            setValue(event)
        }
    }
    useEffect(() => {
        // Validate depends on value.
        if (value == '') {
            setInputClass('')
            return
        }

        // Cleanup function with timer
        const timer = setTimeout(() => {
            if (validator(value)) {
                setInputClass('')
            } else if (!validator(value)) {
                setInputClass('invalid-input')
            }
        }, 700)

        return (() => {
            clearTimeout(timer)
        })

    }, [validator, value])
    // Return a generic object.
    return {
        value,
        setValue: onChangeHandler,
        inputClass
    }
}

export default useInput