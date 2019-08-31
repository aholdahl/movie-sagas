import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';

class Home extends Component {

    //On page load, retrieve the movie details from the database and store in the movies reducer
    componentDidMount (){
        this.fetchAllMovies();
    }

    fetchAllMovies = ()=>{
        this.props.dispatch({
            type: 'FETCH_ALL_MOVIES'
        })
    }

    //On click, retrieve the details of the clicked movie and store in the currentMovie reducer
    showDetails = (id)=>{
        this.props.dispatch({
            type: 'FETCH_CURRENT_MOVIE',
            payload: id
        })
    //Also retrieve the genres of the clicked movie and store in the currentGenres reducer
        this.props.dispatch({
            type: 'FETCH_CURRENT_GENRES',
            payload: id
        })
    //open Details page
        this.props.history.push('/details');
    }

    render() {
        //Show all details for all movies
        return (
            <div>
                <h2>Now Playing</h2>
                <Paper className="myTable">
                    <Table>
                        <TableHead>
                            <TableRow className="allMovies">
                                <TableCell>Click Image to See More</TableCell>
                                <TableCell>Synopsis</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.movies.map((film)=>{
                                return (
                                    <TableRow key={film.id}>
                                        <TableCell><img src={film.poster} alt={film.title} onClick={() => { this.showDetails(film.id) }} /></TableCell>
                                        <TableCell><h4>{film.title}</h4><p>{film.description}</p></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        movies: reduxStore.movies
    }
}

export default connect(mapStateToProps)(Home);