//Input: Movie Title
//Input: Movie Description
//Button: Save Changes (updates the applicable movie in the database)
//Button: Cancel (return to Details)

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        title: '',
        description: ''
    }

    componentDidMount(){
        this.setState({
            title: this.props.currentMovie.title,
            description: this.props.currentMovie.description,
        })
    }

    handleChange = (event, property)=>{
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }

    handleSubmit = ()=>{
        this.props.dispatch({
            type: 'CHANGE_CURRENT',
            payload: {
                ...this.state,
                id: this.props.currentMovie.id
            }
        });
        this.setState({
            title: '',
            description: ''
        })
        this.props.history.push('/');
    }

    returnDetails = ()=>{
        console.log('in returnDetails');
        this.setState({
            title: '',
            details: ''
        })
        this.props.history.push('/details');
    }
    
    render() {
        return (
            <div>
                <h2>Edit</h2>
                <img src={this.props.currentMovie.poster} alt={this.props.currentMovie.title} />
                <input value={ this.state.title } onChange={(event)=>{this.handleChange(event, 'title')}}/>
                <input value={this.state.description} onChange={(event)=>{this.handleChange(event, 'description')}}/>
                {/* <p><input type="checkbox" />{this.props.currentMovie.genre}</p> */}
                <button onClick={this.handleSubmit}>Save Changes</button>
                <button onClick={this.returnDetails}>Cancel</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        currentMovie: reduxStore.currentMovie
    }
}

export default connect(mapStateToProps)(Edit);