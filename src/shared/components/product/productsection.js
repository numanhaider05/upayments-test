// import './productsection.css'
import '../../../assets/css/productsection.css';
import React, { useEffect } from 'react';
import Product from './product';
import allproducts from '../data/productsdata';    
import { Link } from 'react-router-dom';    
import { width } from '@mui/system';  
import Button from '@mui/material/Button';  
import { useState } from 'react';  
import axios from 'axios'; 
import EventEmitter from '../../utils/ee';

const baseURL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"; 



function ProductSection(props){

    const [loading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);
    const [actualProducts,setActualProducts] = useState([]);
    const [error, setError] = React.useState(null); 
    
    const onFilterIt = (selectedcategory) => {  
        console.log('selectedcategory ==>', selectedcategory)  
       

    }

    useEffect( ()=> {
        init();
    }, []); 
    
    useEffect(()=>{
        if(props.filterBy){
            console.log(props.filterBy.toLowerCase());
            let filtered = actualProducts.filter(product => product?.category?.toLowerCase() == props.filterBy?.toLowerCase());
            setProducts(filtered)
        }else{
            setProducts(actualProducts)
        }
    },[props.filterBy])

    useEffect(()=>{
        if(props.searchBy){
            console.log(props.searchBy.toLowerCase());
            let filtered = products.filter(product => product?.name?.toLowerCase().includes(props.searchBy?.toLowerCase()));
            setProducts(filtered)
        }else{
            setProducts(actualProducts)
        }
    },[props.searchBy])

    const init = async ()=>{
        let response = await axios.get(baseURL); 
        setProducts(response.data);
        setActualProducts(response.data)
    }

    
    
    // function FilterProducts(event){
    //     setProducts((products, event)=> {
    //         return products.filter(product => product.category.toLowerCase().includes(event.toLowerCase()));
    //     });
    // }
    // EventEmitter.subscribe('filterproducts', (event) => FilterProducts(event));

    function ClearError(){
        setError(null);
    }
    return (
        <div className='product-section'>
            <div className='products'>   
                 
                {   products? products.map((product)=> (
                        // console.log('product ==>',key)
                        // <Product name={product.name} price={product.price} link={product.img}/>
                        <div style={{ width:'20%', height:'50%', margin:'0px 5px'}}>
                            <Link to={`/${product.id}`}><Product name={product.name} price={product.price} link={product.avatar} /></Link>
                        </div>
                    )): <h1>Wait! Data is loading</h1>
                }
                {/* <Product name="Apple Watch" price="$50.00"/>
                <Product name="Apple Watch" price="$50.00"/>
                <Product name="Apple Watch" price="$50.00"/>
                <Product name="Apple Watch" price="$50.00"/>
                <Product name="Apple Watch" price="$50.00"/>
                <Product name="Apple Watch" price="$50.00"/> */}
            </div>  
            <div className='add-btn'>
                <div>
                   <Link to="/NewProduct"><Button size='small' variant="contained" style={{borderRadius: '40px', color: 'white', background:'black', fontSize: '28px'}}>+</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductSection;