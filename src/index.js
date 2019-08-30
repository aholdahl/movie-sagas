import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
//import child components
import App from './components/App/App.js';

//import styling libraries
import './index.css';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('FETCH_MOVIES', fetchMovies);
    yield takeEvery ('FETCH_GENRES', fetchGenres);
}

function* fetchMovies(action){
    try{
        let response = yield axios.get('/')
        yield put ({
            type: 'SET_MOVIES',
            payload: response.data
        })
    } catch (error){
        console.log('Could not get movies:', error);
    }
}

function* fetchGenres(action) {
    try {
        let response = yield axios.get('/')
        yield put({
            type: 'SET_GENRES',
            payload: response.data
        })
    } catch (error) {
        console.log('Could not get genres:', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();