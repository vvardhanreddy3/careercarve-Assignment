import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import StudentFrom from './components/StudentFrom'
import MentorsList from './components/MentorsList'


import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={StudentFrom} />
        <Route exact path="/mentors" component={MentorsList} />
      </Switch>
    )
}
}

export default App;
