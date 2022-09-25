import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './pages/contact'
import Create from './pages/Create'
import Results from './pages/results'
import Autocross from './pages/tarmacChallengeAutocross'
import {createMuiTheme, ThemeProvider } from '@material-ui/core'
import { colors } from '@material-ui/core'
import Banner from './Components/Banner'


const theme = createMuiTheme({
  palette: {
    primary: {main: '#212121'},
    background:{default: colors.lightBlue},
    secondary: colors.red
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Banner />
      <Router>
          <Route exact path="/" component={Create} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/autocross"component={Autocross} />
          <Route exact path="/results"component={Results} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
