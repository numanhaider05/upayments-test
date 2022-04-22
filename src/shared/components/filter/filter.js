// import './filter.css'
import '../../../assets/css/filter.css'
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import allcategories from '../data/categoriesdata.';
import axios from 'axios';
import EventEmitter from '../../utils/ee';
import ProductSection from '../product/productsection';
import { Button } from '@mui/material';

const baseURL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"; 

function Filter({filterChanged}){    
    // const [dropdownvalue, setDropdownvalue] = React.useState();
    const [categories, setCategories] = React.useState(null);   
    // const [filtercategories, setCategories] = React.useState(null);   
    const [error, setError] = React.useState(null);    
    
    const handleChange = (e)=> {   
        //   console.log('value', e.target.value)   
        const c = e.target.value;
        c=="All"?filterChanged(""):filterChanged(c);  
        // if(c=="All"){
        //     filterChanged("");    
        // }else{  
        //     filterChanged(c);     
        // }
    }

    const handleClick = ()=> {
        const c = '';
        filterChanged(c);  
    }
    
    React.useEffect(()=> {
        axios.get(baseURL).then((response)=>{
            setCategories(response.data);
        }).catch((error)=>{ 
            setError(error);
        });
    },[]);  
    function ClearError(){
        setError(null);
    }

    return(
        <div className='filter-container'>
                    <div className='filter'>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                <Select
                                id="category"
                                onChange={handleChange}  
                                label="category"
                                style={{background: 'white',   boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
                                >
                                    <MenuItem value="All" selected>All</MenuItem>
                                { 
                                    categories?.map((category)=>(
                                        
                                        <MenuItem  value={category.name} >{category.name}</MenuItem>
                                    ))
                                }
                                {/* <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem> */}
                                </Select>
                                {/* <Button onClick={handleClick} className='clear-btn' variant='filled' style={{background: 'white', marginTop: '5px',marginLeft: '25px', width:'20px', height: '20px'}}>Clear</Button> */}
                        </FormControl>

                    </div> 
        </div>  
    )   
}  

export default Filter;  