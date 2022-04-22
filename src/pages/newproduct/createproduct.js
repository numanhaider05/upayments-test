// import './createproduct.css'
import '../../assets/css/createproduct.css';
import React from 'react';
import { useFormik }  from 'formik'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import allcategories from '../../shared/components/data/categoriesdata';
import allcategories from '../../shared/components/data/categoriesdata.';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const baseURL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"; 
const postURL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/";

function CreateProduct(){
    const navigate = useNavigate();
    const [categories, setCategories] = React.useState(null);
    const [error, setError] = React.useState(null);  

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

    const [values, setValues]= React.useState(null);
    const formik = useFormik({
        initialValues: {
            name: '',
            desc: '',
            imageurl: '',
            category: '',
            price: '',
            developerEmail:''
          },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            axios.post(postURL, values).then(function (response) {
                navigate(-1);
              });
          },

        handleChange: event =>{
            setValues(prevValues => ({
                ...prevValues,
                // we use the name to tell Formik which key of `values` to update
                [event.target.name]: event.target.value
              }))
        }
    });

    return (
        <div className='createproduct-container'>
            <div className='form'>
               <form onSubmit={formik.handleSubmit}>
                    <div><h2>Create Product</h2></div>
                    {/* <div><TextField size='small' id="product-name" name="product-name" type="text" placeholder='Name' variant="outlined" onSubmit={formik.handleChange} value={formik.values.name} style={{background: 'white'}} /></div> */}
                    <div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="Name"
                            style={{height: '30px', borderRadius:'5px'}}
                        />
                    </div>
                    {/* <div><TextField size='small' id="product-image" name="product-image" type="text" placeholder='Description' variant="outlined" onSubmit={formik.handleChange} value={formik.values.desc} style={{background: 'white'}} /></div> */}
                    <div>
                        <input
                            id="desc"
                            name="desc"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.desc}
                            placeholder="Description"
                            style={{height: '30px', borderRadius:'5px'}}
                        />
                    </div>
                    <div>
                        <input
                            id="imageurl"
                            name="imageurl"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.imageurl}
                            placeholder="Image URL"
                            style={{height: '30px', borderRadius:'5px'}}
                        />
                    </div>
                    {/* <div><TextField size='small' id="product-image" name="product-image" type="text" placeholder='Image URL' variant="outlined" onSubmit={formik.handleChange} value={formik.values.imageurl} style={{background: 'white'}} /></div> */}
                    <div >
                            <Select
                                id="category"
                                name='category'
                                value= {formik.values.category}
                                size='small'
                                // defaultValue='Local'
                                // onChange={handleChange}
                                fullWidth
                                style={{background: 'white', borderRadius:'5px', height: '40px',border:'solid black 2px'}}
                                onChange={formik.handleChange}
                                
                                >
                                {
                                    categories?.map((category)=>(
                                        <MenuItem value={category.id}>{category.name}</MenuItem>
                                    ))
                                }

                            </Select>
                    </div>
                    {/* <div><TextField size='small' id="price" name="price" type="text" placeholder='Price' variant="outlined" onSubmit={formik.handleChange} value={formik.values.productprice} style={{background: 'white'}} /></div> */}
                    <div>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            placeholder="Price"
                            style={{height: '30px', borderRadius:'5px'}}
                        />
                    </div>
                    <div>
                        <input
                            id="developerEmail"
                            name="developerEmail"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.developerEmail}
                            placeholder="Developer Email"
                            style={{height: '30px', borderRadius:'5px'}}
                        />
                    </div>
                    <div className='button'><Button variant="contained" type='submit'>Submit</Button></div>  
               </form>
            </div>
        </div>
    )
}

export default CreateProduct;