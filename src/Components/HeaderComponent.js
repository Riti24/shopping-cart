import React from 'react';
import App from '../App.css';
import ProductList from './ProductList';
import {Link} from 'react-router-dom';
import { Input } from 'reactstrap';
import {Plist} from "./Products";

class Header extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            search:'',
            Products:Plist
        }
        
     
        
    }

    searchandle(event){
        this.setState({
            search:event.target.value  
        });
        
    }

    
    render(){
        const navStyle={
            color:'white',
            textDecoration:'none'
           };


           let ProductLib=[];
           const searchkey=this.state.search.trim().toLowerCase();
           if(searchkey && searchkey.length>0)
           {
               ProductLib=this.state.Products.filter(key=>{
                   return (key.category.toLowerCase().match(searchkey))
               })
            
           }
           
           
        return(
                
                    <div className="nav">
                        <img src="/assets/images/logo.png" width="50px"></img>
                        <ul className="nav-link">
                            <Link style={navStyle} className="material-icons" to="/home">
                            <li >Home</li>
                            </Link>
                            <Link style={navStyle}  className="material-icons" to="/menu">
                            <li >All Products </li>
                            </Link>
                            <Link style={navStyle} className="material-icons" to="/cart">
                            <li >Cart </li>
                            </Link>
                        </ul>
                        <div style={{display:'grid'}}>
                            <Input  type="text" value={this.state.search} onChange={(event)=>this.searchandle(event)} placeholder="Search your Product here">
                            </Input>
                            <ul className="list">
                                {
                                    ProductLib.map((i,index)=>{
                                    return <li key={index}><Link to='/menu/:1'></Link>{i.name}</li>})
                                }
                            </ul>
                        </div>
                    </div>
                

        );
    }
}
export default Header;