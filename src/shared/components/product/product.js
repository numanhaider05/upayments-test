// import './product.css'
import '../../../assets/css/product.css';
import { Link } from 'react-router-dom';

function Product(props){
    return (
        <div className='product'>
             <div className='product-img'>
               <img src={props.link} alt="this is image" width= "150px" height="150px" />
             </div>
             <div className='nameandvalue'>
                 <div className='productname'>
                    <p>{props.name}</p>
                 </div>   
                 <div className='productprice'>   
                    <p>{props.price}</p>  
                 </div>
             </div>
        </div>
    )
}

export default Product;