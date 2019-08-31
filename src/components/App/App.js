import React, { Component } from 'react';
import { HashRouter as Router, Route/*, Link*/ } from 'react-router-dom';

//import child Components
import Home from '../Home/Home.jsx';
import Details from '../Details/Details.jsx';
import Edit from '../Edit/Edit.jsx';

// //import styling libraries
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import './bootstrap.min.css';
// import swap from 'sweetalert';
// import 'typeface-roboto';
import './App.css';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#00695c',
//     },
//     secondary: {
//       main: '#f8bbd0',
//     }
//   }
// })

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <header>
            <h1>Movie Saga Cinema</h1>
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={Details} />
            <Route path="/edit" component={Edit} />
          </main>
        </div>
      </Router>
      // </MuiThemeProvider >
    );
  }
}

export default App;
