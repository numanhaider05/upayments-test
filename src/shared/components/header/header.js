// import  './header.css'
import '../../../assets/css/header.css';


function Header(){
    return (
        <div className='header-container'>
            <div className='header'>    
               <div className='left-header'>   
                   <p><i><b>UPayments Store</b></i></p>   
               </div>
               <div className='right-header'>
                   <p><i><b>Register</b></i></p>
               </div>
            </div>
        </div>
    )
}

export default Header;