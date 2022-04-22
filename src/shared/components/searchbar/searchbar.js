// import './searchbar.css'
import '../../../assets/css/searchbar.css';
import TextField from '@mui/material/TextField';
import EventEmitter from '../../utils/evenemitter';

function Searchbar({searchChanged}){
    
    const handleChange = (e)=> {
        console.log('searchby ==>', e.target.value);
        searchChanged(e.target.value);
    }   

    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <TextField
                    // label="Size"
                    id="outlined-size-small"
                    // defaultValue=
                    onChange={handleChange}
                    placeholder='Search here...'

                    size="medium"
                    style={{background: 'white',   boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
                />
            </div>
        </div>
    )
}


export default Searchbar;