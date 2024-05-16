import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './features/User'


const persistConfig = {
    key: 'root',
    storage
};

const reducer = combineReducers({
    user: userReducer,
})


const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);