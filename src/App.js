import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Bg from './components/Bg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
        dark:0
    }
}
  mode=()=>{
    if(this.state.dark) {
      this.setState({
        dark:0
      })
    }
    else {
      this.setState({
        dark:1
      })
    }
 }
  render() {
    return (
      <div>
          <Router>
       <Navbar mode={this.mode} isdark={this.state.dark} />
       {/* business entertainment general health science sports technology */}
       <Switch>
          <Route exact path="/"> <News key="general" pagesize="12" country="in" category="general" isdark={this.state.dark}/></Route>
          <Route exact path="/general"> <News key="2" pagesize="12" country="in" category="general" isdark={this.state.dark}/></Route>
          <Route exact path="/business"> <News key="business" pagesize="12" country="in" category="business" isdark={this.state.dark}/></Route>
          <Route exact path="/entertainment"> <News key="entertainment" pagesize="12" country="in" category="entertainment" isdark={this.state.dark}/></Route>
          <Route exact path="/health"> <News key="health" pagesize="12" country="in" category="health" isdark={this.state.dark}/></Route>
          <Route exact path="/science"> <News key="science" pagesize="12" country="in" category="science" isdark={this.state.dark}/></Route>
          <Route exact path="/sports"> <News key="sports" pagesize="12" country="in" category="sports" isdark={this.state.dark}/></Route>
          <Route exact path="/technology"> <News key="technology" pagesize="12" country="in" category="technology" isdark={this.state.dark}/></Route>
        </Switch>
       </Router>
      </div>
    )
  }
}
