import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        title: '',
        description: '',
        // genres: []
    }

    //On page load, retrieve the genres from the database and store in the genres reducer (not required for base mode)
    //store the current details in the local state for editing
    componentDidMount() {
        // this.fetchAllGenres();
        this.setState({
            id: this.props.currentMovie.id,
            title: this.props.currentMovie.title,
            description: this.props.currentMovie.description,
        })
    }

    // fetchAllGenres = () => {
    //     this.props.dispatch({
    //         type: 'FETCH_ALL_GENRES'
    //     })
    // }

    //On change, capture the updated information from the input and save in the local state
    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }

    //On submit, send updated movie details to the database
    handleSubmit = () => {
        this.props.dispatch({
            type: 'CHANGE_CURRENT_MOVIE',
            payload: this.state
        });
        //Upon successful update of the database, reset the local state to blank
        this.setState({
            title: '',
            description: ''
        })
        //Navigate back to the Details page
        this.props.history.push('/details');
    }

    //On click, reset the local state to blank and navigate to the details page
    returnDetails = () => {
        console.log('in returnDetails');
        this.setState({
            title: '',
            details: ''
        })
        this.props.history.push('/details');
    }

    render() {
        //Show all details for selected movie as input fields
        //Show all genres for selected movie (no editing required for base mode)
        const renderGenres = this.props.currentGenres.map((genre) => {
            return (
                <li>{genre.genre}</li>
            )
        })

        return (
            <div>
                <h2>Edit</h2>
                <img src={this.props.currentMovie.poster} alt={this.props.currentMovie.title} />
                <input value={this.state.title} onChange={(event) => { this.handleChange(event, 'title') }} />
                <textarea value={this.state.description} onChange={(event) => { this.handleChange(event, 'description') }} />
                <ul>
                    {renderGenres}
                </ul>
                <button onClick={this.handleSubmit}>Save Changes</button>
                <button onClick={this.returnDetails}>Cancel</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        currentMovie: reduxStore.currentMovie,
        currentGenres: reduxStore.currentGenres
    }
}

export default connect(mapStateToProps)(Edit);