import React from 'react';
import House from './house';
const  FeaturedHouses = (props) => {
    if (props.house) return (
        <div>
            <div className="row featuiedHouse">
                <h3 className="col-md-12 text-center">
                Featured house
                </h3>
            </div>
            <House house={props.house}/>

        </div>)
        return(<div>No featured house at this time</div>)
    
}
 
export default FeaturedHouses;