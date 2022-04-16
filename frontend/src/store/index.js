import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from './ui-store/ui'

// Redux store with slices
const store = configureStore({
    reducer: {
        ui: uiReducer
    },
});

export default store;