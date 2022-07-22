import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './pages/contact'
import Create from './pages/Create'
import Autocross from './pages/tarmacChallengeAutocross'
import {createMuiTheme, ThemeProvider } from '@material-ui/core'
import { colors } from '@material-ui/core'
import Banner from './Components/Banner'
import React from 'react'
import data from "./data.json"


const theme = createMuiTheme({
  palette: {
    primary: {main: '#212121'},
    background:{default: colors.lightBlue},
    secondary: colors.red
  }
})

class App extends React.Component {
 constructor() {
   super();
   this.state = {
    products: data.products,
    size:"",
    sort:"",
 }
}
  render() {
  return (
    <ThemeProvider theme={theme}>

      <Banner />
      <Router>
          <Route exact path="/" component={Create} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/autocross"component={Autocross} />
      </Router>
    </ThemeProvider>
  );
}
}
export default App;
