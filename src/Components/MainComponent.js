import React from 'react';

import {Plist} from './Products';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Redirect,Route,withRouter} from 'react-router-dom';
import Displayproducts from './ProductList';
import Cart from './Cart';

class Main extends React.Component{
    constructor(props)
    {
        super(props);
         this.state={
             Products:Plist
         }
        
    }
   // Products=Plist;
  
    
    render(){
        const HomePage=()=>{
            return(
                <h1>Home</h1>
            );
        }
        
        // console.log(this.Product);
        return(
            <div className="App">
                <Header></Header>
                {/* <h1>Main Component</h1> */}
                <Switch>
                <Route exact path="/home" component={HomePage}></Route>
                <Route exact path="/menu" component={()=><Displayproducts products={this.state.Products}/>}/>
                <Route exact path="/cart" component={Cart}></Route>
                {/* <Route exact path="/menu/:id" component={prodwithId} */}
                <Redirect to="/home"></Redirect>
                </Switch>
                

                
                <Footer></Footer>
            </div>
        );
    }
}
export default Main;