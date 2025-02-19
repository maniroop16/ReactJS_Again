import React, { Component } from 'react'
import NavbarClass from './components/NavbarClass'
import NewsClass from './components/NewsClass'
// import apiKey from '../NewsAPIKey';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";


export default class Appclass extends Component {
  apikey = process.env.REACT_APP_NEWS_APIKEY
  
  state = {
    progress:0
  } 
  loadbarProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
        <NavbarClass/>
          <Routes>
            <Route exact path="/" element={<NewsClass progress={this.loadbarProgress} key={'general'} apikey={this.apikey} country ={''} category={'general'}/>}>
            </Route>
            <Route exact path="/business" element={<NewsClass progress={this.loadbarProgress} key={'business'} apikey={this.apikey} country ={''} category={'business'}/>}>
            </Route>
            <Route exact path="/entertainment" element={<NewsClass progress={this.loadbarProgress} key={'entertainment'} apikey={this.apikey} country ={''} category={'entertainment'}/>}>
            </Route>
            <Route exact path="/health" element={<NewsClass progress={this.loadbarProgress} key={'health'} apikey={this.apikey} country ={''} category={'health'}/>}>
            </Route>
            <Route exact path="/science" element={<NewsClass progress={this.loadbarProgress} key={'science'} apikey={this.apikey} country ={''} category={'science'}/>}>
            </Route>
            <Route exact path="/technology" element={<NewsClass progress={this.loadbarProgress} key={'technology'} apikey={this.apikey} country ={''} category={'technology'}/>}>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
