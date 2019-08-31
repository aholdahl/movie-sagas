import React, {Component} from 'react';
import { connect } from 'react-redux';

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
                <img src={this.props.currentMovie.poster} alt={this.props.currentMovie.title}/>
                <h4>{this.props.currentMovie.title}</h4>
                <p>{this.props.currentMovie.description}</p>
                <ul>
                    {renderGenres}
                </ul>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.returnHome}>Return to Home</button>
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