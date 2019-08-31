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


// rootSaga generator function
function* rootSaga() {
    yield takeEvery ('FETCH_ALL_MOVIES', fetchAllMovies);
    // yield takeEvery('FETCH_ALL_GENRES', fetchAllGenres);
    yield takeEvery ('FETCH_CURRENT_MOVIE', fetchCurrentMovie);
    yield takeEvery('FETCH_CURRENT_GENRES', fetchCurrentGenres);
    yield takeEvery('CHANGE_CURRENT_MOVIE', changeCurrentMovie);
}

//send GET request to server for the Movies table
function* fetchAllMovies(action){
    try{
        let response = yield axios.get('/movies')
        yield put ({
            type: 'SET_ALL_MOVIES',
            payload: response.data
        })
    } catch (error){
        console.log('Could not get movies:', error);
    }
}

// //send GET request to server for the Genres table
// function* fetchAllGenres(action) {
//     try {
//         let response = yield axios.get('/genres/')
//         yield put({
//             type: 'SET_ALL_GENRES',
//             payload: response.data
//         })
//     } catch (error) {
//         console.log('Could not get genres:', error);
//     }
// }

//send GET request to the server for the current movie
function* fetchCurrentMovie(action){
    try {
        let response = yield axios.get(`/movies/${action.payload}`);
        yield put ({
            type: 'SET_CURRENT_MOVIE',
            payload: response.data[0]
        })
    } catch (error){
        console.log('Could not get current movie:', error);
    }
}

//send GET request to the server for genres of the current movie
function* fetchCurrentGenres(action) {
    try {
        let response = yield axios.get(`/genres/${action.payload}`);
        yield put({
            type: 'SET_CURRENT_GENRES',
            payload: response.data
        })
    } catch (error) {
        console.log('Could not get current genres:', error);
    }
}

//send PUT request to the server to update the current movie, then trigger GET request for updated info
function* changeCurrentMovie(action){
    try {
        yield axios.put(`/movies`, action.payload)
        yield put ({
            type: 'FETCH_CURRENT_MOVIE',
            payload: action.payload.id
        })
    } catch (error){
        console.log('Could not update current movie:, error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// // Used to store the movie genres
// const genres = (state = [], action) => {
//     switch (action.type) {
//         // case 'SET_GENRES':
//         //     return action.payload;
//         case 'SET_ALL_GENRES':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Used to store the current movie details
const currentMovie = (state = {}, action) =>{
    switch (action.type){
        case 'SET_CURRENT_MOVIE':
            return action.payload;
        default: 
            return state;
    }
}

//Used to store the current movie genres
const currentGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENT_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        // genres,
        currentMovie,
        currentGenres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
