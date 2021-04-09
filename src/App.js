
import './App.css';
import { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/MainComponent';


class App extends Component{
  render(){
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //   </header>
    // </div>
    <BrowserRouter>
    <div className="App"> 
    <Main/>
    </div>
   
    </BrowserRouter>
     );
  }
}
 

export default App;
