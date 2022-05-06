import React from 'react'
import { useSelector } from 'react-redux'

// Alert area
// type: page key for example 'urls'
// inputResult: the result you get from useInput when you bind it to an input.
const AlertArea = ({ type, inputResult }) => {
    const inputAlert = useSelector(state => state.ui.alert)
    console.log(inputAlert)
    // In case of multiple inputs for one alert area.
    if (Array.isArray(inputResult)) {
        if ((inputResult.filter(result => !result.type).length > 0)) {
            return <></>
        }
        const errors = inputResult.filter(result => result.type === 'danger')
        return (
            < div className={inputAlert.target === type ? inputAlert.alertClass : errors.length > 0 ? errors[0].type : inputResult[0].type} >
                {inputAlert.msg && inputAlert.target === type ? inputAlert.msg : errors.length > 0 ? errors[0].message : inputResult[0].message}
            </div >
        )
    }
    // 
    return (
        // 2 Alert systems: 1 when you submit (comes from redux 'inputAlert') 
        // and one from useInput hook when alert you in real time (inputResult).
        <div className={inputAlert.target === type ? inputAlert.alertClass : inputResult.type}>
            {inputAlert.msg && inputAlert.target === type ? inputAlert.msg : inputResult.message}
        </div>
    )
}

export default AlertArea