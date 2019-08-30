//opens a page that shows the details of the movie that was clicked
//shows all genres attached to that movie
//Button: Edit (go to Edit)
//Button: Back to List (return to Home)

import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render (){
        return (
            <h3>Details</h3>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Details);