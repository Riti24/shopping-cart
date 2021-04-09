import React from 'react';
import {Card,CardImgOverlay,CardTitle,CardImg,Button} from 'reactstrap';
import App from '../App.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const addToCart=(product)=>{
   
console.log("add to cart clicked")
let arr=[];
arr.push(product.id);
console.log(arr);
}

function Renderproducts({product}){
    // console.log(product.id);
       return(
            <div >
                {/* <h1>product Component</h1> */}
                <Card className="card" >
                    <CardImg width="50%" src={product.image} alt={product.name} />
                    <CardImgOverlay>
                        <CardTitle>{product.name}</CardTitle>
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


         );
       }
    
export default Displayproducts;