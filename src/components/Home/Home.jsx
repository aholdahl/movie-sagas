//renders the movie list as a table
//ONCLICK: when movie poster is clicked, go to Details

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount (){
        this.fetchMovies()
    }

    fetchMovies = ()=>{
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    showDetails = (id)=>{
        this.props.dispatch({
            type: 'FETCH_CURRENT',
            payload: id
        })
        this.props.history.push('/details');
    }

    render() {
        return (
            <div>
                <h2>Now Playing</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Click Image to See More</th>
                            <th>Synopsis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map((film)=>{
                            return (
                                <tr key={film.id}>
                                    <td><img src={film.poster} alt={film.title} onClick={()=>{this.showDetails(film.id)}}/></td>
                                    <td><h4>{film.title}</h4><p>{film.description}</p></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
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