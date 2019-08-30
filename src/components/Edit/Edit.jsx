//Input: Movie Title
//Input: Movie Description
//Button: Save Changes (updates the applicable movie in the database)
//Button: Cancel (return to Details)

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        title: '',
        details: ''
    }
    
    render() {
        return (
            <h3>Edit</h3>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Edit);