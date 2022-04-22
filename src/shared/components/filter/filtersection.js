// import './filtersection.css'
import '../../../assets/css/filtersection.css';
import Searchbar from '../searchbar/searchbar';
import Filter from './filter';

function FilterSection({filterChanged, searchChanged}){
    return (
        <div className='filter-section'>
            <Searchbar  searchChanged={searchChanged} />  
            <Filter filterChanged={filterChanged} />
        </div>
    )
}

export default FilterSection;