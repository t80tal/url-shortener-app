import { configureStore } from '@reduxjs/toolkit'

import { uiReducer } from './ui-store/ui'
import { authReducer } from './auth-store/auth'

// Redux store with slices
const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer
    },
});

export default store;