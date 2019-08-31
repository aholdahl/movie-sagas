//opens a page that shows the details of the movie that was clicked
//shows all genres attached to that movie
//Button: Edit (go to Edit)
//Button: Back to List (return to Home)

import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    handleEdit = ()=>{
        console.log('in handleEdit');
        this.props.history.push('/edit');
    }

    returnHome = ()=>{
        this.props.history.push('/');
    }

    render (){

        // let renderGenres = ()=>{if(this.props.currentMovie.genre !== null) {
        //     // return ( this.props.currentMovie.genre.map((category)=>{
        //         return (
        //             <li>{this.props.currentMovie.genre}</li>
        //             // <li>{category}</li>
        //         )
        //     // })
        //     }
        // }
    

        return (
            <div>
                <h2>Details</h2>
                <img src={this.props.currentMovie.poster} alt={this.props.currentMovie.title}/>
                <h4>{this.props.currentMovie.title}</h4>
                <p>{this.props.currentMovie.description}</p>
                {/* <ul>
                    {renderGenres}
                </ul> */}
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.returnHome}>Return to Home</button>
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