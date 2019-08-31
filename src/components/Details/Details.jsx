//opens a page that shows the details of the movie that was clicked
//shows all genres attached to that movie
//Button: Edit (go to Edit)
//Button: Back to List (return to Home)

import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render (){
        return (
            <div>
                <h2>Details</h2>
                <img src={this.props.currentMovie.poster} alt={this.props.currentMovie.title}/>
                <h4>{this.props.currentMovie.title}</h4>
                <p>{this.props.currentMovie.description}</p>
                <button>Edit</button>
                <button>Return to Home</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        currentMovie: reduxStore.currentMovie
    }
}

export default connect(mapStateToProps)(Details);