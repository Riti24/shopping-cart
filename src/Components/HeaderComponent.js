import React from 'react';
import App from '../App.css';
import ProductList from './ProductList';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    constructor(props)
    {
        super(props);
        this.Productclick=this.Productclick.bind(this);
        this.homeClick=this.homeClick.bind(this);
    }
    Productclick(){
        return(
            <ProductList/>
           
        );

    }
    homeClick(){
        return(
           <h1>Home was clicked</h1>
        );

    }
    
    render(){
        const navStyle={
            color:'white',
            textDecoration:'none'
           };
        return(
            <div className="nav">
                <h3>Logo</h3>
                
                    <ul className="nav-link">
                        <li onClick={this.homeClick}>Home</li>
                        <Link style={navStyle} to="/menu">
                        <li >Products </li>
                        </Link>
                        <Link style={navStyle} to="/cart">
                        <li >Cart </li>
                        </Link>
                    </ul>
                

                
            </div>
        );
    }
}
export default Header;