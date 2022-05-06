import { useEffect, useState } from 'react'

// Hook for input validations.
const useInput = (validator, errorMessage) => {
    const [value, setValue] = useState('')
    const [inputClass, setInputClass] = useState('')
    const [result, setResult] = useState({
        type: null,
        message: null
    })
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
            setResult({
                type: null,
                message: null
            })
            return
        }

        // Cleanup function with timer
        const timer = setTimeout(() => {
            if (validator(value)) {
                setInputClass('')
                setResult({
                    type: 'success',
                    message: (
                        <>
                            <svg style={{ marginRight: '10px' }} alt='Thumbs up icon to describe inital successfully validation.' xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 16 16'>
                                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                                <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
                            </svg>
                            Great.
                        </>
                    )
                })
            } else if (!validator(value)) {
                setInputClass('invalid-input')
                setResult({
                    type: 'danger',
                    message: errorMessage
                })
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
        inputClass,
        result
    }
}

export default useInput