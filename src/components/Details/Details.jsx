import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Details extends Component {

    //On click, navigate to the Edit page
    handleEdit = ()=>{
        console.log('in handleEdit');
        this.props.history.push('/edit');
    }

    //On click, navigate to the Home page
    returnHome = ()=>{
        this.props.history.push('/');
    }

    render (){
        //Show all details for selected movie
        //Show all genres for selected movie
        const renderGenres = this.props.currentGenres.map((genre)=>{
            return (
                <li>{genre.genre}</li>
            )
        })

        return (
            <div>
                <h2>Details</h2>
                <img src={this.props.currentMovie.poster} alt={this.props.currentMovie.title} className="featuredMovie" />
                <h4 className="movieDetails">{this.props.currentMovie.title}</h4>
                <p className="movieDetails">{this.props.currentMovie.description}</p>
                <Button size="small" variant="contained" color="secondary" className="buttons" onClick={this.handleEdit}>Edit</Button>
                <Button size="small" variant="contained" color="secondary" className="buttons" onClick={this.returnHome}>Return to Home</Button>
                <ul className="myGenres">
                    {renderGenres}
                </ul>
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

export default connect(mapStateToProps)(Details);