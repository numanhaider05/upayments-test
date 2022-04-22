// import './productdetail.css'
import '../../assets/css/productdetail.css';
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

function ProductDetail(props){
    const [product, setProduct] = React.useState(null);
    const [error, setError] = React.useState(null);
    const params = useParams();
    
    React.useEffect(()=> {
        axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${params.productId}`).then((response)=>{
        console.log('products values==>',response.data)    
        setProduct(response.data);
        }).catch((error)=>{ 
            setError(error);  
        });
    },[]);  
    function ClearError(){
        setError(null);
    }
    return (
        <div className='productdetail-container'>
              {product &&
               <div className='productdetail'>
                  <div className='uppersection'>
                      <div className='productimage'>
                          <img src={product.avatar}/>
                      </div>
                      <div className='productdetails'>
                          <div>
                              <h2>{product.name}</h2>
                          </div>
                          <div>
                              <p>{`$${product.price}.00`}</p>
                          </div>
                      </div>
                  </div>
                  <hr width="95%" style={{border: "1px solid black", marginTop: "15px"}}></hr>
                  <div className='lowersection'>
                      <div className='desc-heading'>
                          <h3>Description</h3>
                      </div>
                      <div className='product-decs'>
                          <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                          {/* {product.description} */}
                          </p>
                      </div>
                  </div>
              </div>}
        </div>
    )
}

export default ProductDetail;  