import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './pages/contact'
import Create from './pages/Create'
import Autocross from './pages/tarmacChallengeAutocross'
import {createMuiTheme, ThemeProvider } from '@material-ui/core'
import { grey, red } from '@material-ui/core/colors'
import Banner from './Components/Banner'
const theme = createMuiTheme({
  type: "dark",
  palette: {
    primary: grey,
    secondary: red
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
