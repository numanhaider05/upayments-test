// import './products.css'; 
import '../../assets/css/products.css';  
import React, { useState } from 'react';
import FilterSection from '../../shared/components/filter/filtersection';
import ProductSection from '../../shared/components/product/productsection';

function Products(){

    const [filterBy, setFilterBy] = useState('');
    const [searchBy, setSearchBy] = useState('');



    return (
        <div className='products-container'>
            <FilterSection filterChanged={(c)=>{ setFilterBy(c); }} searchChanged={(c)=>{ setSearchBy(c); }}/>
            <ProductSection filterBy={filterBy} searchBy={searchBy}/>         
        </div>
    )
}

export default Products;