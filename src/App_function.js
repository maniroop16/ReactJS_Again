import React,{useState} from 'react'
import NavbarClass from './components/NavbarClass'
// import NewsClass from './components/NewsClass'
import NewsFunction from './components/NewsFunction'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const AppFunction = ()=> {
  const apikey = process.env.REACT_APP_NEWS_APIKEY
  
  const [progress, setprogress] = useState(0)

  const loadbarProgress = (progress)=>{
    setprogress(progress)
  }
    return (
      <div>
        <Router>
        <LoadingBar
        color="#f11946"
        progress={progress}
      />
        <NavbarClass/>
          <Routes>
            <Route exact path="/" element={<NewsFunction progress={loadbarProgress} key={'general'} apikey={apikey} country ={''} pageSize={5} category={'general'}/>}>
            </Route>
            <Route exact path="/business" element={<NewsFunction progress={loadbarProgress} key={'business'} apikey={apikey} country ={''} pageSize={5} category={'business'}/>}>
            </Route>
            <Route exact path="/entertainment" element={<NewsFunction progress={loadbarProgress} key={'entertainment'} apikey={apikey} country ={''} pageSize={5} category={'entertainment'}/>}>
            </Route>
            <Route exact path="/health" element={<NewsFunction progress={loadbarProgress} key={'health'} apikey={apikey} country ={''} pageSize={5} category={'health'}/>}>
            </Route>
            <Route exact path="/science" element={<NewsFunction progress={loadbarProgress} key={'science'} apikey={apikey} country ={''} pageSize={5} category={'science'}/>}>
            </Route>
            <Route exact path="/technology" element={<NewsFunction progress={loadbarProgress} key={'technology'} apikey={apikey} country ={''} pageSize={5} category={'technology'}/>}>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }


export default AppFunction
