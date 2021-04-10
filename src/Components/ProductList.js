import React from 'react';
import {Card,CardImgOverlay,CardTitle,CardImg,Button, CardBody, CardSubtitle, Dropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';
import App from '../App.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Cart from './Cart';
let arr=[];
const addToCart=(product)=>{
   
console.log("add to cart clicked")

arr.push(product);
console.log(arr);
return(
    <div>
        {alert("Product"+product.id+" added to cart")}
    </div>
);
}

function Renderproducts({product}){
    // console.log(product.id);
       return(
            <div >
                {/* <h1>product Component</h1> */}
                <Card className="card" >
                    <CardImg width="50%" src={product.image} alt={product.name} />
                    <CardImgOverlay>
                        <CardTitle><span style={{fontWeight:'bold'}}>Product: </span>{product.name}</CardTitle>
                        <CardSubtitle><span style={{fontWeight:'bold'}}>Price: </span>{product.Price}</CardSubtitle>
                    </CardImgOverlay>
                    <Button outline onClick={()=>{addToCart(product)}}>
                Add to cart
            </Button>
            </Card>
            
            </div>
        );

       }
       const Displayproducts=(props)=>{
           //console.log(props.products);
           
         const display = props.products.map((products)=>{
             return(
            <div className="col-12 col-md-5 m-1"  key={products.id}>
            <Renderproducts product={products}  />
        </div>
  );
});


         return(
             <div >
                    <Dropdown >
                        
                        <DropdownToggle>Filter</DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem>boyFriendFit</DropdownItem>
                        <DropdownItem>slimFit</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

            <div className="container">
            
            <div className="row">
                
                    {display}
                    </div>
                    <div className="container">
                <div className="row justify-content-center">  
                
                <Pagination aria-label="Page navigation example">
              <PaginationItem>
                  <PaginationLink first href="#" />&nbsp;
               
                  <PaginationLink previous href="#" />&nbsp;
                  
                
                  <PaginationLink href="#">&nbsp;
                    1
                   
               
               
                  <PaginationLink href="#">&nbsp;
                    2
                  </PaginationLink>&nbsp;
                
                  <PaginationLink href="#">&nbsp;
                    3
                  </PaginationLink>&nbsp;
                
                
                  <PaginationLink href="#">&nbsp;
                    4
                  </PaginationLink>&nbsp;
                
               
                  <PaginationLink href="#">&nbsp;
                    5
                  </PaginationLink>&nbsp;
                
                  <PaginationLink next href="#" />
                  
                  <PaginationLink last href="#" />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
              </div> 
              </div>
                    </div>
            </div>


         );
       }
    
export default Displayproducts;