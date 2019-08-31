import React, { Component } from 'react';
import { HashRouter as Router, Route/*, Link*/ } from 'react-router-dom';

//import child Components
import Home from '../Home/Home.jsx';
import Details from '../Details/Details.jsx';
import Edit from '../Edit/Edit.jsx';

// //import styling libraries
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import {AppBar} from '@material-ui/core';
// import './bootstrap.min.css';
// import swap from 'sweetalert';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7f0000',
    },
    secondary: {
      main: '#ceaa3e', //rgb(206, 170, 62)
    }
  }
})

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppBar position="static">
            <h1>Movie Saga Cinema</h1>
          </AppBar>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={Details} />
            <Route path="/edit" component={Edit} />
          </main>
        </div>
      </Router>
      </MuiThemeProvider >
    );
  }
}

export default App;
